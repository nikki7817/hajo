
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HAJO saved me over ₹3,000 this semester! I found all my DBMS textbooks from seniors who were happy to help.",
      name: "Aarav Sharma",
      role: "First Year, BCA",
      avatarBg: "bg-blue-100"
    },
    {
      quote: "As a graduating final year student, I was able to pass on my programming books to juniors while recovering some costs. Win-win!",
      name: "Priya Patel",
      role: "Final Year, BCA",
      avatarBg: "bg-green-100"
    },
    {
      quote: "The platform is so easy to use. I met up with another student at the college library and exchanged books within minutes.",
      name: "Rahul Singh",
      role: "Second Year, BCA",
      avatarBg: "bg-yellow-100"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Students Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from BCA students who've experienced the benefits of book exchanges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <QuoteIcon className="h-10 w-10 text-primary/20 mb-4" />
                <p className="mb-6 text-foreground italic">"{item.quote}"</p>
                <div className="flex items-center">
                  <div className={`${item.avatarBg} w-10 h-10 rounded-full flex items-center justify-center font-semibold text-primary`}>
                    {item.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 border border-border/50 text-center">
          <h3 className="text-2xl font-bold mb-4">Join 500+ BCA Students</h3>
          <p className="text-muted-foreground mb-8">
            Be part of our Daksha BCA campus book exchange community and help make education more accessible for all
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="bg-primary/5 rounded-full px-6 py-3 text-sm">
              <span className="font-semibold">1,200+</span> Books Exchanged
            </div>
            <div className="bg-primary/5 rounded-full px-6 py-3 text-sm">
              <span className="font-semibold">3</span> BCA Batches
            </div>
            <div className="bg-primary/5 rounded-full px-6 py-3 text-sm">
              <span className="font-semibold">₹2,50,000</span> Student Savings
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
