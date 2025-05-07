
import { Button } from "@/components/ui/button";
import { BookOpen, BookText, BookPlus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Exchange Books.<br />
              <span className="text-primary">Help BCA Juniors.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              HAJO connects Daksha BCA students to exchange textbooks, saving money and building community. Help your juniors, or find the books you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">
                Find Books
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                List Your Books
              </Button>
            </div>
            
            <div className="mt-10 flex items-center text-sm">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-2 border-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground"><span className="font-semibold text-foreground">500+</span> BCA students already exchanging books</p>
            </div>
          </div>
          
          <div className="flex-1 relative animate-slide-up">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform">
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Find Textbooks</h3>
                  <p className="text-xs text-muted-foreground">Search by course code or title</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 transition-transform">
                  <BookText className="h-8 w-8 text-secondary mb-2" />
                  <h3 className="font-semibold">Exchange Easily</h3>
                  <p className="text-xs text-muted-foreground">On-campus exchanges made simple</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 transition-transform">
                  <BookPlus className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">List Your Books</h3>
                  <p className="text-xs text-muted-foreground">Help juniors with your old books</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-white mb-2">
                    ₹
                  </div>
                  <h3 className="font-semibold">Save Money</h3>
                  <p className="text-xs text-muted-foreground">Reduce costs on course materials</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-2 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
