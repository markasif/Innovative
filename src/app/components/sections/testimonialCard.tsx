import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  image?: string; 
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, image, text }) => {
  
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-lg h-full">
      {image ? (
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium mb-4">
          {name.charAt(0)}
        </div>
      )}
      <h3 className="font-bold text-lg mb-2 text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;