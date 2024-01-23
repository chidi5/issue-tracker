"use client";

import { ErrorMessage, Link, Spinner } from "@/app/components";
import { UserSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Callout,
  Flex,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type UserFormData = z.infer<typeof UserSchema>;

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      console.log(data);
      await axios.post("/api/register", data);
      router.push("/login");
    } catch (error) {
      setSubmitting(false);
      setError("Unexpected error occurred.");
    }
  });

  return (
    <>
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <Flex
        justify="center"
        align="center"
        className="w-[400px] p-10 rounded bg-slate-200"
      >
        <Flex
          position="relative"
          gap="6"
          justify="center"
          align="center"
          width="100%"
          direction="column"
        >
          <Heading>Sign Up</Heading>
          <form onSubmit={onSubmit} className="w-full">
            <Flex direction="column" gap="2">
              <TextField.Root>
                <TextField.Input
                  size="3"
                  placeholder="name"
                  {...register("name")}
                  required
                />
              </TextField.Root>
              <div className="text-xs">
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </div>
              <TextField.Root>
                <TextField.Input
                  size="3"
                  placeholder="Enter your email"
                  {...register("email")}
                />
              </TextField.Root>
              <div className="text-xs">
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </div>
              <TextField.Root>
                <TextField.Input
                  size="3"
                  type="password"
                  placeholder="password"
                  {...register("hashedPassword")}
                />
              </TextField.Root>
              <div className="text-xs">
                <ErrorMessage>{errors.hashedPassword?.message}</ErrorMessage>
              </div>
              <Button size="3" disabled={isSubmitting}>
                Sign Up
                {isSubmitting && <Spinner />}
              </Button>
            </Flex>
            <Flex gap="1" mt="3" className="text-xs font-medium">
              <Text>Already a member?</Text>
              <Link href="/api/auth/signin">Sign in</Link>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUpForm;
