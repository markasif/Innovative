"use client";
import { useState } from "react";

// Data for the navigation buttons and feature cards
const navItems = [
  "Why Choose Us",
  "Mission & Vision",
  "Our Strength",
  "Our Products",
];

const cardData = [
  {
    title: "Expertise",
    image: "/1.jpg",
    description:
      "Extensive experience in delivering high-quality software solutions across various industries.",
  },
  {
    title: "Client Focused",
    image: "/2.jpg",
    description:
      "We prioritize understanding your business needs to provide software solutions that align with your unique requirements.",
  },
  {
    title: "Innovation",
    image: "/3.jpg",
    description:
      "Constantly strive to innovate and explore new technologies to provide cutting-edge solutions and drive the future.",
  },
  {
    title: "Agile Development",
    image: "/4.jpg",
    description:
      "We follow Agile development methodologies to ensure flexibility and responsiveness to changing requirements.",
  },
];

type NavButton = {
  text: string;
  isActive: boolean;
  onClick: (value: string) => void;
};

const NavButton: React.FC<NavButton> = ({ text, isActive, onClick }) => (
  <button
    onClick={() => onClick(text)}
    className={`bg-white text-blue-700 font-medium py-3 px-8 rounded-md shadow-sm border border-gray-200 transition-all duration-300 ${
      isActive ? "text-blue-500 border-b-4 border-blue-500" : "hover:shadow-md"
    }`}
  >
      {text} {" "}
  </button>
);

type FeatureCardProps = {
  image: string;
  title: string;
  description: string;
  className?: string;
  isActive?: boolean;
  onClick?: (value: string) => void;
};

const FeatureCard: React.FC<FeatureCardProps>= ({ image, title, description, className }) => (
  <div
    className={`bg-white rounded-xl shadow-lg overflow-hidden text-left transform hover:-translate-y-2 transition-transform duration-300 ${className}`}
  >
    {/* Title Section */}
    <div className="p-6">
      <h3 className="text-blue-500 font-semibold text-lg">{title}</h3>
    </div>
    {/* Image Section */}
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    {/* Description Section */}
    <div className="p-6">
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// Main Component
const WhyChooseUsSection = () => {
  const [activeTab, setActiveTab] = useState("Why Choose Us");

  return (
    // MODIFICATION: The root div no longer needs global styles.
    <div className="w-full bg-white font-sans">
      <header className="bg-[#CEFCFF] p-8 md:p-16 lg:p-24">
        <div className="container mx-auto text-left">
          {" "}
          <p className="text-blue-500 font-semibold mb-2">
            Effective Use Of Technology
          </p>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8 max-w-2xl">
            We are Focused on Strengths & Willing to Take Risks
          </p>
          <nav className="flex flex-wrap justify-evenly gap-4 md:gap-6">
            {" "}
            {/* Aligned buttons to the start */}
            {navItems.map((item) => (
              <NavButton
                key={item}
                text={item}
                isActive={activeTab === item}
                onClick={setActiveTab}
              />
            ))}
          </nav>
        </div>
      </header>

      {/* MODIFICATION: The main content area now has its own white background and padding. */}
      <main className="bg-[url('/wall3.jpg')] bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-24">
        <div className="container mx-auto text-center">
          {activeTab === "Why Choose Us" && (
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-20">
                Why Choose Us
              </h2>
              {/* MODIFICATION: Applied grid and conditional margin-top for the staggered effect. */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {cardData.map((card, index) => (
                  <FeatureCard
                    key={card.title}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                    className={index % 2 !== 0 ? "lg:mt-16" : ""}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === "Mission & Vision" && (
            <div className="p-16 bg-gray-50 rounded-lg shadow-inner">
              <h2 className="text-3xl font-bold text-blue-600">
                Our Mission & Vision
              </h2>
              <p className="mt-4 text-gray-700">
                Content for Mission & Vision will be displayed here.
              </p>
            </div>
          )}
          {activeTab === "Our Strength" && (
            <div className="p-16 bg-gray-50 rounded-lg shadow-inner">
              <h2 className="text-3xl font-bold text-blue-600">Our Strength</h2>
              <p className="mt-4 text-gray-700">
                Content for Our Strength will be displayed here.
              </p>
            </div>
          )}
          {activeTab === "Our Products" && (
            <div className="p-16 bg-gray-50 rounded-lg shadow-inner">
              <h2 className="text-3xl font-bold text-blue-600">Our Products</h2>
              <p className="mt-4 text-gray-700">
                Content for Our Products will be displayed here.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default WhyChooseUsSection;
