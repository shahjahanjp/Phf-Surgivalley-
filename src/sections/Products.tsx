import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'General Surgery',
    desc: 'Scalpels, forceps, scissors, retractors, needle holders, and clamps for every procedure.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L16 28M8 12L24 12M8 20L24 20" />
      </svg>
    ),
  },
  {
    title: 'Orthopedic',
    desc: 'Bone saws, drills, reamers, pliers, and fixation instruments engineered for strength and precision.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 26L26 6M10 6L26 6L26 22" />
      </svg>
    ),
  },
  {
    title: 'Cardiovascular',
    desc: 'Vascular clamps, forceps, scissors, and specialized instruments for cardiac and thoracic procedures.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 28C16 28 4 20 4 13C4 8 8 4 13 4C15 4 16 5 16 5C16 5 17 4 19 4C24 4 28 8 28 13C28 20 16 28 16 28Z" />
      </svg>
    ),
  },
  {
    title: 'Neurosurgery',
    desc: 'Micro scissors, dissectors, rongeurs, and cranial instruments for delicate neural procedures.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="12" r="8" />
        <path d="M10 20L6 28M22 20L26 28" />
      </svg>
    ),
  },
  {
    title: 'Dental & Oral',
    desc: 'Extraction forceps, elevators, scalers, and implantology instruments for oral surgery.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 8C10 8 8 14 10 20C12 26 14 28 16 28C18 28 20 26 22 20C24 14 22 8 22 8" />
        <path d="M13 8L13 4M19 8L19 4" />
      </svg>
    ),
  },
  {
    title: 'ENT',
    desc: 'Tonsillectomy sets, nasal forceps, laryngoscopes, and otology instruments for ear, nose, and throat surgery.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 16C8 10 12 6 16 6C20 6 24 10 24 16C24 22 20 26 16 26" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'Plastic & Reconstructive',
    desc: 'Fine scissors, forceps, retractors, and rhinoplasty instruments for aesthetic and reconstructive work.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L16 28M8 16L24 16" />
      </svg>
    ),
  },
  {
    title: 'Gynecology & Obstetrics',
    desc: 'Speculums, dilators, forceps, and uterine instruments designed for women\'s health procedures.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L16 12M16 20L16 28M12 16L20 16" />
        <circle cx="16" cy="16" r="6" />
      </svg>
    ),
  },
  {
    title: 'Microsurgery',
    desc: 'Micro-forceps, micro-scissors, needle holders, and vascular clips for 0.3mm precision work.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="4" />
        <path d="M16 2L16 6M16 26L16 30M2 16L6 16M26 16L30 16" />
      </svg>
    ),
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.products-header > *',
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

      // Cards stagger
      gsap.fromTo(
        '.product-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Body background color transition
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => document.body.classList.add('teal-active'),
        onLeave: () => document.body.classList.remove('teal-active'),
        onEnterBack: () => document.body.classList.add('teal-active'),
        onLeaveBack: () => document.body.classList.remove('teal-active'),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="w-full bg-surgical-teal py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="products-header text-center max-w-[640px] mx-auto mb-14">
          <p className="text-[0.75rem] font-medium tracking-[0.1em] text-white/60 uppercase">
            Our Range
          </p>
          <h2 className="font-heading font-medium text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] tracking-[-0.01em] mt-3">
            Surgical Excellence, Category by Category
          </h2>
          <p className="text-[1.0625rem] text-white/70 mt-4 leading-relaxed">
            From general surgery to highly specialized microsurgical instruments — browse
            our complete catalog of 10,000+ SKUs.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="product-card group bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-[20px] p-8 hover:bg-white/[0.12] hover:border-white/20 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.15)] transition-all duration-400 ease-smooth cursor-pointer"
            >
              <div className="text-white/70 mb-5">{cat.icon}</div>
              <h3 className="text-[1.125rem] font-heading font-semibold text-white">
                {cat.title}
              </h3>
              <p className="text-[0.875rem] text-white/60 leading-relaxed mt-2">
                {cat.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-white/80 mt-5 group-hover:text-white transition-colors">
                View Range
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
