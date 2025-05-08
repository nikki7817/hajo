
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      console.error("Logout error:", error);
      toast.error("Error signing out: " + error.message);
    }
  };

  const getUserInitials = () => {
    if (!user || !user.email) return "U";
    return user.email.charAt(0).toUpperCase();
  };

  return (
    <header className="py-4 px-4 md:px-6 lg:px-8 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to={user ? "/dashboard" : "/"} className="text-xl font-bold text-primary flex items-center">
              <span className="mr-1">HAJO</span>
              <span className="text-sm text-muted-foreground font-normal">Help A Junior Out</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {!loading && !user && (
              <>
                <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
                <a href="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Benefits
                </a>
                <a href="#featured" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Featured Books
                </a>
                <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
                <Link to="/login">
                  <Button variant="outline" className="ml-4">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}

            {!loading && user && (
              <>
                {/* <Link to="/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link> */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={user.user_metadata?.avatar_url} />
                        <AvatarFallback>{getUserInitials()}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-0.5">
                        <p className="text-sm font-medium">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <Link to="/dashboard">
                      <DropdownMenuItem className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background">
            <nav className="flex flex-col space-y-4">
              {!loading && !user && (
                <>
                  <a 
                    href="#how-it-works" 
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </a>
                  <a 
                    href="#benefits" 
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Benefits
                  </a>
                  <a 
                    href="#featured" 
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Featured Books
                  </a>
                  <a 
                    href="#testimonials" 
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </a>
                  <div className="flex flex-col space-y-2 px-4 pt-2">
                    <Link to="/login">
                      <Button variant="outline" className="w-full">Log In</Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                </>
              )}

              {!loading && user && (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="flex flex-col space-y-2 px-4 pt-2">
                    <div className="flex items-center space-x-2 py-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{getUserInitials()}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{user.email}</span>
                    </div>
                    <Button variant="outline" onClick={handleLogout}>Log Out</Button>
                  </div>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
