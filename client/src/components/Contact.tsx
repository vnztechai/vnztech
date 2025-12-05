import ScrollFloat from "./ScrollFloat";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Client-side validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.subject.trim()) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Check reCAPTCHA response
    const grecaptcha = (window as any).grecaptcha;
    const recaptchaResponse = grecaptcha ? grecaptcha.getResponse(widgetIdRef.current ?? undefined) : '';
    if (!recaptchaResponse) {
      alert('Please complete the reCAPTCHA challenge.');
      setIsSubmitting(false);
      return;
    }
    // Send form data to Formspree endpoint using FormData (recommended for browsers)
    const endpoint = 'https://formspree.io/f/xyzrjjoo';

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('_replyto', formData.email);
    formPayload.append('company', formData.company);
    formPayload.append('phone', formData.phone);
    formPayload.append('subject', formData.subject);
    formPayload.append('message', formData.message);
    formPayload.append('g-recaptcha-response', recaptchaResponse);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          // Let the browser set the Content-Type (multipart/form-data boundary)
          Accept: 'application/json',
        },
        body: formPayload,
      });

      // Try to parse JSON response if any
      let data: any = {};
      try { data = await res.json(); } catch (e) { /* ignore parse errors */ }

      if (res.ok) {
        alert('Thank you for contacting us! We received your message.');

        // Reset reCAPTCHA widget (use stored widget id if available)
        if (grecaptcha && typeof grecaptcha.reset === 'function') {
          try { grecaptcha.reset(widgetIdRef.current ?? undefined); } catch (e) { /* noop */ }
        }

        // Reset form
        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      } else {
        // Provide clearer feedback depending on status
        console.error('Formspree error', res.status, data);
        if (res.status === 429) {
          alert('Too many requests. Please wait a moment and try again.');
        } else if (res.status >= 500) {
          alert('Server error. Please try again later.');
        } else {
          // show any error message returned by Formspree if available
          const msg = (data && (data.error || data.message)) ? (data.error || data.message) : 'There was a problem sending your message. Please try again later.';
          alert(msg);
        }
      }
    } catch (err) {
      console.error('Network error', err);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "help@vnztech.com",
      link: "mailto:help@vnztech.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+16138424194",
      link: "tel:+16138424194",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "28 Park Row City ,New York,United States",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM PST",
      link: "#",
    },
  ];

  const subjects = [
    "General Inquiry",
    "Sales & Pricing",
    "Technical Support",
    "Partnership Opportunities",
    "Product Feedback",
    "Other",
  ];

  const recaptchaRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Explicitly render the reCAPTCHA widget once the API is available (SPA-safe)
    const tryRender = () => {
      const grecaptcha = (window as any).grecaptcha;
      if (grecaptcha && recaptchaRef.current && typeof grecaptcha.render === 'function') {
        try {
          widgetIdRef.current = grecaptcha.render(recaptchaRef.current, {
            sitekey: '6LeHjx4sAAAAAICiyrtgUwWeh6FHnbh0DC8xY-IE',
            theme: 'light',
          });
        } catch (e) {
          // ignore render errors
        }
        return true;
      }
      return false;
    };

    if (!tryRender()) {
      const interval = setInterval(() => {
        if (tryRender()) clearInterval(interval);
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden" data-testid="section-contact">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 contact-header" style={{ color: "#353332" }}>
          <ScrollFloat
            containerClassName="text-center mb-4"
            textClassName="text-4xl md:text-5xl font-bold"
            ease="back.inOut(2)"
            scrollStart="top center+=30%"
            scrollEnd="center center"
            stagger={0.03}
          >
            Reach Us Further
          </ScrollFloat>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ color: "#000000" }} data-testid="text-contact-subtitle">
           Have questions or want to explore how to optimize your high-value assets? Send us a message, and our team will get back to you promptly.
          </p>
        </div>

        {/* Diagonal Split Layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8 contact-info-section">
            {/* Contact Cards */}
          <div className="space-y-4">
  {contactInfo.map((info, index) => {
    const Icon = info.icon;
    return (
      <a
        key={index}
        href={info.link}
        className="contact-info-card group flex items-start gap-4 p-6 bg-background border border-border rounded-xl transition-all duration-300 hover:border-[#464443]"
        data-testid={`card-contact-info-${index}`}
        style={{
          animation: `fadeInUp 0.6s ease-out both, bounceUpDown 3s ease-in-out infinite`,
          animationDelay: `${0.4 + index * 0.1}s`,
        }}
      >
        <div className="icon-wrapper flex-shrink-0 w-12 h-12 rounded-lg bg-[#735334] flex items-center justify-center transition-all duration-300">
          <Icon className="contact-icon h-6 w-6 text-white" />
        </div>
        <div>
          <h4
            className="font-semibold mb-1 transition-colors duration-300"
            data-testid={`text-contact-info-title-${index}`}
          >
            {info.title}
          </h4>
          <p
            className="text-white text-sm transition-colors duration-300"
            data-testid={`text-contact-info-content-${index}`}
          >
            {info.content}
          </p>
        </div>
      </a>
    );
  })}
</div>

{/* Add this in your style block if not already present */}
<style>{`
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes bounceUpDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`}</style>


            {/* Additional Info Card */}
            
          </div>

          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3 contact-form-section">
            <div className="form-container bg-background border border-border rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label block text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="John Doe"
                      data-testid="input-contact-name"
                    />
                    {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="john@example.com"
                      data-testid="input-contact-email"
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label block text-sm font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Your Company"
                      data-testid="input-contact-company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                      data-testid="input-contact-phone"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label block text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    data-testid="select-contact-subject"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-input w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    data-testid="textarea-contact-message"
                  />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                </div>

                  {/* Google reCAPTCHA widget (rendered explicitly) */}
                  <div className="recaptcha-wrapper mt-2 mb-4" style={{ minHeight: 78 }}>
                    <div id="recaptcha" ref={recaptchaRef} />
                  </div>

                {/* Submit Button */}
                <Button
                  size="lg"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="submit-button w-full text-lg group relative overflow-hidden"
                  style={{ backgroundColor: "#735334" }}
                  data-testid="button-contact-submit"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />}
                  </span>
                  <span className="button-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Button>
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

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes iconBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .contact-header {
          animation: fadeInUp 0.8s ease-out;
        }

        .contact-info-section {
          animation: slideInLeft 0.8s ease-out 0.3s both;
        }

        .contact-form-section {
          animation: slideInRight 0.8s ease-out 0.4s both;
        }

        .contact-info-card {
          animation: fadeInUp 0.6s ease-out both;
        }

        .contact-info-card:nth-child(1) { animation-delay: 0.4s; }
        .contact-info-card:nth-child(2) { animation-delay: 0.5s; }
        .contact-info-card:nth-child(3) { animation-delay: 0.6s; }
        .contact-info-card:nth-child(4) { animation-delay: 0.7s; }



        .info-highlight {
          animation: fadeInUp 0.6s ease-out 0.8s both;
          transition: all 0.4s ease;
        }

        .info-highlight:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
        }

        .form-container {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .form-group {
          animation: fadeInUp 0.5s ease-out both;
        }

        .form-group:nth-child(1) { animation-delay: 0.6s; }
        .form-group:nth-child(2) { animation-delay: 0.7s; }
        .form-group:nth-child(3) { animation-delay: 0.8s; }

        .form-label {
          transition: color 0.3s ease;
        }

        .form-input {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: hsl(var(-- ));
        }

        .submit-button {
          animation: fadeInUp 0.6s ease-out 0.9s both;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -6px hsl(var(--black) / 0.4);
        }

        .submit-button:active:not(:disabled) {
          transform: translateY(-2px);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .button-shine {
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0s;
        }

        .submit-button:hover:not(:disabled) .button-shine {
          animation: shine 0.8s ease-in-out;
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