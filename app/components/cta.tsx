import { ArrowBigDown, ArrowDownCircle } from 'lucide-react';
import { useState } from 'react';

export const Cta = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full rounded-[16px] bg-zinc-900 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
      <h1 className="text-amber-400 text-[24px] font-medium lg:text-[48px] leading-[64px]">
        Transfórmate en un facilitador de la metodología Not A game
      </h1>
      <p className="text-amber-400 pt-6 lg:pt-[48px] lg:text-[18px]">
        Selecciona una fecha y reserva tu cupo
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <a
          href='/fechas'
          className="py-[16px] px-[32px] bg-amber-400 rounded-[8px] text-zinc-900 w-fit font-medium transition duration-300 hover:bg-color3bs hover:text-white"
        >
          Reserva
        </a>
        <div
          className="flex w-full lg:w-auto items-center justify-center mt-[32px] lg:mt-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button
            onClick={handleScrollToContact}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center gap-x-3 text-amber-400 font-medium transition duration-300 hover:text-color3bs"
          >
            Necesito + info{" "}
            <span
              className={`transform transition-transform duration-300 ${
                isHovered ? 'translate-y-1' : 'translate-y-0'
              }`}
            >
              <ArrowDownCircle />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
