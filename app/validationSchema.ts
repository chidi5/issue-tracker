import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required").max(65535),
});

export const PatchIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "Assigned to user is required")
    .max(255)
    .optional()
    .nullable(),
});

export const UserSchema = z.object({
  name: z.string().min(1, "Name is required").max(255).optional(),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  hashedPassword: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});
