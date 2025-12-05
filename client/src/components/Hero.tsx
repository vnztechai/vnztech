import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import TextType from "./TextType";

const heroImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80";

export default function Hero() {
  // const benefits = [
  //   "Seamless Design to Deployment",
  //   "AI-Powered Automation",
  //   "Real-Time Collaboration",
  //   "Enterprise-Grade Security"
  // ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero-section min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Diagonal split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
          {/* Content section */}
          <div className="space-y-8 hero-content relative z-10">
            {/* Badge */}
            {/* <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Now with AI Automation</span>
            </div> */}

           <h1
  className="hero-title text-5xl md:text-7xl font-bold leading-tight"
  data-testid="text-hero-title"
>
  <TextType
    as="span"
    className="mr-2 text-[#3c3c3d]" // Applied #3c3c3d
    text={["Accelerate Intelligent"]}
    typingSpeed={75}
    pauseDuration={1500}
    showCursor={false}
    startOnVisible={true}
  />

  <TextType
    as="span"
    className="text-[#735334]" // Applied #735334
    text={["Innovation"]}
    typingSpeed={75}
    pauseDuration={1500}
    showCursor={true}
    cursorCharacter="|"
    startOnVisible={true}
  />
</h1>

            <p
  className="hero-subtitle text-xl md:text-2xl text-[#282728] leading-relaxed"
  data-testid="text-hero-subtitle"
>
  The leading AI-IoT platform enables predictive, secure, and smarter management of valuable assets.

</p>


            {/* <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3" data-testid={`text-benefit-${index}`}>
                  <div className="bg-primary/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul> */}

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
             <Button
  size="lg"
  className="cta-button text-lg group relative overflow-hidden bg-[#735334] hover:bg-[#5c422a]"
  style={{ color: "#ffffff" }}
  onClick={() => scrollToSection("pricing")}
  data-testid="button-start-trial"
>
  <span className="relative z-10" style={{ color: "#ffffff" }}>Get Started Free</span>
  <span className="button-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
</Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg"
                onClick={() => console.log("Watch demo clicked")}
                data-testid="button-watch-demo"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-stats flex gap-8 pt-4">
              <div className="stat-item">
                <div className="text-3xl font-bold text-[#735334]">10x</div>
                <div className="text-sm  text-[#000000]">Smarter Asset <br/>Optimization</div>
              </div>
              <div className="stat-item">
                <div className="text-3xl font-bold text-[#735334]">99.9%</div>
                <div className="text-sm  text-[#000000]">Real-Time IoT <br/> Monitoring Reliability</div>
              </div>
              <div className="stat-item">
                <div className="text-3xl font-bold text-[#735334]">500+</div>
                <div className="text-sm  text-[#000000]">Enterprises Securing <br/>High-Value Assets</div>
              </div>
            </div>
          </div>

          {/* Image section with unique floating card layout */}
          <div className="hero-image relative lg:mt-0">
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Main image card */}
            <div className="image-card relative bg-gradient-to-br from-background to-primary/5 p-2 rounded-2xl shadow-2xl backdrop-blur-sm border border-primary/10">
              <img
                src={heroImage}
                alt="AI Dashboard Product Mockup"
                className="image-content relative rounded-xl w-full object-cover"
                data-testid="img-hero-mockup"
              />
              
              {/* Floating badges around image */}
              <div className="floating-badge absolute -top-6 -left-6 bg-background border border-border rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
              
              <div className="floating-badge absolute -bottom-6 -right-6 bg-background border border-border rounded-xl px-4 py-3 shadow-lg">
                <div className="text-sm">
                  <div className="font-bold text-primary">+127%</div>
                  <div className="text-muted-foreground text-xs">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .hero-badge {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .hero-title {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .text-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .hero-cta {
          animation: fadeInUp 0.8s ease-out 0.8s both;
        }

        .cta-button {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px hsl(var(--primary) / 0.4);
        }

        .cta-button:active {
          transform: translateY(-2px);
        }

        .button-shine {
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0s;
        }

        .cta-button:hover .button-shine {
          animation: shine 0.8s ease-in-out;
        }

        .hero-stats {
          animation: fadeInUp 0.8s ease-out 1s both;
        }

        .stat-item {
          animation: scaleIn 0.6s ease-out both;
          transition: transform 0.3s ease;
        }

        .stat-item:nth-child(1) {
          animation-delay: 1.1s;
        }

        .stat-item:nth-child(2) {
          animation-delay: 1.2s;
        }

        .stat-item:nth-child(3) {
          animation-delay: 1.3s;
        }

        .stat-item:hover {
          transform: translateY(-4px);
        }

        .hero-image {
          animation: fadeInRight 1s ease-out 0.5s both;
        }

        .image-card {
          animation: scaleIn 0.8s ease-out 0.7s both;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-card:hover {
          transform: translateY(-8px) rotate(-1deg);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
        }

        .image-content {
          transition: all 0.5s ease;
        }

        .image-card:hover .image-content {
          transform: scale(1.02);
        }

        .floating-badge {
          animation: badgeFloat 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .floating-badge:nth-child(2) {
          animation-delay: 0.5s;
        }

        .floating-badge:nth-child(3) {
          animation-delay: 1s;
        }

        .floating-badge:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}