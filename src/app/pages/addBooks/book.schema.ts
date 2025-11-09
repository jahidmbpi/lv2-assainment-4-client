import { z } from "zod";

export const bookSchema = z.object({
  name: z.string().min(1, "Book name is required"),
  title: z.string().min(1, "Book title is required"),
  author: z.string().min(1, "Author name is required"),
  genre: z.enum(
    ["SCIENCE", "FICTION", "BIOGRAPHY", "HISTORY", "NON_FICTION", "FANTASY"],
    { required_error: "Please select a genre" }
  ),
  image: z
    .string()
    .url("Please enter a valid image URL")
    .regex(/\.(png|jpg|jpeg|webp|gif)$/i, "Only image URLs allowed"),
  isbn: z.string().regex(/^[0-9-]{10,13}$/, "Invalid ISBN format"),
  copies: z
    .number({ invalid_type_error: "Copies must be a number" })
    .min(1, "At least 1 copy required"),
  description: z.string().min(10, "At least 10 characters needed"),
  available: z.boolean().optional(),
});

export type BookFormData = z.infer<typeof bookSchema>;
