
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ContactInfo from "./ContactInfo";
import BookConditionBadge from "./BookConditionBadge";
import { BookListing } from "./types";

interface BookListingsTableProps {
  listings: BookListing[];
  onListingDeleted?: () => void;
}

const BookListingsTable = ({ listings, onListingDeleted }: BookListingsTableProps) => {
  const [contactVisible, setContactVisible] = useState<string | null>(null);
  const { user } = useAuth();

  const toggleContact = (id: string) => {
    setContactVisible(contactVisible === id ? null : id);
  };

  const deleteBookListing = async (id: string) => {
    try {
      const { error } = await supabase
        .from("book_listings")
        .delete()
        .eq("id", id)
        .eq("user_id", user?.id);

      if (error) throw error;
      
      toast.success("Listing removed successfully");
      
      // Call the callback to refresh listings
      if (onListingDeleted) {
        onListingDeleted();
      }
    } catch (error: any) {
      console.error("Error deleting listing:", error);
      toast.error("Could not delete listing: " + error.message);
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Seller</TableHead>
            <TableHead>Batch</TableHead>
            <TableHead>Condition</TableHead>
            <TableHead>Price (₹)</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell className="font-medium">{listing.owner_name}</TableCell>
              <TableCell>{`Sem ${listing.semester} (${listing.batch})`}</TableCell>
              <TableCell>
                <BookConditionBadge condition={listing.condition} />
              </TableCell>
              <TableCell className="font-semibold">₹{listing.price}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleContact(listing.id)}
                  >
                    {contactVisible === listing.id ? "Hide Contact" : "Show Contact"}
                  </Button>
                  
                  {user && listing.user_id === user.id && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remove Listing</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to remove this book listing? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteBookListing(listing.id)}>
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </div>
                
                {contactVisible === listing.id && (
                  <ContactInfo 
                    email={listing.email} 
                    contactNumber={listing.contact_number} 
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookListingsTable;
