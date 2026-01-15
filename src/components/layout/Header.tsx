import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Who We Are", path: "/who-we-are" },
  { name: "Daily Prayers", path: "/daily-prayers" },
  { name: "Prayer Requests", path: "/prayer-requests" },
  { name: "Testimonies", path: "/testimonies" },
  { name: "Missions & Giving", path: "/missions-giving" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <Globe className="w-6 h-6 text-navy-deep" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-bold text-primary block leading-tight">
                Global Network
              </span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">
                of Intercessors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-gold bg-primary/5"
                    : "text-foreground hover:text-gold hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="sm" asChild>
              <Link to="/prayer-requests">Submit Prayer</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-gold bg-primary/5"
                      : "text-foreground hover:text-gold hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="gold" className="mt-4" asChild>
                <Link to="/prayer-requests" onClick={() => setIsOpen(false)}>
                  Submit Prayer Request
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
