"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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
      className={`py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-[#F3F0E8] transition-opacity duration-1000 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-md mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-300">
          <h3 className="text-[#2c3e50] text-xl md:text-2xl font-serif mb-4 text-center">
            Get In Touch
          </h3>
          <p className="text-[#6b8db5] text-sm mb-6 text-center leading-relaxed">
            Simply fill out the brief fields below and Dr. Blake will be in
            touch with you soon, usually within one business day. This form is
            safe, private, and completely free.
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Name
              </label>
              <Input
                placeholder="Name"
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]"
              />
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]"
              />
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Phone
              </label>
              <Input
                type="tel"
                placeholder="(555) 234-5678"
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]"
              />
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Message
              </label>
              <Textarea
                placeholder="How can I help you?"
                rows={4}
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5] resize-none"
              />
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Preferred Contact Time
              </label>
              <Input
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]"
              />
              <p className="text-xs text-[#6b8db5] mt-1">
                Let us know when you're typically available for a call or
                consultation
              </p>
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Preferred Contact Method
              </label>
              <Select>
                <SelectTrigger className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]">
                  <SelectValue placeholder="Select preferred method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="text">Text</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start space-x-2 py-4">
              <input type="checkbox" className="mt-1" />
              <span className="text-xs text-[#6b8db5]">I'm not a robot</span>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#2c5530] hover:bg-[#1e3d22] text-white py-3 rounded font-medium"
            >
              Submit
            </Button>

            <p className="text-xs text-[#6b8db5] text-center mt-4">
              By clicking submit you consent to receive texts and emails from
              Dr. Serena Blake
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
