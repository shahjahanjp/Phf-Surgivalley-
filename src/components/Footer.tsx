import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const productLinks = [
  'General Surgery',
  'Orthopedic',
  'Cardiovascular',
  'Neurosurgery',
  'Dental',
  'ENT',
  'Plastic Surgery',
  'Gynecology',
];

const companyLinks = [
  'About Setra Group',
  'Quality & Certifications',
  'Catalogs',
  'Contact',
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-col',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-muted-olive text-white/80">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-[clamp(3rem,6vw,6rem)] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="footer-col">
            <div className="text-xl font-heading font-semibold text-white">
              SETRA GROUP
            </div>
            <p className="text-[0.875rem] text-white/60 mt-3 leading-relaxed">
              Precision surgical instruments based in Scotland. Committed to quality and innovation in the medical field.
            </p>
            <div className="flex items-center gap-6 mt-6">
              {['LinkedIn', 'YouTube', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[0.875rem] text-white/50 hover:text-white/80 transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="footer-col">
            <div className="text-[0.75rem] font-medium tracking-[0.08em] text-white/40 uppercase mb-5">
              Products
            </div>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[0.875rem] text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col">
            <div className="text-[0.75rem] font-medium tracking-[0.08em] text-white/40 uppercase mb-5">
              Company
            </div>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[0.875rem] text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block mt-6 text-[0.875rem] font-semibold text-white hover:underline transition-all"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.75rem] text-white/40">
            © 2025 Setra Group. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-white/40">
            ISO 13485 · CE Marked · FDA Registered
          </p>
        </div>
      </div>
    </footer>
  );
}
