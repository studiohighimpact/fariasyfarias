import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Propiedades", href: "#properties" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="https://res.cloudinary.com/dwspyodrs/image/upload/v1764947812/553372246_18137888824432283_2474607405858223405_n_iovfh4.jpg"
            alt="Farias & Farias Logo"
            className="h-10 w-auto object-contain rounded-sm"
          />
          <span className={cn(
            "font-serif font-bold text-xl tracking-tight transition-colors",
            isScrolled ? "text-primary" : "text-primary"
          )}>
            Farias & Farias
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={() => scrollToSection("#contact")}
            className="bg-primary hover:bg-primary/90 text-white text-sm px-6 rounded-sm font-medium"
          >
            Contactar Ahora
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-base font-medium text-foreground/90 hover:text-secondary py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={() => scrollToSection("#contact")}
            className="w-full bg-primary text-white mt-2"
          >
            Contactar Ahora
          </Button>
        </div>
      )}
    </header>
  );
}
