"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-[#F3F0E8] px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="relative h-screen flex items-center justify-center text-center rounded-lg overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vide.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-[1]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-2 leading-[1.1]">
            Psychological Care for
          </h2>
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-8 leading-[1.1]">
            Change, Insight, and Well-Being
          </h2>

          <p className="text-white text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Offering individual psychotherapy for adults via telehealth in Los
            Angeles and <u>most U.S. states</u> through virtual sessions
          </p>

          <Button
            className="bg-[#a8c5c1] hover:bg-[#96b3af] text-white px-6 md:px-8 py-3  md:py-4 rounded-full text-sm font-medium tracking-wide uppercase transition-colors duration-300 "
            size="lg"
          >
            SCHEDULE A CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
