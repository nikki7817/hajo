
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

// List of BCA subjects
const subjects = [
  "C Programming", "Digital Computer Fundamentals", "Mathematics I", 
  "English", "Environmental Studies", "C++ Programming",
  "Data Structures", "Database Management Systems", "Mathematics II", 
  "Financial Accounting", "Java Programming", "Web Technologies",
  "Computer Architecture", "Operating Systems", "Software Engineering", 
  "Computer Networks", "Object Oriented Analysis & Design", "Python Programming",
  "Mobile Application Development", "Statistics", "Microprocessors", 
  "Linux Administration", "Computer Graphics", "Data Mining",
  "Artificial Intelligence", "Machine Learning", "Cloud Computing", 
  "Cyber Security", "E-Commerce", "Big Data Analytics",
  "Internet of Things", "Blockchain Technology", "Project Management", 
  "Soft Skills", "Industry Internship", "Final Project"
];

interface SubjectGridProps {
  onSelectSubject: (subject: string) => void;
}

const SubjectGrid = ({ onSelectSubject }: SubjectGridProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Available Subjects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subjects.map((subject) => (
          <Card 
            key={subject} 
            className="hover:border-primary hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelectSubject(subject)}
          >
            <CardContent className="flex items-center p-6">
              <Book className="h-5 w-5 text-primary mr-3" />
              <span className="font-medium">{subject}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubjectGrid;
