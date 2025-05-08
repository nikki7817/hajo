
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import BookListingsTable from "./BookListings/BookListingsTable";
import { BookListing } from "./BookListings/types";
import { toast } from "sonner";

interface BookListingsProps {
  subjectName: string;
}

const BookListings = ({ subjectName }: BookListingsProps) => {
  const [listings, setListings] = useState<BookListing[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchListings = async () => {
    try {
      const { data, error } = await supabase
        .from("book_listings")
        .select("*")
        .eq("subject_name", subjectName)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const typedListings = data?.map(listing => ({
        ...listing,
        condition: listing.condition as BookListing["condition"]
      })) || [];

      setListings(typedListings);
    } catch (error: any) {
      console.error("Error fetching listings:", error);
      toast.error("Could not fetch listings: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, [subjectName]);

  if (loading) {
    return <div className="text-center py-8">Loading listings...</div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">{subjectName}</h2>
        <p className="text-muted-foreground">Available book listings from BCA students</p>
      </div>
      {listings.length > 0 ? (
        <BookListingsTable 
          listings={listings} 
          onListingDeleted={fetchListings}
        />
      ) : (
        <div className="text-center py-8 border rounded-md">
          <p className="text-muted-foreground">No listings available for this subject yet.</p>
        </div>
      )}
    </div>
  );
};

export default BookListings;
