"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AreaOfFocus() {
  const sectionRef = useRef(null);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delays = [0, 300, 600]; // delay in ms for each card
          delays.forEach((delay, i) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, i]);
            }, delay);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const items = [
    {
      title: "Anxiety & Stress Management",
      image:
        "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: `Learn effective strategies to manage anxiety and stress through evidence-based techniques including cognitive-behavioral therapy, mindfulness practices, and personalized coping strategies tailored to your specific needs and lifestyle.`,
    },
    {
      title: "Relationship Counseling",
      image:
        "https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: `Strengthen your relationships through improved communication, conflict resolution, and deeper understanding. Whether working on romantic partnerships, family dynamics, or friendships, develop healthier connection patterns.`,
    },
    {
      title: "Trauma Recovery",
      image:
        "https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: `Process and heal from traumatic experiences in a safe, supportive environment. Using trauma-informed approaches, work toward recovery, resilience, and reclaiming your sense of safety and empowerment.`,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-[#F3F0E8]"
    >
      <div className="max-w-7xl mx-auto">
        <h3
          className={`text-[#41413f] text-3xl md:text-4xl font-serif mb-12 text-center transition-opacity duration-1000 ${
            visibleIndexes.length > 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          Areas of Focus
        </h3>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className={`text-center transition-opacity duration-1000 ${
                visibleIndexes.includes(index) ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                ></div>
              </div>
              <h4 className="text-[#41413f] text-2xl font-serif mb-4 md:mb-6 leading-tight px-4">
                {item.title}
              </h4>
              <p className="text-[#41413f] leading-relaxed text-base px-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
