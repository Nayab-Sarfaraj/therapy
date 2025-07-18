"use client";
import React, { useEffect, useRef, useState } from "react";

export default function RatesAndInsurance() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
      className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-[#94B0B0]"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-black text-3xl md:text-4xl font-serif mb-8 md:mb-12">
          Rates and Insurance
        </h3>

        <div className="space-y-4 md:space-y-6 text-black">
          <p className="text-lg">Individual Session - $200</p>
          <p className="text-lg">Couples Session - $240</p>
          <p className="text-lg px-4">
            I do not accept insurance, but a superbill is provided for
            self-submission to your insurance provider.
          </p>
          <p className="text-lg px-4">
            Payment is due at the time of service. I accept cash, check, and all
            major credit cards.
          </p>
        </div>
      </div>
    </section>
  );
}
