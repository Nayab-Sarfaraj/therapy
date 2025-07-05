"use client";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-[#F3F0E8]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-[#41413f] text-2xl md:text-3xl font-serif">
          Dr. Serena Blake, PsyD, Licensed Clinical Psychologist
        </h3>

        <div className="space-y-2">
          <p className="text-[#41413f] ">
            <a
              href="mailto:serena@blakepsychology.com"
              className="underline hover:no-underline"
            >
              serena@blakepsychology.com
            </a>
          </p>
          <p className="text-[#8b7355]">
            Phone:{" "}
            <a
              href="tel:(323)555-0192"
              className="underline hover:no-underline text-[#41413f] "
            >
              (323) 555-0192
            </a>
          </p>
          <p className="text-[#41413f] ">
            1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
          <a href="#" className="text-[#41413f]  underline hover:no-underline">
            Home
          </a>
          <a href="#" className="text-[#41413f]  underline hover:no-underline">
            Privacy Policy
          </a>
          <a href="#" className="text-[#41413f]  underline hover:no-underline">
            Good Faith Estimate
          </a>
        </div>

        <div className="pt-8 border-t border-[#8b7355]/20">
          <a
            href="#"
            className="text-[#41413f]  underline hover:no-underline text-lg"
          >
            Client Portal
          </a>
        </div>

        <div className="pt-6">
          <p className="text-[#8b7355] text-sm">
            © 2025 Dr. Serena Blake Psychology Practice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
