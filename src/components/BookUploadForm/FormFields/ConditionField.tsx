
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../schema";

const conditions = ["New", "Like New", "Good", "Fair", "Poor"] as const;

interface ConditionFieldProps {
  form: UseFormReturn<FormValues>;
}

export const ConditionField = ({ form }: ConditionFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="condition"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Book Condition</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {conditions.map((condition) => (
                <SelectItem key={condition} value={condition}>
                  {condition}
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
