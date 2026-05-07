import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      tl.fromTo(
        '.about-image',
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      )
        .fromTo(
          '.about-badge',
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
          0.4
        )
        .fromTo(
          '.about-eyebrow',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out' },
          0.2
        )
        .fromTo(
          '.about-heading',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out' },
          0.3
        )
        .fromTo(
          '.about-body',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'expo.out' },
          0.45
        )
        .fromTo(
          '.about-cta',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out' },
          0.7
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-warm-sand py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Image */}
        <div className="flex-1 relative">
          <div className="about-image rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
            <img
              src="/craftsmanship.jpg"
              alt="Craftsman working on surgical instruments"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="about-badge absolute -bottom-4 -right-2 md:right-4 bg-surgical-teal text-white text-[0.875rem] font-semibold px-6 py-3 rounded-xl shadow-[0_8px_24px_rgba(0,133,124,0.2)]">
            Scotland Based
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 max-w-xl">
          <p className="about-eyebrow text-[0.75rem] font-medium tracking-[0.1em] text-surgical-teal uppercase">
            Our Commitment
          </p>
          <h2 className="about-heading font-heading font-medium text-[clamp(2rem,4vw,3.5rem)] text-graphite leading-[1.1] tracking-[-0.01em] mt-4">
            Precision Reimagined in Scotland
          </h2>
          <p className="about-body text-base text-muted-olive/85 leading-[1.7] mt-5">
            Setra Group is a Scotland-based provider of premium surgical instruments. We bridge the gap between traditional craftsmanship and modern surgical requirements, ensuring precision in every procedure. Our roots in the Scottish innovation landscape drive us to deliver tools that meet the highest standards of the global medical community.
          </p>
          <p className="about-body text-base text-muted-olive/85 leading-[1.7] mt-4">
            Our commitment to quality is unwavering. Every instrument undergoes rigorous checks to meet international standards, including ISO 13485, CE marking, and FDA registration—providing surgeons with the reliability they need in the operating room.
          </p>
          <a
            href="#"
            className="about-cta inline-flex items-center gap-2 text-warm-terracotta font-medium mt-6 group"
          >
            Our Story & Heritage
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
