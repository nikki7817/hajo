
import { z } from "zod";

export const formSchema = z.object({
  subject_name: z.string().min(1, "Subject is required"),
  condition: z.enum(["New", "Like New", "Good", "Fair", "Poor"]),
  price: z.coerce.number().min(0, "Price must be positive"),
  owner_name: z.string().min(1, "Name is required"),
  contact_number: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  semester: z.coerce.number().min(1).max(6),
  batch: z.string().min(1, "Batch is required"),
});

export type FormValues = z.infer<typeof formSchema>;
