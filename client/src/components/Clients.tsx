import neuraltech from "@assets/generated_images/client_logo_neuraltech.png";
import cloudai from "@assets/generated_images/client_logo_cloudai.png";
import dataflow from "@assets/generated_images/client_logo_dataflow.png";
import quantumlabs from "@assets/generated_images/client_logo_quantumlabs.png";
import synthai from "@assets/generated_images/client_logo_synthai.png";
import vectorsys from "@assets/generated_images/client_logo_vectorsys.png";

import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Clients() {

  const socialItems = [
    { icon: <Facebook size={22} />, text: "Follow us on Facebook" },
    { icon: <Twitter size={22} />, text: "Latest updates on Twitter" },
    { icon: <Linkedin size={22} />, text: "Connect with us on LinkedIn" },
    { icon: <Youtube size={22} />, text: "Watch our builds on YouTube" },
  ];

  return (
    <section
      className="relative py-4 bg-[#d2c6b8] overflow-hidden"
      data-testid="section-clients"
    >
      {/* Light glowing gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* NEW: Horizontal Scrolling Social Strip */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            style={{ display: "flex" }}
          >
            {[...socialItems, ...socialItems].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all cursor-pointer bg-[#735334] hover:bg-[#5c422a]"
              >
                <div style={{ color: "#ffffff" }}>{item.icon}</div>
                <p className="text-sm" style={{ color: "#ffffff" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
