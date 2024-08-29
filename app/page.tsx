"use client"
import { Navbar } from "./components/navbar";
import { Features } from "./components/features";
import { Faq } from "./components/faq";
import { Cta } from "./components/cta";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Vision } from "./components/vision";
import { useEffect } from "react";
import { Cards } from "./components/cards";
import { Team } from "./components/team";
import ContactForm from "./components/contact";
import Target from "./components/target";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElement = document.querySelector('.parallax-bg') as HTMLElement;
      parallaxElement.style.backgroundPositionY = `${scrolled * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar/>
      <div id="inicio" className="parallax-bg bg-[url('https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator_chile-v1-0-2%2F002%2F92002%2F6edZL4Y3%2F30cc902f4b3945b9b788a8b778df5ac0&methods=resize%2C2000%2C5000')] bg-cover bg-center pb-0.5">
        <Hero/>
        <Vision/>
      </div>
      <Target/>
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features/>
        <Faq/>
        <Cta/>
        <Cards/>
        <Team/>
      </div>
      <ContactForm/>
      <Footer/>
    </>
  );
}
