import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "The consistency of Setra Group's instrument quality across 3,000+ annual orders has made them our primary surgical supplier for six years.",
    author: 'Sarah Chen',
    role: 'Head of Procurement',
    org: 'University Hospital',
    country: 'Germany',
    flag: '🇩🇪',
  },
  {
    quote:
      'We switched our entire orthopedic line to Setra Group after their samples outperformed European brands at half the cost.',
    author: 'Dr. Ahmed Al-Rashid',
    role: 'Chief of Surgery',
    org: 'King Faisal Medical Center',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
  },
  {
    quote:
      'Their custom instrument development team delivered a specialized microsurgical set in 8 weeks — a process that typically takes 6 months.',
    author: 'Prof. Jean-Paul Martin',
    role: 'Director of Neurosurgery',
    org: 'Hôpital Sainte-Anne',
    country: 'France',
    flag: '🇫🇷',
  },
  {
    quote:
      "Setra Group's regulatory documentation and CE marking support made our EU market entry seamless. A true B2B partner.",
    author: 'Maria Santos',
    role: 'Supply Chain Director',
    org: 'Brasmed Distribuidora',
    country: 'Brazil',
    flag: '🇧🇷',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-header > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.testimonial-card',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.testimonials-row',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-warm-sand py-[clamp(4rem,8vw,7rem)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="testimonials-header text-center max-w-[640px] mx-auto mb-12">
          <p className="text-[0.75rem] font-medium tracking-[0.1em] text-surgical-teal uppercase">
            Client Partners
          </p>
          <h2 className="font-heading font-medium text-[clamp(2rem,4vw,3.5rem)] text-graphite leading-[1.1] tracking-[-0.01em] mt-3">
            Trusted Where Surgery Matters Most
          </h2>
        </div>

        {/* Scrollable row */}
        <div className="testimonials-row flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="testimonial-card flex-shrink-0 w-[340px] md:w-[360px] bg-white rounded-[20px] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)] snap-start relative"
            >
              {/* Decorative quote */}
              <span
                className="absolute top-4 left-6 text-[3rem] font-heading text-surgical-teal/15 leading-none select-none"
                aria-hidden="true"
              >
                "
              </span>

              <p className="text-base text-graphite leading-relaxed italic relative z-10 mt-4">
                {t.quote}
              </p>

              <div className="mt-6">
                <div className="text-[0.9375rem] font-heading font-semibold text-graphite">
                  {t.author}
                </div>
                <div className="text-[0.8125rem] text-muted-olive mt-0.5">
                  {t.role}, {t.org}
                </div>
                <div className="text-[0.75rem] text-muted-olive/60 mt-1">
                  {t.flag} {t.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
