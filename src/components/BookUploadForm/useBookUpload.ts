
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { FormValues } from "./schema";
import { toast } from "sonner";

export const useBookUpload = (onSuccess?: () => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: FormValues, userId: string) => {
    setIsSubmitting(true);
    try {
      // Ensure all required fields from the database schema are present
      // and have the correct types
      const listingData = {
        subject_name: values.subject_name,
        condition: values.condition,
        price: values.price,
        owner_name: values.owner_name,
        contact_number: values.contact_number,
        email: values.email,
        semester: values.semester,
        batch: values.batch,
        user_id: userId,
      };

      const { error } = await supabase.from("book_listings").insert(listingData);

      if (error) throw error;

      toast.success("Book listing created successfully");
      onSuccess?.();
      return true;
    } catch (error: any) {
      toast.error("Error creating listing: " + error.message);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting
  };
};
