"use client";

import { useEffect, useRef, useState } from "react";

export default function OfficeHours() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-12 px-4 md:px-8 lg:px-16 bg-[#F3F0E8]"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-[#41413f] text-2xl font-bold md:text-3xl font-serif mb-6">
          Office Hours
        </h3>
        <div className="space-y-2 text-[#41413f]">
          <p className="text-lg">In-person: Tuesday & Thursday, 10 AM–6 PM</p>
          <p className="text-lg">
            Virtual via Zoom: Monday, Wednesday & Friday, 1 PM–5 PM
          </p>
        </div>
      </div>
    </section>
  );
}
