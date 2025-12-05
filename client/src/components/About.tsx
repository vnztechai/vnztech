import ScrollFloat from "./ScrollFloat";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function About() {
  const [location, setLocation] = useLocation();
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We’re dedicated to transforming high-value asset management with AI and IoT, making intelligent monitoring and predictive insights accessible to enterprises of all sizes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Continuously advancing our platform with  AI algorithms and IoT technologies to anticipate challenges, optimize operations, and stay ahead in the fast-evolving asset management landscape.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description:
        "Your operational efficiency and asset security are our top priorities. We design solutions that solve real-world problems, streamline workflows, and empower teams to make data-driven decisions with confidence.",
    },
  ];

  const team = [
    {
      name: "Justin Timberland ",
      role: "FOUNDER & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Experience in The Field in 12 years",
    },
    {
      name: "Tony Edwardson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Former lead engineer at major tech companies",
    },
    {
      name: "Anna Hatherway",
      role: "COO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "In Operation more than 8+ years",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      data-testid="section-about"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 about-header" style={{ color: "#353332" }}>
          <ScrollFloat
            containerClassName="text-center mb-4"
            textClassName="text-4xl md:text-5xl font-bold"
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            About Vnztech
          </ScrollFloat>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#000000" }}>
            Empowering enterprises to monitor, manage, and optimize high-value assets with AI-driven precision, real-time insights, and unparalleled operational confidence.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-24 story-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="story-content space-y-6">
              <h3 className="text-3xl font-bold" style={{ color: "#353332" }}>
                Our Story
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#000000" }}
              >
                Founded in 2023, We emerged from a single vision: managing high-value assets shouldn’t be complex or fragmented. Our founders, frustrated by disconnected monitoring tools and cumbersome workflows, built a unified AI-IoT platform to streamline asset oversight.

              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#000000" }}
              >
                Today, We support thousands of teams globally from industrial enterprises to Fortune 500 companies helping them track, predict, and optimize asset performance with intelligence and speed, transforming traditional asset management into a proactive, data-driven operation.
              </p>
              <Button
                size="lg"
                style={{ backgroundColor: "#735334", color: "#ffffff" }}
                className="story-cta"
                onClick={() => {
                  const id = "contact";
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    return;
                  }

                  // If not on home, navigate to home then scroll after a short delay
                  setLocation("/");
                  setTimeout(() => {
                    const e2 = document.getElementById(id);
                    if (e2) e2.scrollIntoView({ behavior: "smooth" });
                  }, 120);
                }}
              >
                Learn More About Our Journey
              </Button>
            </div>
            <div className="story-image relative">
              <div className="image-wrapper relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                />
                <div className="image-overlay absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
       <div className="mb-24 values-section">
  <div className="text-center mb-12" style={{ color: "#353332" }}>
    <ScrollFloat
      containerClassName="text-center mb-4"
      textClassName="text-3xl md:text-4xl font-bold"
      ease="back.inOut(2)"
      scrollStart="center bottom+=50%"
      scrollEnd="bottom bottom-=40%"
      stagger={0.03}
    >
      Our Values
    </ScrollFloat>
    <p style={{ color: "#000000" }}>The principles that drive every decision we make in building smarter, safer, and more efficient asset management solutions.</p>
  </div>
  <div className="grid md:grid-cols-3 gap-8">
    {values.map((value, index) => {
      const Icon = value.icon;
      return (
        <div
          key={index}
          className="value-card group relative bg-background border border-border rounded-2xl p-8 transition-all duration-500"
          style={{ backgroundColor: "#a9927d", animation: `scaleIn 0.6s ease-out both, bounceUpDown 3s ease-in-out infinite`, animationDelay: `${0.6 + index*0.1}s` }}
        >
          <div className="relative z-10">
            <div className="value-icon-wrapper bg-[#735334] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Icon className="value-icon h-8 w-8 text-[#ffffff]" />
            </div>
            <h4 className="value-title text-2xl font-bold mb-4 text-[#735334]">{value.title}</h4>
            <p className="leading-relaxed" style={{ color: "hsla(0, 0%, 0%, 1.00)" }}>
              {value.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

        {/* Team Section */}
        <div className="team-section">
          <div className="text-center mb-12" style={{ color: "#353332" }}>
            <ScrollFloat
              containerClassName="text-center mb-4"
              textClassName="text-3xl md:text-4xl font-bold"
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Meet Our Leadership
            </ScrollFloat>
            <p style={{ color: "#000000" }}>
              The visionaries behind Najaf's success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="team-card group relative bg-[#464443] border border-border rounded-2xl overflow-hidden transition-all duration-500"
              >
                <div className="team-image-wrapper relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image w-full h-80 object-cover"
                  />
                </div>
                <div className="team-content p-6 relative">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="font-semibold mb-3" style={{ color: "hsl(221,10%,63%)" }}>
                    {member.role}
                  </p>
                  <p className="text-sm" style={{ color: "hsl(221,10%,63%)" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
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

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .about-header {
          animation: fadeInUp 0.8s ease-out;
        }

        .story-section {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .story-content {
          animation: slideInLeft 0.8s ease-out 0.3s both;
        }

        .story-image {
          animation: slideInRight 0.8s ease-out 0.4s both;
        }

        .story-cta {
          animation: scaleIn 0.6s ease-out 0.6s both;
        }

        .image-wrapper:hover .image-overlay {
          opacity: 1;
        }

        .values-section {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .value-card {
          animation: scaleIn 0.6s ease-out both;
        }

        .value-card:nth-child(1) {
          animation-delay: 0.6s;
        }

        .value-card:nth-child(2) {
          animation-delay: 0.7s;
        }

        .value-card:nth-child(3) {
          animation-delay: 0.8s;
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
        }

        .value-icon {
          animation: iconFloat 3s ease-in-out infinite;
        }

        .team-section {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .team-card {
          animation: scaleIn 0.6s ease-out both;
        }

        .team-card:nth-child(1) {
          animation-delay: 0.7s;
        }

        .team-card:nth-child(2) {
          animation-delay: 0.8s;
        }

        .team-card:nth-child(3) {
          animation-delay: 0.9s;
        }

        .team-image {
          transition: transform 0.5s ease;
        }

        .team-card:hover .team-image {
          transform: scale(1.1);
        }

        .team-card:hover {
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
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
