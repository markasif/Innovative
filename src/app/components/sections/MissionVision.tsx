import React from "react";
import Image from "next/image";
import { title } from "process";




type InfoCardProps = {
  iconSrc: string;
  title: string;
};

const InfoCard = ({ iconSrc, title }: InfoCardProps) => (
  <div className="bg-[#FFFFFFF2] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-lg w-full max-w-sm">
    <Image src={iconSrc} alt={`${title} icon`} width={64} height={64} />
    <h3 className="flex-grow text-center text-3xl font-bold text-gray-800">{title}</h3>
  </div>
);

const DescriptionCard = ({ text }: { text: string; }) => (
  <div className="bg-[url('/wall5.jpg')] bg-no-repeat bg-center bg-cover backdrop-blur-md text-white rounded-2xl p-8 shadow-lg w-[500px] h-[250px] flex items-center">
    <p>{text}</p>
  </div>
);

const MissionVisionSection = () => {
  const missionText = "To deliver flawless, result-driven business solutions that put our clients' objectives ahead of their top rivals. We work hard to turn your ideas into reality by enhancing them and effectively putting them into practice.";
  const visionText = "As a privately held, globally dispersed organization, we function by tying together diverse locations and teams through shared business procedures, management techniques, cultures, and values.";
  
  return (
     <section className="py-20 px-4 bg-[url('/wall4.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto space-y-16">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">Mission & Vision</h2>
        
        <div className="flex justify-center gap-8 flex-wrap">
          <InfoCard iconSrc="/puzzle.gif" title="Mission" />
          <DescriptionCard text={missionText} />
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          <InfoCard iconSrc="/graph.gif" title="Vision" />
          <DescriptionCard text={visionText} />
        </div>
      </div>
    </section>
  );
}
export default MissionVisionSection;