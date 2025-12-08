"use client";
import type { ComponentType } from "react";
import { useEffect, useRef } from "react";
import { Brain, Zap, Users, Shield, Rocket, BarChart } from "lucide-react";

interface Feature {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  imageSrc: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: Brain,
      title: "AI-Driven Asset Intelligence",
      description:
        "Leverage advanced AI models to predict issues, detect anomalies, and automate asset oversight. Get smart recommendations that enhance performance",
      imageSrc: "./images/4.png",
    },
    {
      icon: Zap,
      title: "Seamless IoT Connectivity",
      description:
        "Integrate effortlessly with sensors, devices, and existing enterprise systems. Our platform supports 100+ IoT protocols, ensuring smooth data flow",
      imageSrc: "./images/5.png",
    },
    {
      icon: Users,
      title: "Real-Time Operational Collaboration",
      description:
        "Enable teams to monitor, analyze, and troubleshoot assets together in real time. Share insights instantly, sync updates",
      imageSrc: "./images/6.png",
    },
    {
      icon: Shield,
      title: "Advanced-Grade Security & Compliance",
      description:
        "Protect mission-critical asset data with military-grade encryption, secure device authentication, and full compliance with global standards.",
      imageSrc: "./images/7.png",
    },
    {
      icon: Rocket,
      title: "Ultra-Fast IoT Processing Engine",
      description:
        "Experience lightning-fast data ingestion and real-time updates from thousands of connected assets. Optimized infrastructure ensures zero delays.",
      imageSrc: "./images/8.png",
    },
    {
      icon: BarChart,
      title: "Advanced Predictive Analytics",
      description:
        "Access deep insights through intelligent dashboards that forecast asset performance, detect early failure signs, and highlight optimization opportunities.",
      imageSrc: "./images/9.png",
    },
  ];

  const featureRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          } else {
            entry.target.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    featureRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      featureRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const cardBackgroundColor = "bg-[#c8b9aa]";
  const imageDarkOverlayColor = "";

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#282728" }}>
            Smart Performances
          </h2>
        </div>

        <div className="relative">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el!)}
              className={`
                feature-row-container slide-hidden delay-${index + 1}
                group flex flex-col lg:flex-row
                rounded-2xl shadow-xl overflow-hidden
                ${cardBackgroundColor}
                transition-all duration-400 ease-in-out
                ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
                mb-12 lg:mb-16
              `}
            >
              {/* TEXT CONTENT - NO GAP */}
              <div className="w-full lg:w-2/3 relative z-20 p-0">
                {renderFeatureCard(feature, index)}
              </div>

              {/* IMAGE CONTENT - ORIGINAL LOGIC PRESERVED */}
              <div
                className={`bg-center w-full lg:w-1/3
                h-[240px] sm:h-[300px] lg:h-full
                lg:absolute lg:top-0 lg:bottom-0
                ${index % 2 === 0 ? "lg:right-0" : "lg:left-0"}
                relative z-10`}
              >
                {renderImage(feature, index, imageDarkOverlayColor)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .slide-hidden {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease-out;
        }
        .animate-slide-in {
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }
      `}</style>
    </section>
  );

  function renderImage(feature: Feature, index: number, overlay: string) {
    return (
      <div className="w-full h-full relative overflow-hidden">
        <div className={`absolute inset-0 ${overlay}`}>
          <img
            src={feature.imageSrc}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  function renderFeatureCard(feature: Feature, index: number) {
    const Icon = feature.icon;

    return (
      <div className={`feature-card delay-${index + 1} h-full`}>
        <div className="bg-white/50 dark:bg-gray-900/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 rounded-xl bg-black text-white flex items-center justify-center">
              <Icon className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-base leading-relaxed">{feature.description}</p>
        </div>
      </div>
    );
  }
}
