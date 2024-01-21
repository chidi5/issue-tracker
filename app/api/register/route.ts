import bcrypt from "bcrypt";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, hashedPassword } = body;
  const validation = UserSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    throw new Error("Email already exists");
  }

  const password = await bcrypt.hash(hashedPassword, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword: password,
    },
  });

  return NextResponse.json(user);
}
