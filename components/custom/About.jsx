"use client";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const [showPara1, setShowPara1] = useState(false);
  const [showPara2, setShowPara2] = useState(false);
  const [showPara3, setShowPara3] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowPara1(true), 100);
          setTimeout(() => setShowPara2(true), 400);
          setTimeout(() => setShowPara3(true), 700);
          setTimeout(() => setShowImage(true), 900);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-[#FEFEFE]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h3
              className={`text-[#7E7E6B] text-3xl md:text-4xl font-bold font-serif mb-6 md:mb-8 transition-opacity duration-1000 ${
                showPara1 ? "opacity-100" : "opacity-0"
              }`}
            >
              About Dr. Serena Blake
            </h3>

            <p
              className={`text-[#8F8E79] leading-relaxed text-base transition-opacity duration-1000 ${
                showPara1 ? "opacity-100" : "opacity-0"
              }`}
            >
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma.
            </p>

            <p
              className={`text-[#8b7355] leading-relaxed text-base transition-opacity duration-1000 ${
                showPara2 ? "opacity-100" : "opacity-0"
              }`}
            >
              Whether you meet in her Maplewood Drive office or connect
              virtually via Zoom, Dr. Blake is committed to creating a safe,
              supportive space for you to thrive. Her therapeutic approach
              combines proven methodologies with a deep understanding of each
              client's unique needs and circumstances.
            </p>

            <p
              className={`text-[#8b7355] leading-relaxed text-base transition-opacity duration-1000 ${
                showPara3 ? "opacity-100" : "opacity-0"
              }`}
            >
              Dr. Blake specializes in anxiety and stress management,
              relationship counseling, and trauma recovery. She believes in
              empowering her clients with practical tools and insights that
              foster lasting positive change and personal growth.
            </p>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center md:justify-end order-1 md:order-2 transition-opacity duration-1000 ${
              showImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-80 h-[480px] md:w-96 md:h-[576px] relative">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-[#7E7E6B] border-[.1px] mt-40 w-full"></div>
    </section>
  );
};

export default About;
