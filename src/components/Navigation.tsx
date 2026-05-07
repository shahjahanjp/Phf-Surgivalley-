import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Quality', href: '#quality' },
  { label: 'Catalog', href: '#cta' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 100);
      if (currentY > 200) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-6 md:px-12 lg:px-16 transition-all duration-400 ease-smooth ${
          scrolled
            ? 'bg-warm-sand/92 backdrop-blur-md border-b border-black/[0.06]'
            : 'bg-transparent border-b border-transparent'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
        style={{ transitionDuration: '400ms' }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col"
        >
          <span className="font-heading font-semibold text-xl text-graphite tracking-tight">
            SETRA
          </span>
          <span className="text-[0.625rem] tracking-[0.1em] text-muted-olive uppercase">
            GROUP SURGICAL
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[0.9375rem] font-medium text-graphite hover:text-surgical-teal transition-colors duration-300 ease-smooth tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-surgical-teal text-white text-[0.875rem] font-semibold px-7 py-3 rounded-full hover:bg-surgical-teal-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,133,124,0.25)] transition-all duration-300 ease-smooth"
          >
            Request Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-graphite"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-warm-sand/98 backdrop-blur-lg pt-24 px-6 lg:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-heading font-medium text-graphite text-left hover:text-surgical-teal transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-surgical-teal text-white text-lg font-semibold px-8 py-4 rounded-full mt-4 w-fit"
            >
              Request Quote
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
