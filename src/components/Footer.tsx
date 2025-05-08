
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-primary flex items-center mb-4">
              HAJO
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Helping students exchange textbooks and build community on campus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 ml-auto">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browse Books</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">List a Book</a></li>
          
            </ul>
          </div>
          
    
        </div> */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  <div>
    <h3 className="text-2xl font-bold text-primary mb-3">HAJO</h3>
    <p className="text-sm text-muted-foreground mb-6">
      Helping students exchange textbooks and build community on campus.
    </p>
    <div className="flex space-x-4">
      <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
        <Facebook size={20} />
      </a>
      <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
        <Twitter size={20} />
      </a>
      <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
        <Instagram size={20} />
      </a>
      <a href="#" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
        <Mail size={20} />
      </a>
    </div>
  </div>

  <div className="md:text-right">
    <h4 className="text-base font-semibold mb-4">Explore HAJO</h4>
    <ul className="space-y-2 text-sm">
      <li>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          How It Works
        </a>
      </li>
      <li>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          Browse Books
        </a>
      </li>
      <li>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          List a Book
        </a>
      </li>
    </ul>
  </div>
</div>


<div className="border-t border-border/50 mt-12 pt-8 flex justify-center items-center text-sm text-muted-foreground">
  <p>Made with <span className="text-red-500">❤️</span> by  <a href="https://www.linkedin.com/in/nikhil-moorthy17/"> <span className="text-blue-600">Nikhil Moorthy</span></a></p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
