
import { useState } from "react";
import { Plus } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import SubjectGrid from "@/components/SubjectGrid";
import BookListings from "@/components/BookListings";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BookUploadForm from "@/components/BookUploadForm";

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              BCA Book Exchange
            </h1>
            <p className="text-muted-foreground">
              Find and exchange books with other Daksha BCA students
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <Button onClick={() => setDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Listing
            </Button>
            <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Book Listing</DialogTitle>
              </DialogHeader>
              <BookUploadForm 
                onSuccess={() => {
                  setDialogOpen(false);
                }} 
              />
            </DialogContent>
          </Dialog>
        </div>
        
        {selectedSubject ? (
          <div>
            <button 
              onClick={() => setSelectedSubject(null)}
              className="flex items-center mb-4 text-primary hover:underline"
            >
              <span className="mr-1">←</span> Back to subjects
            </button>
            <BookListings subjectName={selectedSubject} />
          </div>
        ) : (
          <SubjectGrid onSelectSubject={setSelectedSubject} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
