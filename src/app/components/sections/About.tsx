import React from "react";
import Image from "next/image";

interface InfoCardProps{
  icon : React.ReactNode;
  text : string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, text }) => (
  <div className=" flex items-center gap-3 bg-[#7541C8] text-white py-2 px-4 w-72">
    <div className="p-2 bg-[#CEFCFF] text-[#7541C8]">{icon}</div>
    <span className="flex-grow text-center text-sm font-medium font-poppins px-10">{text} </span>
  </div>
);
const AboutSection = () => {


  return (
    <div className="min-h-screen w-full bg-[url('/wall.jpg')] bg-cover bg-center bg-no-repeat p-4 sm:p-8 flex flex-col items-center justify-center font-sans">

      <header className="w-full max-w-5xl mb-12">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:justify-center gap-4">
          <InfoCard
            icon={
              <Image
                src={"/phone.png"}
                alt="Phone Icon"
                width={24}
                height={24}
                className="flex-1 w-full" 
              />
            }
            text="+91 7012 48 38 28"
          />
          <InfoCard
            icon={
              <Image
                src={"/email.png"}
                alt="Email Icon"
                width={24}
                height={24}
                className="flex-1 w-full" 
              />
            }
            text="info@gmail.com"
          />
          <InfoCard
            icon={
              <Image 
              src={"/time.png"} alt="Time Icon" width={24} height={24} className="flex-1 w-full"   />
            }
            text="9am - 6pm (Mon - Sat)"
          />
        </div>
      </header>
      <main className="w-full max-w-6xl">
        <div className="flex justify-center items-center">
          <div className=" bg-[#FFFFFF33]/20 text-center mb-12 w-[645px] h-[90px] flex flex-col justify-center items-center">
            <span className="text-[#0554F2] text-lg px-4">About ABC</span>
            <h1 className="text-3xl md:text-2xl font-bold text-[#323232] mt-2">
              Realize The Future Of Digital Intelligence
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full max-w-lg mx-auto h-[450px] sm:h-[500px]">
            <div className="absolute inset-6 rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/vr3.jpg"
                alt="Person in a VR headset"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="absolute top-10 left-[28px] sm:left-[40px] w-60 p-6 bg-[#7541C8F2] backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
              <h3 className="text-white text-2xl font-bold">
                Over 200+ Clients
              </h3>
            </div>

            <div className="absolute bottom-8 right-[28px] sm:right-[40px] w-60 p-6 bg-cyan-500/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
              <h3 className="text-white text-2xl font-bold">
                11 Years Experience in IT
              </h3>
            </div>
          </div>
          <div className="bg-[#FFFFFF33]/20 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-white/20 shadow-xl">
            <p className="text-white/95 leading-relaxed text-base md:text-lg">
              We are a team of professionals who assist companies in modernizing
              with innovative and attentive business development solutions to
              boost sales and revenue. We help you make the most of this digital
              era by providing sought-after business development solutions for
              all niches. We came together from various backgrounds with one
              vision: to bring a lean, user-centric approach to product
              innovation and software development by completely understanding
              the business needs before building anything.
            </p>

            <button className="mt-8 inline-block text-white font-semibold border-2 border-white rounded-lg px-6 py-2 transition-all hover:bg-white hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-white">
              More About Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutSection;
