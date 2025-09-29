import React from 'react';

const InstagramFeed = () => {
  const feedItems = Array.from({ length: 6 });

  return (
    <section className="w-full bg-[#E4FDFF] py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] bg-clip-text text-transparent">
          Instagram Feed
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
          {feedItems.map((_, index) => (
            <div
              key={index}
              className="bg-[#34C6D2] rounded-lg aspect-square"
            >
              {/* In a real app, you would place an <Image> component here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;