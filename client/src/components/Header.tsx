import { useState } from "react";
import { Link } from "wouter";
import { ShoppingCart, Menu, X, Home, Cake, Pizza, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/Red and Pink Illustrated Cake Logo (1)_1760884264886.png";

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export default function Header({ cartItemCount = 0, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "/", icon: Home },
    { label: "Pâtisseries", href: "#patisseries", icon: Cake },
    { label: "Pizzas", href: "#pizzas", icon: Pizza },
    { label: "À Propos", href: "#about", icon: Info },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b-2 border-primary/20"
      style={{
        boxShadow: "0 4px 20px rgba(212, 97, 59, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28 gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center hover-elevate active-elevate-2 rounded-lg px-2 py-2 -ml-2">
              <img 
                src={logoImage} 
                alt="Espoir - Pizzeria & Pâtisserie" 
                className="h-20 sm:h-24 w-auto object-contain"
                data-testid="img-logo"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="font-medium text-base gap-2"
                  asChild
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  <a href={link.href} onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}>
                    <IconComponent className="h-4 w-4" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="default"
              size="icon"
              className="relative shadow-lg shadow-primary/40 h-12 w-12"
              style={{
                boxShadow: "0 0 20px rgba(212, 97, 59, 0.5), 0 4px 15px rgba(212, 97, 59, 0.3)",
              }}
              onClick={onCartClick}
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs font-bold animate-pulse"
                  style={{
                    boxShadow: "0 0 15px rgba(239, 68, 68, 0.6)",
                  }}
                  data-testid="badge-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-12 w-12"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border" data-testid="nav-mobile">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className="justify-start font-medium text-base gap-2"
                    asChild
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    <a href={link.href} onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}>
                      <IconComponent className="h-4 w-4" />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
