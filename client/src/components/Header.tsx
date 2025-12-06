import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    // { label: "Team", id: "team" },
    { label: "FAQ", id: "faq" },
    // About behaves as both a section on the home page and a standalone route
    { label: "About", id: "about", path: "/about" },
    { label: "Contact", id: "contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-logo"
          >
            Najaf
          </button> */}
          <img src="./images/1.svg" alt="Najaf Logo" className="h-24 w-auto" />

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {menuItems.map((item) => (
              <Button
                key={item.id ?? item.path}
                variant="ghost"
                onClick={() => {
                  if (item.path) {
                    // If we're on the home page, prefer scrolling to the section.
                    if (location === "/") {
                      scrollToSection(item.id as string);
                    } else {
                      setLocation(item.path);
                    }
                  } else {
                    // Section links (no path) should navigate to home first when
                    // clicked from another route, then scroll to the section.
                    if (location === "/") {
                      scrollToSection(item.id as string);
                    } else {
                      setLocation("/");
                      setTimeout(() => scrollToSection(item.id as string), 120);
                    }
                  }
                }}
                data-testid={`link-${item.id ?? item.path}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

         <a href ="https://app.vnztech.com" target="_blank" rel="noopener noreferrer">
          <Button
  className="hidden md:flex bg-[#735334] hover:bg-[#5c4429] text-white border-2 border-black"
  onClick={() => scrollToSection("pricing")}
  data-testid="button-cta-header"
>
  Get Started
</Button>
</a>


          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="nav-mobile">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id ?? item.path}
                  variant="ghost"
                  onClick={() => {
                    if (item.path) {
                      if (location === "/") {
                        scrollToSection(item.id as string);
                      } else {
                        setLocation(item.path);
                      }
                    } else {
                      if (location === "/") {
                        scrollToSection(item.id as string);
                      } else {
                        setLocation("/");
                        setTimeout(() => scrollToSection(item.id as string), 120);
                      }
                    }
                  }}
                  className="justify-start"
                  data-testid={`link-mobile-${item.id ?? item.path}`}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection("pricing")}
                className="mt-2"
                data-testid="button-cta-mobile"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
