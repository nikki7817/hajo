
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../schema";

const subjects = [
  "C Programming",
  "Digital Computer Fundamentals",
  "Mathematics I",
  "English",
  "Environmental Studies"
];

interface SubjectFieldProps {
  form: UseFormReturn<FormValues>;
}

export const SubjectField = ({ form }: SubjectFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="subject_name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Subject</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
