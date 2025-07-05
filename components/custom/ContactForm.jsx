"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.message.trim()) newErrors.message = "This field is required.";
    if (!form.preferredTime.trim())
      newErrors.preferredTime = "Please specify a time.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", form);
    alert("Form submitted successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredTime: "",
      agree: false,
    });
    setErrors({});
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-[#F3F0E8]">
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

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                Name
              </label>
              <Input
                name="name"
                placeholder="Name"
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]"
                value={form.name}
                onChange={handleChange}
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
                placeholder="you@example.com"
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]"
                value={form.email}
                onChange={handleChange}
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
                placeholder="(555) 234-5678"
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="text-[#2c3e50] text-sm font-medium block mb-1">
                What brings you here?
              </label>
              <Textarea
                name="message"
                placeholder="How can I help you?"
                rows={4}
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5] resize-none"
                value={form.message}
                onChange={handleChange}
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
                name="preferredTime"
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                className="w-full border-gray-300 focus:border-[#6b8db5] focus:ring-[#6b8db5]"
                value={form.preferredTime}
                onChange={handleChange}
              />
              <p className="text-xs text-[#6b8db5] mt-1">
                Let us know when you're typically available for a call or
                consultation
              </p>
              {errors.preferredTime && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.preferredTime}
                </p>
              )}
            </div>

            <div className="flex items-start space-x-2 py-4">
              <input
                type="checkbox"
                name="agree"
                className="mt-1"
                checked={form.agree}
                onChange={handleChange}
              />
              <span className="text-xs text-[#6b8db5]">
                I agree to be contacted
              </span>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-xs -mt-2">{errors.agree}</p>
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
