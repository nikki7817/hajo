
export interface BookListing {
  id: string;
  owner_name: string;
  semester: number;
  batch: string;
  condition: "New" | "Like New" | "Good" | "Fair" | "Poor";
  price: number;
  contact_number: string;
  email: string;
  user_id: string;
  subject_name: string;
}
