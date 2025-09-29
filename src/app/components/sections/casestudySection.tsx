
import React from 'react';
import Image from 'next/image';

const caseStudies = [
  {
    title: 'Artable Interio',
    category: 'Responsive Website',
    imageSrc: '/Bus1.jpg', 
  },
  {
    title: 'Thara Cart',
    category: 'E-Commerce Website & Mobile App',
    imageSrc: '/Bus2.jpg', 
  },
  {
    title: 'Waterain',
    category: 'Mobile Application & Website',
    imageSrc: '/Bus3.jpg', 
  },
  {
    title: 'Redolent',
    category: 'UI/UX Design',
    imageSrc: '/Bus4.jpg',
  },
];

const stats = [
    { value: '257', label: 'Happy Clients' },
    { value: '3840', label: 'Cups of Coffee' }
];

const CaseStudiesSection = () => {
  return (
    <section className="w-full bg-white font-sans">
      <div className="bg-[url('/wall6.jpg')] bg-no-repeat bg-center bg-cover py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-left">
            <p className="text-lg font-light text-[#0554F2]">What We Did</p>
            <h2 className="text-3xl md:text-4xl font-jost text-[#666666] mt-1">Our Case Studies</h2>
          </div>
          <div className="bg-white/50 backdrop-blur-lg p-8 md:p-12 rounded-[40px] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border border-white/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudies.map((study) => (
                <div key={study.title} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all duration-300 group-hover:shadow-xl">
                    <Image
                      src={study.imageSrc}
                      alt={study.title}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-800">{study.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{study.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  
      <div className="relative w-full h-[50vh] min-h-[400px] text-white">
        <div className="absolute inset-0">
          <Image
            src="/wall7.jpg" // The VR background image goes here
            alt="Person wearing a VR headset"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>
        <div className="h-full flex flex-col items-end justify-end p-8 md:p-16">
          <div className='flex flex-col sm:flex-row gap-6'>
            {stats.map(stat => (
              <div 
                key={stat.label} 
                className="bg-white/15 w-full max-w-xs sm:w-[250px] p-6 rounded-2xl text-center backdrop-blur-sm"
              >
                <p className="text-4xl lg:text-5xl font-bold text-cyan-300">{stat.value}</p>
                <p className="text-sm mt-1 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-2 mt-4 lg:mr-52">
            <span className="block h-[6px] w-6 bg-[#05CBF2] rounded-full opacity-50"></span>
            <span className="block h-[6px] w-6 bg-[#05CBF2] rounded-full opacity-50"></span>
            <span className="block h-[6px] w-6 bg-[#05CBF2] rounded-full opacity-50"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;