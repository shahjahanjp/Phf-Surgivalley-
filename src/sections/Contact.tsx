import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
        '.contact-left',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      ).fromTo(
        '.contact-right',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
        0.15
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'info@setragroup.com',
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: '+44 (0) 141 123 4567',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'Innovation Park, Glasgow, Scotland, UK',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full bg-white py-[clamp(4rem,8vw,7rem)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left: Info */}
        <div className="flex-1 lg:max-w-[45%] contact-left">
          <p className="text-[0.75rem] font-medium tracking-[0.1em] text-surgical-teal uppercase">
            Get in Touch
          </p>
          <h2 className="font-heading font-medium text-[clamp(2rem,4vw,3.5rem)] text-graphite leading-[1.1] tracking-[-0.01em] mt-4">
            Let's Discuss Your Instrument Requirements
          </h2>
          <p className="text-base text-muted-olive leading-[1.7] mt-4">
            Whether you need catalog access, sample evaluation, or a custom OEM
            manufacturing partnership, our team is ready to assist.
          </p>

          <div className="mt-10 space-y-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-light-teal flex items-center justify-center flex-shrink-0 text-surgical-teal">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.75rem] text-muted-olive/60 uppercase tracking-[0.05em]">
                    {item.label}
                  </div>
                  <div className="text-base font-medium text-graphite mt-0.5">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { icon: <Linkedin size={18} />, label: 'LinkedIn' },
              { icon: <Youtube size={18} />, label: 'YouTube' },
              { icon: <Instagram size={18} />, label: 'Instagram' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-light-teal flex items-center justify-center text-surgical-teal hover:bg-surgical-teal hover:text-white transition-all duration-300 ease-smooth"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 contact-right">
          <form
            onSubmit={handleSubmit}
            className="bg-warm-sand rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-surgical-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00857c"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-graphite">
                  Message Sent!
                </h3>
                <p className="text-muted-olive mt-2">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block text-[0.75rem] text-muted-olive/60 uppercase tracking-[0.05em] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white border border-light-gray rounded-xl px-5 py-3.5 text-[0.9375rem] text-graphite placeholder:text-muted-olive/40 focus:border-surgical-teal focus:shadow-[0_0_0_3px_rgba(0,133,124,0.1)] outline-none transition-all duration-200 ease-smooth"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-[0.75rem] text-muted-olive/60 uppercase tracking-[0.05em] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white border border-light-gray rounded-xl px-5 py-3.5 text-[0.9375rem] text-graphite placeholder:text-muted-olive/40 focus:border-surgical-teal focus:shadow-[0_0_0_3px_rgba(0,133,124,0.1)] outline-none transition-all duration-200 ease-smooth"
                    placeholder="business@email.com"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.75rem] text-muted-olive/60 uppercase tracking-[0.05em] mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full bg-white border border-light-gray rounded-xl px-5 py-3.5 text-[0.9375rem] text-graphite placeholder:text-muted-olive/40 focus:border-surgical-teal focus:shadow-[0_0_0_3px_rgba(0,133,124,0.1)] outline-none transition-all duration-200 ease-smooth"
                      placeholder="Hospital / Distributor"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.75rem] text-muted-olive/60 uppercase tracking-[0.05em] mb-2">
                      Country
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full bg-white border border-light-gray rounded-xl px-5 py-3.5 text-[0.9375rem] text-graphite focus:border-surgical-teal focus:shadow-[0_0_0_3px_rgba(0,133,124,0.1)] outline-none transition-all duration-200 ease-smooth appearance-none"
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="AE">UAE</option>
                      <option value="BR">Brazil</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[0.75rem] text-muted-olive/60 uppercase tracking-[0.05em] mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-white border border-light-gray rounded-xl px-5 py-3.5 text-[0.9375rem] text-graphite placeholder:text-muted-olive/40 focus:border-surgical-teal focus:shadow-[0_0_0_3px_rgba(0,133,124,0.1)] outline-none transition-all duration-200 ease-smooth resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-surgical-teal text-white font-semibold text-[0.9375rem] py-4 rounded-xl hover:bg-surgical-teal-dark hover:-translate-y-0.5 transition-all duration-300 ease-smooth"
                >
                  Send Message
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
