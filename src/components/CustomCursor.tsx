import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const mql = window.matchMedia('(pointer: coarse)');
    setIsTouch(mql.matches);
    if (mql.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        setHovering(false);
      }
    };

    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.08;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - (hovering ? 20 : 6)}px, ${cursorPos.current.y - (hovering ? 20 : 6)}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, [hovering]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-[width,height,opacity] duration-300 ease-smooth ${
        hovering ? 'w-10 h-10 opacity-50' : 'w-3 h-3 opacity-30'
      }`}
      style={{
        backgroundColor: '#00857c',
      }}
    />
  );
}
