import { useEffect, useRef, useState } from 'react';

function AnimatedSection({ id, className = '', children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    if (window.location.hash === `#${id}`) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [id]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`animated-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;
