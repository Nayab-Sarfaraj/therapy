"use client";

import About from "@/components/custom/About";
import AreaOfFocus from "@/components/custom/AreaOfFocus";
import ContactForm from "@/components/custom/ContactForm";
import FAQ from "@/components/custom/FAQ";
import Footer from "@/components/custom/Footer";
import FooterCredentials from "@/components/custom/FooterCredentials";
import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import OfficeHours from "@/components/custom/OfficeHours";
import Quote from "@/components/custom/Quote";
import RatesAndInsurance from "@/components/custom/RatesAndInsurance";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />

      <About />

      <AreaOfFocus />

      <RatesAndInsurance />

      <OfficeHours />
      <Quote />

      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
