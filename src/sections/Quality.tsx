import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { name: 'ISO 13485:2016', desc: 'Medical Device Quality Management' },
  { name: 'CE Marked', desc: 'MDR 2017/745 Compliant' },
  { name: 'FDA Registered', desc: 'US Food & Drug Administration' },
  { name: 'ISO 9001:2015', desc: 'Quality Management Systems' },
  { name: 'SGS Audited', desc: 'Independent Third-Party Verification' },
];

export default function Quality() {
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
        '.quality-left',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      )
        .fromTo(
          '.quality-right',
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.9, ease: 'expo.out' },
          0.1
        )
        .fromTo(
          '.quality-stat',
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
          0.5
        )
        .fromTo(
          '.quality-cert-row',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'expo.out' },
          0.3
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="w-full bg-white py-[clamp(4rem,8vw,7rem)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 quality-left">
          <p className="text-[0.75rem] font-medium tracking-[0.1em] text-warm-terracotta uppercase">
            Quality Assurance
          </p>
          <h2 className="font-heading font-medium text-[clamp(2rem,4vw,3.5rem)] text-graphite leading-[1.1] tracking-[-0.01em] mt-4">
            Built for the Operating Room. Certified for the World.
          </h2>
          <p className="text-base text-muted-olive/85 leading-[1.7] mt-5">
            Our quality management system exceeds international standards. Every instrument
            undergoes metallurgical testing, dimensional verification, passivation, and
            sterilization compatibility validation before release.
          </p>

          <div className="mt-8 space-y-0">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="quality-cert-row flex items-center gap-4 py-4 border-b border-light-gray"
              >
                <div className="w-8 h-8 rounded-full bg-light-teal flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-surgical-teal" />
                </div>
                <div>
                  <div className="text-base font-medium text-graphite">
                    {cert.name}
                  </div>
                  <div className="text-[0.8125rem] text-muted-olive">
                    {cert.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative quality-right">
          <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]">
            <img
              src="/facility.jpg"
              alt="Quality inspection facility"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
          </div>
          <div className="quality-stat absolute -bottom-4 -left-2 md:left-4 bg-white rounded-2xl px-7 py-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
            <div className="text-[2rem] font-heading font-semibold text-surgical-teal">
              72+
            </div>
            <div className="text-[0.8125rem] text-muted-olive mt-1">
              Quality Checks Per Instrument
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
