
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BookOpen, ArrowRight } from 'lucide-react';

const FeaturedBooks = () => {
  const books = [
    {
      title: "Database Management Systems",
      author: "Raghu Ramakrishnan",
      course: "BCA303",
      condition: "Like New",
      price: "450",
      subject: "DBMS",
      cover: "bg-blue-100",
      icon: "📊"
    },
    {
      title: "Data Structures using C++",
      author: "D.S. Malik",
      course: "BCA204",
      condition: "Good",
      price: "350",
      subject: "DSA",
      cover: "bg-green-100",
      icon: "🧠"
    },
    {
      title: "Web Technologies",
      author: "Uttam K. Roy",
      course: "BCA404",
      condition: "Very Good",
      price: "600",
      subject: "Web Dev",
      cover: "bg-yellow-100",
      icon: "📐"
    },
    {
      title: "Programming in Java",
      author: "E. Balagurusamy",
      course: "BCA305",
      condition: "Good",
      price: "400",
      subject: "Java",
      cover: "bg-purple-100",
      icon: "💻"
    },
  ];

  return (
    <section id="featured" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Books</h2>
            <p className="text-muted-foreground max-w-2xl">
              Recently listed textbooks ready for exchange on BCA campus
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button variant="ghost" className="text-sm">All Books</Button>
            <Button variant="ghost" className="text-sm">Core BCA</Button>
            <Button variant="ghost" className="text-sm">Programming</Button>
            <Button variant="ghost" className="text-sm">DSA</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <Card key={index} className="overflow-hidden border border-border/50 hover:shadow-md transition-shadow">
              <div className={`${book.cover} p-8 flex items-center justify-center text-4xl`}>
                {book.icon}
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-primary/5">
                    {book.course}
                  </Badge>
                  <Badge variant="secondary">
                    ₹{book.price}
                  </Badge>
                </div>
                <h3 className="font-semibold mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">By {book.author}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{book.subject}</span>
                  <span className={`
                    ${book.condition === 'Like New' ? 'text-green-600' : 
                      book.condition === 'Very Good' ? 'text-blue-600' : 'text-amber-600'}
                  `}>
                    {book.condition}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="w-full text-sm" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="flex items-center">
            Browse All Available Books
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
