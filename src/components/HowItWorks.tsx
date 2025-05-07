
import { CheckCircle2, Upload, Search, HandshakeIcon, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-primary" />,
      title: "List Your Books",
      description: "Add your used textbooks with details like BCA course code, condition, and price expectations.",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Find Books You Need",
      description: "Search for books by title, author, or BCA course code to find exactly what you need.",
    },
    {
      icon: <HandshakeIcon className="h-8 w-8 text-primary" />,
      title: "Connect & Exchange",
      description: "Message book owners, arrange a meetup at Daksha College, and complete your exchange.",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Help Others & Save",
      description: "Rate your experience, help BCA juniors save money, and reduce your own expenses.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">How HAJO Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple four-step process to exchange textbooks with fellow BCA students at Daksha College
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 bg-primary/10 p-3 rounded-full">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Join hundreds of BCA students already exchanging books at Daksha College.
          </p>
          <a 
            href="#" 
            className="text-primary font-medium inline-flex items-center hover:underline"
          >
            Learn more about our campus guidelines
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
