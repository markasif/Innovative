import React from "react";
import Image from "next/image";

const servicesData = [
  { title: 'IT Development', description: 'We employs the latest technologies and development methodologies to create reliable and scalable software applications that meet your business needs and exceed your expectations.', imageSrc: '/job1.jpg' },
  { title: 'IT Management', description: 'We provide comprehensive solutions for infrastructure, security, and maintenance, allowing you to focus on your core business operations.', imageSrc: '/job2.jpg' },
  { title: 'Data Security', description: 'Offers end-to-end encryption, regular backups, and continuous monitoring to ensure your data is secure and compliant with industry standards.', imageSrc: '/job3.jpg' },
  { title: 'Business Reform', description: 'Include process automation, data analytics, and customized software solutions to enhance efficiency and productivity, and drive growth.', imageSrc: '/job4.jpg' },
  { title: 'IT Consultancy', description: 'Stay ahead of the competition with cutting-edge technology solutions, effective risk management, and cost-effective strategies for IT infrastructure development.', imageSrc: '/job5.jpg' },
  { title: 'QA & Testing', description: 'We employs the latest tools and methodologies to ensure that your software is bug-free, meets industry standards, and delivers a superior user experience.', imageSrc: '/job6.jpg' },
];

const ServiceCard = ({ imageSrc, title, description, reverse }: { imageSrc: string; title: string; description: string; reverse?: boolean; }) => {
  
  const contentClasses = reverse ? 'rounded-b-3xl' : 'rounded-t-3xl';
  const imageClasses = reverse ? 'rounded-t-3xl' : 'rounded-b-3xl';

  const content = (
    <div className={`flex flex-1 flex-col justify-center items-center text-center p-8 bg-[#05CBF2] ${contentClasses}`}>
      <div className="bg-[#FFFFFF80]/50 backdrop-blur-sm rounded-full py-2 px-6 mb-4 inline-block shadow-md">
        <h3 className="text-[#0554F2] text-lg font-bold">{title}</h3>
      </div>
      <p className="text-[#FFFFFF] text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
  );
  
  const image = (
    <div className={`relative flex-1 w-full min-h-[200px] overflow-hidden ${imageClasses}`}>
      <Image src={imageSrc} alt={`${title} service`} layout="fill" objectFit="cover" />
    </div>
  );

  return (
    <div className="bg-[#05CBF2] p-2 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="flex flex-col h-full overflow-hidden rounded-2xl shadow-inner">
            {reverse ? <>{image}{content}</> : <>{content}{image}</>}
        </div>
    </div>
  );
};


const ServicesSection = () => {
  return (
      <section className="w-full bg-[url('/wall2.jpg')] bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h3 className="text-lg font-jost font-light text-[#1D1D1F]">Our Services</h3>
          <h2 className="text-lg md:text-xl lg:text-3xl font-jost font-bold text-[#0554F2] mt-2">
            We Offer a Wide Variety of IT Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              reverse={[1, 3, 5].includes(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;