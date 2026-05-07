import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 'Scotland', label: 'Based' },
  { value: '10,000+', label: 'Instruments' },
  { value: '100%', label: 'Quality Inspected' },
  { value: 'ISO 13485', label: 'Certified' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full bg-white border-b border-light-gray py-8 md:py-10"
      style={{ opacity: 0 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[0.875rem] text-muted-olive flex items-center gap-2 text-center md:text-left">
          <Globe size={16} />
          Delivering precision-engineered surgical instruments globally from Scotland
        </p>

        <div className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[1.25rem] md:text-[1.5rem] font-heading font-semibold text-surgical-teal">
                {stat.value}
              </div>
              <div className="text-[0.75rem] text-muted-olive mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
