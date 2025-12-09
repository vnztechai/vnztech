import { useMemo, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CreditCard, Lock, CheckCircle2 } from "lucide-react";

const elementStyle = {
  base: {
    fontSize: "16px",
    color: "#000000",
    fontFamily: "inherit",
    "::placeholder": {
      color: "#6b5d52",
    },
  },
  invalid: {
    color: "#dc2626",
    iconColor: "#dc2626",
  },
};

function CheckoutForm({ plan, billing }: { plan: string; billing: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardNumber = elements.getElement(CardNumberElement);
    if (!cardNumber) return;

    setIsProcessing(true);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumber,
      billing_details: {
        name: name || "Customer",
        email: email || undefined,
      },
    });

    setIsProcessing(false);

    if (error) {
      console.error(error);
      alert(error.message || "Payment could not be processed.");
      return;
    }

    setIsComplete(true);
  };

  const price = plan === "pro" ? (billing === "monthly" ? 29 : 290) : undefined;

  if (isComplete) {
    return (
      <div className='text-center py-8'>
        <CheckCircle2 className='w-16 h-16 mx-auto mb-4 text-green-600' />
        <h2 className='text-2xl font-bold mb-2' style={{ color: "#000000" }}>
          Payment Successful!
        </h2>
        <p className='text-sm mb-4' style={{ color: "#000000" }}>
          Thank you for subscribing to the{" "}
          {plan === "pro" ? "Pro" : "Enterprise"} plan.
        </p>
        <p className='text-xs' style={{ color: "#4b433d" }}>
          A confirmation email will be sent shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      {/* Order Summary */}
      <div className='rounded-xl border border-[#735334]/30 bg-[#b9a592]/30 p-4'>
        <div className='flex items-center justify-between mb-3'>
          <div>
            <h3 className='text-lg font-semibold' style={{ color: "#000000" }}>
              {plan === "pro" ? "Pro" : "Enterprise"} Plan
            </h3>
            <p className='text-xs' style={{ color: "#4b433d" }}>
              {billing === "monthly" ? "Billed monthly" : "Billed annually"}
            </p>
          </div>
          {price != null && (
            <div className='text-right'>
              <span className='text-2xl font-bold' style={{ color: "#000000" }}>
                ${price}
              </span>
              <span className='text-sm ml-1' style={{ color: "#4b433d" }}>
                /{billing === "monthly" ? "mo" : "yr"}
              </span>
            </div>
          )}
        </div>
        <div className='border-t border-[#735334]/20 pt-3 flex justify-between text-sm'>
          <span style={{ color: "#4b433d" }}>Total due today</span>
          <span className='font-semibold' style={{ color: "#000000" }}>
            ${price ?? "Custom"}
          </span>
        </div>
      </div>

      {/* Contact Information */}
      <div className='space-y-3'>
        <h4
          className='text-sm font-medium flex items-center gap-2'
          style={{ color: "#000000" }}
        >
          Contact Information
        </h4>
        <div className='grid gap-3'>
          <div>
            <Label
              htmlFor='name'
              className='text-xs'
              style={{ color: "#4b433d" }}
            >
              Full Name
            </Label>
            <Input
              id='name'
              type='text'
              placeholder='John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 bg-[#b9a592]/20 border-[#735334]/40 focus:border-[#735334] placeholder:text-[#6b5d52]'
              style={{ color: "#000000" }}
            />
          </div>
          <div>
            <Label
              htmlFor='email'
              className='text-xs'
              style={{ color: "#4b433d" }}
            >
              Email Address
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='john@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 bg-[#b9a592]/20 border-[#735334]/40 focus:border-[#735334] placeholder:text-[#6b5d52]'
              style={{ color: "#000000" }}
            />
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className='space-y-3'>
        <h4
          className='text-sm font-medium flex items-center gap-2'
          style={{ color: "#000000" }}
        >
          <CreditCard className='w-4 h-4' />
          Payment Details
        </h4>

        <div>
          <Label className='text-xs' style={{ color: "#4b433d" }}>
            Card Number
          </Label>
          <div className='mt-1 rounded-md border border-[#735334]/40 bg-[#b9a592]/20 px-3 py-2.5'>
            <CardNumberElement
              options={{ style: elementStyle, showIcon: true }}
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3'>
          <div>
            <Label className='text-xs' style={{ color: "#4b433d" }}>
              Expiry Date
            </Label>
            <div className='mt-1 rounded-md border border-[#735334]/40 bg-[#b9a592]/20 px-3 py-2.5'>
              <CardExpiryElement options={{ style: elementStyle }} />
            </div>
          </div>
          <div>
            <Label className='text-xs' style={{ color: "#4b433d" }}>
              CVC
            </Label>
            <div className='mt-1 rounded-md border border-[#735334]/40 bg-[#b9a592]/20 px-3 py-2.5'>
              <CardCvcElement options={{ style: elementStyle }} />
            </div>
          </div>
        </div>
      </div>

      <Button
        type='submit'
        className='w-full h-11 text-base font-medium'
        style={{ backgroundColor: "#735334", color: "#ffffff" }}
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? (
          <span className='flex items-center gap-2'>
            <span className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
            Processing...
          </span>
        ) : (
          <span className='flex items-center gap-2'>
            <Lock className='w-4 h-4' />
            Pay ${price ?? "—"}
          </span>
        )}
      </Button>

      <p className='text-xs text-center' style={{ color: "#4b433d" }}>
        <Lock className='w-3 h-3 inline mr-1' />
        Secured by Stripe. Your payment info is encrypted.
      </p>
    </form>
  );
}

export default function CheckoutSandbox() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "auto" });
    } catch (e) {
      // ignore in test environments
    }
  }, []);

  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan") || "pro";
  const billing = params.get("billing") || "monthly";

  const stripePromise = useMemo(() => {
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as
      | string
      | undefined;
    if (!key) {
      console.warn(
        "VITE_STRIPE_PUBLISHABLE_KEY is not set. Stripe Elements will not load."
      );
      return null;
    }
    return loadStripe(key);
  }, []);

  return (
    <div
      className='min-h-screen flex flex-col'
      style={{
        backgroundImage: "url('/images/Desktop%20-%2018%20(2).svg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <Header />
      <main className='flex-1 flex items-center justify-center px-4 py-16'>
        <Card className='w-full max-w-md bg-[#c8b9aa]/90 border border-[#735334]/30 shadow-2xl p-6 backdrop-blur-sm'>
          <div className='flex items-center gap-2 mb-5'>
            <CreditCard className='w-6 h-6' style={{ color: "#735334" }} />
            <h1 className='text-2xl font-bold' style={{ color: "#000000" }}>
              Complete Your Purchase
            </h1>
          </div>

          {stripePromise ? (
            <Elements stripe={stripePromise}>
              <CheckoutForm plan={plan} billing={billing} />
            </Elements>
          ) : (
            <div className='text-center py-8'>
              <p className='text-sm' style={{ color: "#000000" }}>
                Payment system is currently unavailable. Please try again later.
              </p>
            </div>
          )}

          <div className='mt-5 pt-4 border-t border-[#735334]/20'>
            <Button
              className='w-full'
              variant='ghost'
              onClick={() => setLocation("/")}
              style={{ color: "#4b433d" }}
            >
              ← Back to pricing
            </Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
