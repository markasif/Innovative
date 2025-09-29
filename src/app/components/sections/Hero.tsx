import React from 'react';
import Image from 'next/image';
import Button from '../ui/buttons'; 



const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-end pb-4 justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
            src="/Vr.jpg"
            alt="Woman with VR headset"
            layout="fill"
            objectFit="cover"
            quality={90}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <div 
            className="bg-white/10 p-8 md:p-12 border border-white/20 shadow-lg"
          >
            <p className="text-gray-300 mb-2">Welcome To First Logic Meta Lab</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Innovative Solutions for a Changing World
            </h1>
            <p className="text-gray-300 mb-6">
              Our user-centered design approach creates software solutions that are easy to use and deliver maximum impact. Our focus on user experience ensures that our software solutions meet the needs of both businesses and end-users.
            </p>
            <Button variant="outline">Get Details</Button>
          </div>
          <div className="hidden lg:flex justify-evenly items-center">
             <div 
                className="relative w-[500px] h-[500px]"
             >
                <Image 
                    src="/wall1.svg" 
                    alt="Second person with VR headset"
                    layout="fill"
                    objectFit="contain"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

