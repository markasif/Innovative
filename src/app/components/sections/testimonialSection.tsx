
import React from 'react';
import Image from 'next/image';
import TestimonialCard from '../sections/testimonialCard'; 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonialsData = [
  {
    name: 'Name',
    image: '/dp1.jpg', 
    text: 'Phasellus condimentum elit purus, ac fringilla augue consequat id. Donec non volutpat augue, id consectetur leo. Aliquam feugiat hendrerit felis, vel pellentesque ligula scelerisque vitae.',
  },
  {
    name: 'Client One',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    name: 'Client Two',
    image: '/2.jpg', 
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Client Three',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    image: '/avatar2.png'
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden text-white">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/wall8.jpg" 
          alt="Laptop keyboard"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
        {/* <div className="absolute inset-0 bg-[#3a60f9] opacity-50"></div>  */}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-jost font-bold text-center mb-16 relative z-10">
          Testimonials
        </h2>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full relative z-10" // Ensure carousel is above background layers
        >
          <CarouselContent className="-ml-4"> {/* Adjusted margin for spacing */}
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md -ml-5" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md -mr-5" />
        </Carousel>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-white/20 text-[200px] leading-[0] z-0 opacity-80">
          “
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-white/20 text-[200px] leading-[0] z-0 opacity-80 rotate-180">
          “
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;