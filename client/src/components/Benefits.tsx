"use client";
import { useEffect } from "react";
import ScrollFloat from "./ScrollFloat";
import { Check } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "10x Smarter Asset Management",
      description:
        "Monitor, analyze, and optimize high-value assets in minutes,not months. AI-driven automation eliminates manual oversight and accelerates operational efficiency across your entire IoT ecosystem.",
      points: [
        "Intelligent anomaly detection",
        "Automated asset health diagnostics",
        "Real-time IoT event processing",
      ],
      imageUrl:
        "./images/10.png",
    },
    {
      title: "Enterprise-Grade Protection",
      description:
        "Operate with full confidence. Your asset data is secured with advanced encryption, strict compliance, and end-to-end protection across devices, networks, and cloud layers.",
      points: [
        "Military-grade encryption protocols",
        "Zero-trust device authentication",
        "SOC 2 & GDPR–aligned architecture",
      ],
      imageUrl:
        "./images/11.png",
    },
    {
      title: "Scalable IoT Infrastructure",
      description:
        "Grow your operations seamlessly. Our cloud-native IoT infrastructure scales automatically to support thousands of sensors, billions of data points, and global asset networks.",
      points: [
        "Elastic IoT scaling engine",
        "99.99% real-time monitoring uptime",
        "Worldwide low-latency data distribution",
      ],
      imageUrl:
        "./images/12.png",
    },
  ];

  // Scroll reveal effect (repeat animation on every scroll)
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // Remove class to re-trigger animation
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 relative overflow-hidden"
      data-testid="section-benefits"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <ScrollFloat
            containerClassName="text-center mb-4"
            textClassName="text-4xl md:text-5xl font-bold"
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            style={{ color: "#282728" }}
          >
            Why Vnztech Leads
          </ScrollFloat>
        </div>

        {/* Benefit Items */}
        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-row reveal-on-scroll grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`benefit-${index}`}
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              {/* Content */}
              <div
                className={`benefit-content ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <h3 className="benefit-title text-3xl md:text-4xl font-bold mb-4 text-[#735334]">
                  {benefit.title}
                </h3>
                <p className="benefit-description text-lg text-[#282728] mb-6">
                  {benefit.description}
                </p>

                <ul className="space-y-3">
                  {benefit.points.map((point, i) => (
                    <li
                      key={i}
                      className="benefit-point flex items-center gap-3"
                      style={{
                        animationDelay: `${index * 0.25 + i * 0.1 + 0.2}s`,
                      }}
                    >
                      <div className="check-wrapper bg-[#735334] rounded-full p-1 flex-shrink-0">
                        <Check className="check-icon h-4 w-4 text-[#ffffff]" />
                      </div>
                      <span className="text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div
                className={`benefit-image-wrapper ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
                style={{ animationDelay: `${index * 0.25 + 0.1}s` }}
              >
                <div className="image-container relative group">
                  <div className="image-glow absolute inset-0 bg-primary/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    className="benefit-image rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                  <div className="image-overlay absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(30px);} to {opacity:1; transform:translateY(0);} }
        @keyframes slideInLeft { from { opacity:0; transform:translateX(-60px);} to {opacity:1; transform:translateX(0);} }
        @keyframes slideInRight { from { opacity:0; transform:translateX(60px);} to {opacity:1; transform:translateX(0);} }
        @keyframes scaleIn { from {opacity:0; transform:scale(0.9);} to {opacity:1; transform:scale(1);} }
        @keyframes checkPulse {0%,100%{transform:scale(1);}50%{transform:scale(1.2);} }

        .benefit-row, .benefit-content, .benefit-image-wrapper, .benefit-point { opacity:0; }

        .reveal-on-scroll.active { animation: fadeIn 0.8s ease-out forwards; }
        .reveal-on-scroll.active .benefit-content { animation: slideInLeft 0.8s ease-out forwards; }
        .reveal-on-scroll.active:nth-child(even) .benefit-content { animation: slideInRight 0.8s ease-out forwards; }
        .reveal-on-scroll.active .benefit-image-wrapper { animation: scaleIn 0.8s ease-out forwards; }

        .benefit-title { transition: color .3s; position: relative; display:inline-block; }
        .benefit-title::after {
          content:''; position:absolute; bottom:-4px; left:0;
          width:0; height:3px; background:#000;
          transition: width .5s cubic-bezier(.4,0,.2,1);
        }
        .benefit-content:hover .benefit-title::after { width:100%; }
        .benefit-content:hover .benefit-title { color:#735334; }

        .benefit-point { animation: slideInLeft .6s ease-out forwards; transition:.3s; color:#735334; }
        .reveal-on-scroll.active:nth-child(even) .benefit-point { animation: slideInRight .6s ease-out forwards; }
        .benefit-point:hover { transform:translateX(8px); padding-left:4px; color:#000; }

        .check-wrapper { transition:.4s cubic-bezier(.4,0,.2,1); }
        .benefit-point:hover .check-wrapper { transform:scale(1.15) rotate(360deg); }

        .check-icon { transition:.4s ease; }
        .benefit-point:hover .check-icon { animation:checkPulse .6s ease-in-out; }

        .image-container { overflow:hidden; position:relative; }
        .benefit-image { transition:.6s cubic-bezier(.4,0,.2,1); }
        .image-container:hover .benefit-image { transform:scale(1.08) rotate(1deg); }
        .image-glow, .image-overlay { transition:opacity .6s; }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration:.01ms !important;
            animation-iteration-count:1 !important;
            transition-duration:.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
