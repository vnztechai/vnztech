"use client";

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie preference choice
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set('cookieConsent', 'declined', { expires: 365 });
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 shadow-2xl border-t"
      style={{
        backgroundColor: '#b5a38d',
        borderColor: '#282728',
      }}
      data-testid="cookies-banner"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#282728' }}>
            Cookie Preferences
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#353332' }}>
            We use cookies to enhance your browsing experience, analyze site traffic, and serve personalized content. By clicking "Accept", you consent to our use of cookies. You can manage your preferences anytime.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 items-center flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="whitespace-nowrap border-[#282728] text-[#282728] bg-transparent hover:bg-[#282728] hover:text-[#b5a38d] transition-colors"
            data-testid="button-cookies-decline"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="whitespace-nowrap bg-[#282728] text-[#b5a38d] hover:bg-[#353332] transition-colors"
            data-testid="button-cookies-accept"
          >
            Accept
          </Button>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg transition-all duration-200"
            style={{ color: '#282728' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(40, 39, 40, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Close cookies banner"
            data-testid="button-cookies-close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          [data-testid="cookies-banner"] {
            padding-bottom: calc(env(safe-area-inset-bottom) + 1rem);
          }
        }
      `}</style>
    </div>
  );
}
