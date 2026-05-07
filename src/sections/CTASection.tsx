import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      tl.fromTo(
        '.cta-heading',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      )
        .fromTo(
          '.cta-sub',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out' },
          0.15
        )
        .fromTo(
          '.cta-buttons',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out' },
          0.3
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
      id="cta"
      ref={sectionRef}
      className="w-full bg-surgical-teal py-[clamp(4rem,8vw,7rem)]"
    >
      <div className="max-w-[720px] mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="cta-heading font-heading font-medium text-[clamp(2rem,4vw,3rem)] text-white leading-[1.1]">
          Ready to equip your surgical team?
        </h2>
        <p className="cta-sub text-[1.125rem] text-white/75 leading-relaxed mt-5">
          Connect with our product specialists for catalogs, samples, and customized
          procurement solutions.
        </p>
        <div className="cta-buttons flex flex-wrap justify-center gap-4 mt-10">
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-white text-surgical-teal font-semibold text-[0.9375rem] px-10 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] transition-all duration-300 ease-smooth"
          >
            Request Quote
          </button>
          <button className="bg-transparent border border-white/40 text-white font-medium text-[0.9375rem] px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 ease-smooth">
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
