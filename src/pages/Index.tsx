
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import FeaturedBooks from "@/components/FeaturedBooks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <FeaturedBooks />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join HAJO?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Start exchanging books, saving money, and helping fellow BCA students at Daksha College today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="font-medium">
                  Sign Up Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-primary-foreground/10 font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
