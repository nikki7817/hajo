import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/AuthContext";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubjectField } from "./BookUploadForm/FormFields/SubjectField";
import { ConditionField } from "./BookUploadForm/FormFields/ConditionField";
import { formSchema, type FormValues } from "./BookUploadForm/schema";
import { useBookUpload } from "./BookUploadForm/useBookUpload";
import { toast } from "sonner";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect } from "react";

const BookUploadForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { user } = useAuth();
  const { handleSubmit: submitForm, isSubmitting } = useBookUpload(onSuccess);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject_name: "",
      condition: "Good",
      price: 0,
      owner_name: "",
      contact_number: "",
      email: "",
      semester: 1,
      batch: "", // This might be causing the validation error if empty string is invalid
    },
    mode: "onChange", // Add this to validate on change
  });

  // Add this console log to see what user data we're working with
  useEffect(() => {
    if (user) {
      // console.log("Current user data:", user);
      // console.log("User metadata:", user.user_metadata);
    }
  }, [user]);

  // Populate form with user data when available
  useEffect(() => {
    if (user) {
      // Update form value for email which is available in user object
      form.setValue("email", user.email || "");
      
      // Check if user.user_metadata exists and has the necessary fields
      if (user.user_metadata) {
        form.setValue("owner_name", user.user_metadata.name || "");
        form.setValue("contact_number", user.user_metadata.contact_number || "");
        
        // Make sure semester is a number
        const semester = parseInt(user.user_metadata.semester) || 1;
        form.setValue("semester", semester);
        
        // Make sure batch is a string (not null or undefined)
        const batch = String(user.user_metadata.batch || "");
        if (batch) {
          form.setValue("batch", batch);
          // console.log("Set batch to:", batch);
        } else {
          // If no batch is found, set a default value to pass validation
          form.setValue("batch", new Date().getFullYear().toString());
          // console.log("Set default batch to current year");
        }
      } else {
        // If metadata is missing, set sensible defaults
        form.setValue("batch", new Date().getFullYear().toString());
        // console.log("No user metadata found, setting default batch");
      }
    }
  }, [user, form]);

  const onSubmit = async (values: FormValues) => {
    if (!user) {
      toast.error("You must be logged in to create a listing");
      return;
    }
    
    try {
      // console.log("Submitting form with values:", values);
      // console.log("User ID:", user.id);
      
      const success = await submitForm(values, user.id);
      // console.log("Submission result:", success);
      
      if (success) {
        toast.success("Book listing created successfully!");
        form.reset({
          subject_name: "",
          condition: "Good",
          price: 0,
          owner_name: user.user_metadata?.name || "",
          contact_number: user.user_metadata?.contact_number || "",
          email: user.email || "",
          semester: user.user_metadata?.semester || 1,
          batch: user.user_metadata?.batch || "",
        });
      } else {
        toast.error("Failed to create book listing");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while creating the listing");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SubjectField form={form} />
        <ConditionField form={form} />
        
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price (₹)</FormLabel>
              <FormControl>
                <Input type="number" {...field} min="0" step="0.01" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Add a visible batch field that is editable in case user metadata is missing */}
        {/* <FormField
          control={form.control}
          name="batch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Batch</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g., 2023" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* Hidden fields pre-filled with user data */}
        <input type="hidden" {...form.register("owner_name")} />
        <input type="hidden" {...form.register("contact_number")} />
        <input type="hidden" {...form.register("email")} />
        <input type="hidden" {...form.register("semester")} />

        {/* Display user information as read-only */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Your contact information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Name:</span> {user?.user_metadata?.name}
            </div>
            <div>
              <span className="text-muted-foreground">Contact:</span> {user?.user_metadata?.contact_number}
            </div>
            <div>
              <span className="text-muted-foreground">Email:</span> {user?.email}
            </div>
            <div>
              <span className="text-muted-foreground">Semester:</span> {user?.user_metadata?.semester}
            </div>
            <div>
              <span className="text-muted-foreground">Batch:</span> {user?.user_metadata?.batch}
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          onClick={() => {
            if (Object.keys(form.formState.errors).length > 0) {
              // console.log("Form has validation errors:", form.formState.errors);
              toast.error("Please fix the form errors before submitting");
            }
          }}
        >
          {isSubmitting ? "Creating..." : "Create Listing"}
        </Button>
      </form>
    </Form>
  );
};

export default BookUploadForm;