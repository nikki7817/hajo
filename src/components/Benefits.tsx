
import { 
  PiggyBank, 
  Recycle, 
  Users, 
  Clock, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefitsList = [
    {
      icon: <PiggyBank className="h-6 w-6 text-primary" />,
      title: "Save Money",
      description: "Reduce textbook expenses by up to 70% compared to buying new books each semester."
    },
    {
      icon: <Recycle className="h-6 w-6 text-primary" />,
      title: "Environmentally Friendly",
      description: "Reuse books and reduce waste by extending the lifecycle of educational materials."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Build Community",
      description: "Connect with peers across different BCA batches to share resources."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Quick & Convenient",
      description: "On-campus exchanges at Daksha College mean no shipping delays or online payment hassles."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Trusted Network",
      description: "Exchange within your verified Daksha BCA community for added safety and trust."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Pay It Forward",
      description: "Help junior BCA students succeed by providing affordable access to course materials."
    },
  ];

  return (
    <section id="benefits" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Use HAJO?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            More than just a book exchange - it's about community and making BCA education more accessible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((benefit, index) => (
            <Card key={index} className="border border-border/50 shadow-sm hover:shadow transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-border/50 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Students Save an Average of ₹4,500 Per Semester</h3>
          <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary flex items-center justify-end pr-4 text-white text-sm font-medium"
              style={{ width: '70%' }}
            >
              70% Savings
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm text-muted-foreground">
            <span>New Textbooks: ~₹6,500</span>
            <span>HAJO Exchange: ~₹2,000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
