import ScrollFloat from "./ScrollFloat";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );

  // Pricing component now routes to the /checkout sandbox page instead of
  // calling Stripe directly. All embedded Stripe Elements live on /checkout.

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "Perfect for trying out Najaf",
      features: [
        "Up to 3 projects",
        "Basic AI features",
        "Community support",
        "1 team member",
      ],
      cta: "Get Started",
      disabled: true,
      popular: false,
    },
    {
      name: "Pro",
      price: { monthly: 29, annual: 290 },
      description: "Best for growing teams",
      features: [
        "Unlimited projects",
        "Advanced AI features",
        "Priority support",
        "Up to 10 team members",
        "Custom integrations",
        "Advanced analytics",
      ],
      cta: "Start Free Trial",
      disabled: false,
      popular: true,
    },
    {
      name: "Enterprise",
      price: { monthly: null, annual: null },
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Dedicated support",
        "Custom SLA",
        "Advanced security",
        "On-premise deployment",
      ],
      cta: "Contact Sales",
      disabled: false,
      popular: false,
    },
  ];

  return (
    <section
      id='pricing'
      className='py-20 relative overflow-hidden'
      data-testid='section-pricing'
    >
      {/* Background decoration */}
      <div className='absolute inset-0 pointer-events-none opacity-20'>
        <div className='absolute top-1/4 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-1/4 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16' style={{ color: "#353332" }}>
          <ScrollFloat
            containerClassName='text-center mb-4'
            textClassName='pricing-title text-4xl md:text-5xl font-bold'
            ease='back.inOut(2)'
            scrollStart='top center+=30%'
            scrollEnd='center center'
            stagger={0.03}
          >
            Simple Pricing
          </ScrollFloat>

          <div className='billing-toggle inline-flex items-center gap-4 bg-[#735334]/50 p-1 rounded-lg'>
            <Button
              variant={billingPeriod === "monthly" ? "default" : "ghost"}
              onClick={() => setBillingPeriod("monthly")}
              data-testid='button-billing-monthly'
              className='transition-all duration-300'
              style={{
                backgroundColor:
                  billingPeriod === "monthly" ? "#735334" : "transparent",
                color: "#000000",
              }}
            >
              Monthly
            </Button>
            <Button
              variant={billingPeriod === "annual" ? "default" : "ghost"}
              onClick={() => setBillingPeriod("annual")}
              data-testid='button-billing-annual'
              className='transition-all duration-300'
              style={{
                backgroundColor:
                  billingPeriod === "annual" ? "#735334" : "transparent",
                color: "#000000",
              }}
            >
              Annual
              <Badge variant='secondary' className='ml-2 badge-save'>
                Save 17%
              </Badge>
            </Button>
          </div>
        </div>

        {/* Unique staggered vertical layout */}
        <div className='flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center'>
          {/* Free Plan - Smaller, positioned lower */}
          <div className='pricing-card-wrapper w-full max-w-sm lg:max-w-xs lg:mt-12 delay-1'>
            <Card
              className='pricing-card h-full transition-all duration-500 relative overflow-hidden group'
              style={{ backgroundColor: "#b9a592" }}
              data-testid='card-pricing-0'
            >
              <div className='card-glow absolute inset-0 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              <CardHeader className='relative z-10'>
                <CardTitle
                  className='plan-name text-2xl'
                  data-testid='text-plan-name-0'
                >
                  {plans[0].name}
                </CardTitle>
                <CardDescription
                  className='plan-description'
                  data-testid='text-plan-description-0'
                >
                  {plans[0].description}
                </CardDescription>
                <div className='mt-4'>
                  <div className='flex items-baseline gap-2'>
                    <span
                      className='plan-price text-5xl font-bold'
                      data-testid='text-plan-price-0'
                    >
                      ${plans[0].price[billingPeriod]}
                    </span>
                    <span className='text-[#000000]'>
                      /{billingPeriod === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='relative z-10'>
                <ul className='space-y-3'>
                  {plans[0].features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='feature-item flex items-center gap-3'
                      data-testid={`text-plan-feature-0-${featureIndex}`}
                    >
                      <div className='check-wrapper bg-[#7e6044] rounded-full p-1 flex-shrink-0'>
                        <Check className='check-icon h-3 w-3 text-[#000000]' />
                      </div>
                      <span className='text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className='relative z-10'>
                <Button
                  className='cta-button w-full'
                  variant='outline'
                  disabled={plans[0].disabled}
                  onClick={() =>
                    console.log(`${plans[0].cta} clicked for ${plans[0].name}`)
                  }
                  data-testid='button-plan-cta-0'
                >
                  {plans[0].cta}
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Pro Plan - Larger, elevated (Popular) */}
          <div className='pricing-card-wrapper w-full max-w-sm lg:max-w-md delay-2'>
            <Card
              className='pricing-card pricing-card-popular h-full transition-all duration-500 relative overflow-hidden group border-[#000000] border-2 shadow-xl'
              style={{ backgroundColor: "#c8b9aa" }}
              data-testid='card-pricing-1'
            >
              {/* <Badge className="popular-badge absolute -top-3 left-1/2 -translate-x-1/2" data-testid="badge-most-popular">
                Most Popular
              </Badge> */}

              <div className='card-glow absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div className='card-shine absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

              <CardHeader className='relative z-10'>
                <CardTitle
                  className='plan-name text-3xl'
                  data-testid='text-plan-name-1'
                >
                  {plans[1].name}
                </CardTitle>
                <CardDescription
                  className='plan-description'
                  data-testid='text-plan-description-1'
                >
                  {plans[1].description}
                </CardDescription>
                <div className='mt-4'>
                  <div className='flex items-baseline gap-2'>
                    <span
                      className='plan-price text-6xl font-bold'
                      data-testid='text-plan-price-1'
                    >
                      ${plans[1].price[billingPeriod]}
                    </span>
                    <span className='text-[#000000]'>
                      /{billingPeriod === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className='relative z-10'>
                <ul className='space-y-3'>
                  {plans[1].features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='feature-item flex items-center gap-3'
                      data-testid={`text-plan-feature-1-${featureIndex}`}
                    >
                      <div className='check-wrapper bg-[#7e6044] rounded-full p-1 flex-shrink-0'>
                        <Check className='check-icon h-3 w-3 text-[#000000]' />
                      </div>
                      <span className='text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className='relative z-10'>
                <Link href={`/checkout?plan=pro&billing=${billingPeriod}`}>
                  <Button
                    className='cta-button w-full'
                    variant='default'
                    style={{ backgroundColor: "#735334", color: "#ffffff" }}
                    disabled={plans[1].disabled}
                    data-testid='button-plan-cta-1'
                  >
                    {plans[1].cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Enterprise Plan - Smaller, positioned lower */}
          <div className='pricing-card-wrapper w-full max-w-sm lg:max-w-xs lg:mt-12 delay-3'>
            <Card
              className='pricing-card h-full transition-all duration-500 relative overflow-hidden group'
              style={{ backgroundColor: "#b9a592" }}
              data-testid='card-pricing-2'
            >
              <div className='card-glow absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              <CardHeader className='relative z-10'>
                <CardTitle
                  className='plan-name text-2xl'
                  data-testid='text-plan-name-2'
                >
                  {plans[2].name}
                </CardTitle>
                <CardDescription
                  className='plan-description'
                  data-testid='text-plan-description-2'
                >
                  {plans[2].description}
                </CardDescription>
                <div className='mt-4'>
                  <span
                    className='plan-price text-3xl font-bold'
                    data-testid='text-plan-price-2'
                  >
                    Custom
                  </span>
                </div>
              </CardHeader>
              <CardContent className='relative z-10'>
                <ul className='space-y-3'>
                  {plans[2].features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='feature-item flex items-center gap-3'
                      data-testid={`text-plan-feature-2-${featureIndex}`}
                    >
                      <div className='check-wrapper bg-[#7e6044] rounded-full p-1 flex-shrink-0'>
                        <Check className='check-icon h-3 w-3 text-[#000000]' />
                      </div>
                      <span className='text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className='relative z-10'>
                <Link
                  href={`/checkout?plan=enterprise&billing=${billingPeriod}`}
                >
                  <Button
                    className='cta-button w-full'
                    variant='outline'
                    disabled={plans[2].disabled}
                    data-testid='button-plan-cta-2'
                  >
                    {plans[2].cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
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

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes badgePulse {
          0%, 100% {
            transform: translate(-50%, 0) scale(1);
          }
          50% {
            transform: translate(-50%, 0) scale(1.05);
          }
        }

        @keyframes priceCount {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .pricing-title {
          animation: fadeInUp 0.8s ease-out;
        }

        .pricing-underline {
          animation: expandWidth 1s ease-out 0.3s forwards;
          width: 0;
        }

        .billing-toggle {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .badge-save {
          transition: all 0.3s ease;
        }

        .billing-toggle button:hover .badge-save {
          transform: scale(1.1);
        }

        .pricing-card-wrapper {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        .delay-3 {
          animation-delay: 0.6s;
        }

        .pricing-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pricing-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .pricing-card:active {
          transform: translateY(-8px) scale(1.01);
        }

        .pricing-card-popular {
          transform: scale(1.05);
        }

        .pricing-card-popular:hover {
          transform: translateY(-12px) scale(1.08);
        }

        .card-glow {
          transition: opacity 0.5s ease;
        }

        .card-shine {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(3, 3, 3, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shine 3s infinite;
        }

        .popular-badge {
          animation: badgePulse 2s ease-in-out infinite;
          z-index: 30;
        }

        .plan-name {
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
          color: #000000;
        }

        .pricing-card:hover .plan-name {
          color: #000000;
          transform: translateX(4px);
        }

        .plan-description {
          transition: all 0.3s ease;
          color: #000000;
        }

        .pricing-card:hover .plan-description {
          color: #000000;
        }

        .plan-price {
          animation: priceCount 0.6s ease-out;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
          color: #000000;
        }

        .pricing-card:hover .plan-price {
          transform: scale(1.05);
          color: #000000;
        }

        .feature-item {
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
          color: #000000;
        }

        .feature-item:nth-child(1) { animation-delay: 0.1s; }
        .feature-item:nth-child(2) { animation-delay: 0.15s; }
        .feature-item:nth-child(3) { animation-delay: 0.2s; }
        .feature-item:nth-child(4) { animation-delay: 0.25s; }
        .feature-item:nth-child(5) { animation-delay: 0.3s; }
        .feature-item:nth-child(6) { animation-delay: 0.35s; }

        .pricing-card:hover .feature-item {
          transform: translateX(6px);
        }

        .check-wrapper {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-item:hover .check-wrapper {
          background: #7e6044;
          transform: scale(1.2) rotate(360deg);
        }

        .check-icon {
          transition: all 0.4s ease;
        }

        .feature-item:hover .check-icon {
          color: white;
        }

        .cta-button {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          color: #000000;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }

        .cta-button:active {
          transform: translateY(0);
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
