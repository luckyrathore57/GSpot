import z from "zod";
export const LoginSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(100),
});
export const SignupSchema = z.object({
  username: z.string().min(5).max(30),
  password: z.string().min(6).max(100),
  email: z.string().email().max(100),
  collegeName: z.string().min(5).max(100),
});
