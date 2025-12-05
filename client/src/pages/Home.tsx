import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen"
    style={{
        backgroundImage: "url('/images/Desktop%20-%2018%20(2).svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      <Header />
      <main >
        <Hero />
        <Clients />
        <Features />
        <Benefits />
        {/* Team component removed */}
        <Testimonials />
        <Pricing />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
