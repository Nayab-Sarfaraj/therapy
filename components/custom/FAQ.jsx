"use client";

import { useEffect, useRef, useState } from "react";
import { CircleChevronRightIcon } from "lucide-react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white font-freightDisplay"
    >
      <div
        className={`max-w-3xl mx-auto transition-opacity duration-1000 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-[#6b8db5] text-3xl md:text-4xl mb-10 text-center">
          Frequently Asked Questions
        </h3>

        <h4 className="text-[#6b8db5] text-xl md:text-2xl mb-6">Therapy</h4>

        <ul className="space-y-1">
          {faqs.map((faq, index) => (
            <li
              key={index}
              onClick={() => toggle(index)}
              className="border-b border-[#6b8db5] py-3 cursor-pointer select-none"
            >
              <div className="flex items-center text-[#6b8db5] text-base md:text-lg">
                <CircleChevronRightIcon
                  className={`w-4 h-4 mr-2 transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                  strokeWidth={1.5}
                />
                <span>{faq.question}</span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-[#8b7355] text-base font-normal pr-2">
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
