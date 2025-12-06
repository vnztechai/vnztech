import ScrollFloat from "./ScrollFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Vnztech transformed how we monitor our assets. Real-time insights and predictive alerts have drastically reduced downtime and maintenance costs. Truly a game-changer for enterprise operations!",
      author: "Samantha Lenords",
      role: "Operations Director",
      avatar: "./images/13.png",
      rating: 5,
    },
    {
      quote: "Integrating Vnztech with our existing IoT devices was seamless. The platform’s AI-driven analytics give us full visibility and actionable intelligence on every asset.",
      author: " Rajiv Kumar",
      role: "Head of Asset Management",
      avatar: "./images/14.png",
      rating: 5,
    },
    {
      quote: "The scalability and security of Vnztech are unmatched. We can manage thousands of high-value assets globally with confidence, knowing our data is protected and always available.",
      author: "Elena Petrova",
      role: "CTO",
      avatar: "./images/15.png",
      rating: 5,
    },
  ];

  return (
    <section className="py-20" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" style={{ color: "#353332" }}>
          <ScrollFloat
            containerClassName="text-center mb-4"
            textClassName="text-4xl md:text-5xl font-bold"
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Voices of Our Partners
          </ScrollFloat>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="testimonial-card group relative overflow-hidden transition-all duration-500"
              style={{ backgroundColor: "#7e6044" }}
              data-testid={`card-testimonial-${index}`}
            >
              {/* Default state: Large centered avatar */}
              <div className="avatar-default absolute inset-0 flex items-center justify-center bg-cover bg-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-110 z-10" style={{ backgroundImage: `url('${testimonial.avatar}')` }}>
              </div>

              {/* Hover state: Full testimonial details */}
              <CardContent className="testimonial-content pt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex gap-1 mb-4 stars-wrapper pt-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="star-icon h-4 w-4 fill-[#ffffff] text-[#ffffff] transition-all duration-300" 
                      data-testid={`star-${index}-${i}`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="quote-text italic text-[#000000] mb-6 transition-all duration-300" style={{ color: "#000000" }} data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="author-info flex items-center gap-3 transition-all duration-300">
                  <Avatar className="avatar-small">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold" style={{ color: "#000000" }} data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm" style={{ color: "#000000" }} data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes starPop {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes textSlideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes avatarZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .testimonial-card {
          min-height: 350px;
          cursor: pointer;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .testimonial-card:active {
          transform: translateY(-4px) scale(0.98);
        }

        .avatar-default {
          pointer-events: none;
        }

        .avatar-glow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .testimonial-card:hover .avatar-default {
          opacity: 0;
          transform: scale(1.2);
          pointer-events: none;
        }

        .testimonial-content {
          position: relative;
          z-index: 20;
        }

        .testimonial-card:hover .star-icon {
          animation: starPop 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .testimonial-card:hover .star-icon:hover {
          transform: scale(1.3) rotate(15deg);
          filter: drop-shadow(0 0 8px hsl(var(--primary)));
        }

        .quote-text {
          transform: translateY(10px);
          opacity: 0;
        }

        .testimonial-card:hover .quote-text {
          animation: textSlideUp 0.6s ease-out 0.3s forwards;
        }

        .author-info {
          transform: translateY(10px);
          opacity: 0;
        }

        .testimonial-card:hover .author-info {
          animation: textSlideUp 0.6s ease-out 0.5s forwards;
        }

        .avatar-small {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-card:hover .avatar-small {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          // background: linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 1;
        }

        .testimonial-card:hover::before {
          opacity: 1;
        }

        .testimonial-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #000000, #000000);
          transform: scaleX(0);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: left;
        }

        .testimonial-card:hover::after {
          transform: scaleX(1);
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