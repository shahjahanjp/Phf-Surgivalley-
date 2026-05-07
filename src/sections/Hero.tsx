import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const instrumentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: 'power2.out' }
      )
        .fromTo(
          eyebrowRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.2
        )
        .fromTo(
          line1Ref.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.35
        )
        .fromTo(
          line2Ref.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.48
        )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.65
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          0.85
        )
        .fromTo(
          instrumentsRef.current?.children || [],
          { y: 60, opacity: 0, rotation: -3 },
          { y: 0, opacity: 1, rotation: 0, duration: 0.8, stagger: 0.15 },
          0.5
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh w-full flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0 }}
      >
        <img
          src="/hero-surgery.jpg"
          alt="Surgical team"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,133,124,0.88) 0%, rgba(0,107,100,0.92) 60%, rgba(61,74,58,0.95) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24 pt-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 lg:max-w-[55%]">
          <p
            ref={eyebrowRef}
            className="text-[0.75rem] font-medium tracking-[0.12em] text-white/70 uppercase mb-6"
            style={{ opacity: 0 }}
          >
            Surgical Innovation · Scotland Based
          </p>

          <h1 className="font-heading font-semibold text-white leading-[1.05] tracking-[-0.02em]">
            <span
              ref={line1Ref}
              className="block text-[clamp(3rem,6vw,5.5rem)]"
              style={{ opacity: 0 }}
            >
              Precision Instruments
            </span>
            <span
              ref={line2Ref}
              className="block text-[clamp(3rem,6vw,5.5rem)]"
              style={{ opacity: 0 }}
            >
              for Modern Surgery
            </span>
          </h1>

          <p
            ref={subRef}
            className="text-[1.125rem] font-normal text-white/80 max-w-[520px] leading-relaxed mt-6"
            style={{ opacity: 0 }}
          >
            Setra Group provides high-precision, CE-certified surgical instruments for modern medical practices. Based in Scotland, we are dedicated to delivering excellence and innovation in every tool we craft.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-wrap gap-4 mt-10"
            style={{ opacity: 0 }}
          >
            <button
              onClick={() => scrollTo('#products')}
              className="bg-white text-surgical-teal font-semibold text-[0.9375rem] px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)] transition-all duration-300 ease-smooth"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollTo('#cta')}
              className="bg-transparent border border-white/40 text-white font-medium text-[0.9375rem] px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 ease-smooth"
            >
              Download Catalog
            </button>
          </div>
        </div>

        {/* Right: Floating Instruments */}
        <div
          ref={instrumentsRef}
          className="hidden lg:flex flex-1 justify-center items-center relative h-[500px]"
        >
          <img
            src="/instruments-hero.jpg"
            alt="Surgical instruments"
            className="w-[90%] rounded-2xl shadow-2xl object-cover"
            style={{
              animation: 'float 6s ease-in-out infinite alternate',
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <div className="relative w-[1px] h-10 bg-white/40 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-3 bg-white/70 rounded-full"
            style={{
              animation: 'scrollDown 2s ease-in-out infinite',
            }}
          />
        </div>
        <span className="text-[0.6875rem] text-white/40 tracking-wide">
          Scroll to explore
        </span>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(-8px) rotate(-1deg); }
          100% { transform: translateY(8px) rotate(1deg); }
        }
        @keyframes scrollDown {
          0% { top: -12px; opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { top: 40px; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
