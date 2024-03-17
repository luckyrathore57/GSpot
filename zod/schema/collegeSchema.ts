import { z } from "zod";

export const CollegeSignupSchema=z.object({
    collegeName:z.string().min(1)
})