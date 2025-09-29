import React from "react";
import Image from "next/image";

const StrengthCard = ({ text1, text2 }: { text1: string; text2: string; }) => (
  <div className="bg-white rounded-2xl p-8 text-center shadow-lg h-full flex flex-col justify-center items-center">
    <span className="saira-font text-xl font-bold text-blue-600">{text1}</span>
    <span className="text-lg text-blue-600">{text2}</span>
  </div>
);

const StrengthProductsSection = () => {
  const productLogos = [
    { src: "/com1.png", alt: "First Logic HCM" },
    { src: "/com2.png", alt: "First Logic Brandlab" },
    { src: "/com3.png", alt: "FirstKart" },
    { src: "/com4.png", alt: "Makeevr" },
    { src: "/com5.png", alt: "Tuberanks" },
  ];

  return (
    <section className="py-20 px-4 bg-cyan-100">
      <div className="container mx-auto space-y-16">
        
        <div className="text-center">
          <h2 className="font-jost text-4xl font-bold text-blue-600 text-center mb-12">Our Strength</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StrengthCard text1="50+ EMPLOYEE" text2="STRENGTH" />
            <StrengthCard text1="200+ PROJECTS" text2="HANDED-OVER" />
            <StrengthCard text1="TOP CLIENT REVIEW" text2="RATING" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-jost text-4xl font-bold text-blue-600 text-center mb-12">Our Products</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {productLogos.map(logo => (
              <Image key={logo.alt} src={logo.src} alt={logo.alt} width={150} height={50} className="object-contain" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthProductsSection;