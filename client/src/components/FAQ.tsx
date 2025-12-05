"use client";
import ScrollFloat from "./ScrollFloat";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqRefs = useRef<HTMLDivElement[]>([]);

  const faqs = [
    {
      question: " How does Vnztech monitor high-value assets in real time?",
      answer:
        "Our platform connects to IoT sensors and devices to continuously track asset performance. AI algorithms detect anomalies, predict potential failures, and provide actionable insights instantly.",
    },
    {
      question: "Is my data secure on Vnztech?",
      answer:
        "Absolutely. We use end-to-end encryption, SOC 2 Type II compliance, GDPR-aligned infrastructure, and advanced authentication protocols to ensure your data and devices remain fully protected.",
    },
    {
      question: "Can Vnztech integrate with my existing systems?",
      answer:
        "Yes. Our platform supports 100+ IoT protocols and enterprise systems, enabling seamless integration with your current tools, ERPs, and cloud services without disrupting workflows.",
    },
    {
      question: " How scalable is the platform?",
      answer:
        "Vnztech is built on a cloud-native architecture that auto-scales to support thousands of devices, millions of data points, and global operations, all while maintaining 99.99% uptime.",
    },
    {
      question: "What kind of insights can I get from the platform?",
      answer:
        "Gain predictive analytics, asset health reports, performance benchmarks, and real-time monitoring dashboards that help you optimize operations, reduce downtime, and extend asset lifespan.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // 👇 Added scroll-trigger slide animation like Features section
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

    faqRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      faqRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <section
      id="faq"
      className="py-20 relative overflow-hidden"
      data-testid="section-faq"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" style={{ color: "#353332" }}>
          <ScrollFloat
            containerClassName="text-center mb-4"
            textClassName="faq-title text-4xl md:text-5xl font-bold"
            ease="back.inOut(2)"
            scrollStart="top center+=30%"
            scrollEnd="center center"
            stagger={0.03}
          >
            Frequently Asked Questions
          </ScrollFloat>
        </div>

        {/* FAQ List */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-x-8 lg:gap-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el!)}
              className={`faq-item-wrapper slide-hidden ${
                index % 2 === 0 ? "slide-left" : "slide-right"
              } ${index % 2 === 0 ? "lg:mt-0" : "lg:mt-8"}`}
              data-testid={`wrapper-faq-${index}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div
                className={`faq-item bg-white dark:bg-[#464443] border border-gray-200 dark:border-gray-700 rounded-xl px-6 relative group overflow-hidden transition-all duration-400 ${
                  openItem === index ? "faq-item-open" : ""
                }`}
                data-testid={`accordion-faq-${index}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="faq-trigger w-full text-left py-5 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="faq-number w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-white font-bold text-sm mt-0.5 transition-all duration-400">
                      {index + 1}
                    </div>
                    <span className="faq-question text-lg font-semibold text-white dark:text-white transition-all duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`faq-chevron w-5 h-5 text-white transition-transform duration-300 ${
                      openItem === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`faq-answer-wrapper overflow-hidden transition-all duration-300 ${
                    openItem === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="faq-answer pb-5 pl-12 pr-4">
                    <p className="text-white">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* === SCROLL ANIMATION (Same Style as Features Section) === */
        .slide-hidden {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .slide-left {
          transform: translateX(-60px);
        }
        .slide-right {
          transform: translateX(60px);
        }
        .animate-slide-in {
          opacity: 1 !important;
          transform: translateX(0) translateY(0) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .slide-hidden,
          .animate-slide-in {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
