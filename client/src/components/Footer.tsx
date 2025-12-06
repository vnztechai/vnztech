import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Youtube, Facebook, ArrowUp } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const [location, setLocation] = useLocation();

  const goToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Navigate to home then attempt to scroll after navigation
    setLocation("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <footer className="footer-wrapper relative overflow-hidden" style={{ backgroundColor: "#654c43" }} data-testid="footer">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
      </div> */}

      {/* Animated wave at top */}
      {/* <div className="wave-container absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-path"></path>
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main footer content with unique diagonal layout */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Brand section - spans more columns */}
          <div className="md:col-span-5 footer-brand">
            <div className="mb-6">
              <img src="./images/1.svg" alt="Najaf Logo" className="h-28 w-auto" />
            </div>
            <p className="footer-tagline text-muted-foreground text-lg leading-relaxed" data-testid="text-footer-tagline">
              Building the next generation of smart asset management platforms with AI precision and real-time control
            </p>
          </div>

          {/* Quick Links - offset positioning */}
          <div className="md:col-span-3 md:col-start-7 footer-links">
            <h4 className="footer-heading font-semibold text-lg mb-6 relative inline-block" data-testid="text-footer-links-title">
              Quick Links
              <span className="heading-underline absolute -bottom-2 left-0 h-0.5 w-0 bg-black transition-all duration-500" />
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  className="footer-link justify-start px-0 hover:translate-x-2 transition-all duration-300"
                  onClick={() => goToSection(link.id)}
                  data-testid={`link-footer-${link.id}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="link-arrow mr-2 opacity-0 transition-opacity duration-300" style={{ color: "#000000" }}>→</span>
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Social section */}
          <div className="md:col-span-3 footer-social">
            <h4 className="footer-heading font-semibold text-lg mb-6 relative inline-block" data-testid="text-footer-social-title">
              Follow Us
              <span className="heading-underline absolute -bottom-2 left-0 h-0.5 w-0 bg-black transition-all duration-500" />
            </h4>
            <div className="flex gap-3 mb-6 flex-wrap">
              <a href="https://www.linkedin.com/company/vnztech/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="social-icon hover:scale-110 transition-all duration-300"
                  onClick={() => console.log("LinkedIn clicked")}
                  data-testid="button-social-linkedin"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>

              <a href="https://x.com/vnztech" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="social-icon hover:scale-110 transition-all duration-300"
                  onClick={() => console.log("Twitter clicked")}
                  data-testid="button-social-twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.youtube.com/@Vnztech_ai" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="social-icon hover:scale-110 transition-all duration-300"
                  onClick={() => console.log("YouTube clicked")}
                  data-testid="button-social-youtube"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.facebook.com/VNZTech/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="social-icon hover:scale-110 transition-all duration-300"
                  onClick={() => console.log("Facebook clicked")}
                  data-testid="button-social-facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.f6s.com/vnztech" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="social-icon hover:scale-110 transition-all duration-300"
                  onClick={() => console.log("Social 1 clicked")}
                  data-testid="button-social-custom1"
                >
                  <img src="./images/20.svg" alt="Social Icon 1" className="h-6 w-6" />
                </Button>
              </a>

              <a href="https://www.crunchbase.com/organization/vnztech" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="social-icon hover:scale-110 transition-all duration-300"
                  onClick={() => console.log("Social 2 clicked")}
                  data-testid="button-social-custom2"
                >
                  <img src="./images/21.svg" alt="Social Icon 2" className="h-6 w-6" />
                </Button>
              </a>

              <a href="https://www.pinterest.com/vnztech/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="social-icon hover:scale-110 transition-all duration-300"
                  onClick={() => console.log("Social 3 clicked")}
                  data-testid="button-social-custom3"
                >
                  <img src="./images/22.svg" alt="Social Icon 3" className="h-6 w-6" />
                </Button>
              </a>
            </div>

            
            {/* Back to top button */}
            <Button
              variant="outline"
              className="back-to-top group flex items-center gap-2 transition-all duration-300"
              onClick={scrollToTop}
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="footer-copyright text-muted-foreground text-sm" data-testid="text-footer-copyright">
              © {new Date().getFullYear()} Vnztech. All rights reserved.
            </p>
            <div className="footer-legal flex gap-6 text-sm text-muted-foreground">
              <a
                href="/privacy"
                className="legal-link hover:text-[#000000] transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  if (location === "/privacy") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    setLocation("/privacy");
                    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 120);
                  }
                }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="legal-link hover:text-[#000000] transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  if (location === "/terms") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    setLocation("/terms");
                    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 120);
                  }
                }}
              >
                Terms of Service
              </a>
              {/* <a href="#" className="legal-link hover:text-primary transition-colors duration-300">Cookie Policy</a> */}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandUnderline {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .wave-container {
          height: 80px;
          transform: rotate(180deg);
        }

        .wave-svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 80px;
        }

        .wave-path {
          fill: hsl(var(--muted) / 0.3);
          animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
        }

        .footer-brand {
          animation: slideInLeft 0.8s ease-out;
        }

        .footer-links {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .footer-social {
          animation: slideInRight 0.8s ease-out 0.3s both;
        }

        .footer-logo {
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-logo::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #000000;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .footer-logo:hover::after {
          width: 100%;
        }

        .logo-underline {
          animation: expandUnderline 1s ease-out 0.5s forwards;
          width: 0;
        }

        .footer-tagline {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .footer-heading {
          transition: color 0.3s ease;
        }

        .footer-heading:hover {
          color: #000000;
        }

        .footer-heading:hover .heading-underline {
          width: 100%;
        }

        .footer-link {
          animation: fadeInUp 0.5s ease-out both;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #000000;
        }

        .footer-link:hover .link-arrow {
          opacity: 1;
          color: #000000;
        }

        .social-icon {
          position: relative;
          overflow: hidden;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .social-icon:hover::before {
          opacity: 1;
        }

        .social-icon:hover {
          border-color: #000000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .back-to-top {
          transition: all 0.3s ease;
        }

        .back-to-top:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .footer-bottom {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .footer-copyright {
          transition: all 0.3s ease;
        }

        .footer-copyright:hover {
          color: hsl(var(--foreground));
        }

        .legal-link {
          position: relative;
        }

        .legal-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #000000;
          transition: width 0.3s ease;
        }

        .legal-link:hover::after {
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </footer>
  );
}