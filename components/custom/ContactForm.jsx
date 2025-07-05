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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactTime: "",
    agree: false,
    method: "",
  });

  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.contactTime.trim())
      newErrors.contactTime = "Preferred contact time is required";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted";
    if (!formData.method) newErrors.method = "Select a contact method";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        contactTime: "",
        agree: false,
        method: "",
      });
      // Handle real submission here
    }
  };

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
            touch with you soon.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Name
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border-gray-300 focus:border-[#6b8db5]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border-gray-300 focus:border-[#6b8db5]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Phone
              </label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 234-5678"
                className="w-full border-gray-300 focus:border-[#6b8db5]"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows={4}
                className="w-full border-gray-300 resize-none focus:border-[#6b8db5]"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Preferred Contact Time
              </label>
              <Input
                name="contactTime"
                value={formData.contactTime}
                onChange={handleChange}
                placeholder="e.g., Mornings, Evenings"
                className="w-full border-gray-300 focus:border-[#6b8db5]"
              />
              {errors.contactTime && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.contactTime}
                </p>
              )}
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Preferred Contact Method
              </label>
              <Select
                value={formData.method}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, method: value }))
                }
              >
                <SelectTrigger className="w-full border-gray-300 focus:border-[#6b8db5]">
                  <SelectValue placeholder="Select preferred method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="text">Text</SelectItem>
                </SelectContent>
              </Select>
              {errors.method && (
                <p className="text-red-500 text-xs mt-1">{errors.method}</p>
              )}
            </div>

            <div className="flex items-start space-x-2 py-4">
              <input
                name="agree"
                type="checkbox"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-xs text-[#6b8db5]">
                I agree to be contacted
              </span>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-xs -mt-2 mb-2">{errors.agree}</p>
            )}

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
