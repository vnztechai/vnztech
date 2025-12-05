'use client';

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: string;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  as = 'h2',
  style,
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLElement | null>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.inline-block');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%',
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        // ensure transient inline styles are cleared once the animation finishes
        onComplete: () => { gsap.set(charElements, { clearProps: 'willChange,opacity,transform' }); },
        onReverseComplete: () => { gsap.set(charElements, { clearProps: 'willChange,opacity,transform' }); },
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) trigger.kill();
      });
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  const Tag = as as any;

  return (
    <Tag ref={containerRef} className={`overflow-hidden ${containerClassName}`} style={style}>
      <span className={`inline-block ${textClassName}`}>{splitText}</span>
    </Tag>
  );
};

export default ScrollFloat;
