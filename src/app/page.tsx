
import AboutSection from "./components/sections/About";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import ServicesSection from "./components/sections/Service";
import WhyChooseUsSection from "./components/sections/WhyChoose";
import MissionVisionSection from "./components/sections/MissionVision";
import StrengthProductsSection from "./components/sections/StrengthProducts";
import CaseStudiesSection from "./components/sections/casestudySection";
import InstagramFeed from "./components/sections/InstagramFeed";
import TestimonialsSection from "./components/sections/testimonialSection";
import Footer from "./components/layout/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection/>
      <ServicesSection/>
      <WhyChooseUsSection/>
      <MissionVisionSection />
      <StrengthProductsSection />
      <CaseStudiesSection />
      <InstagramFeed />
      <TestimonialsSection/>
      <Footer/>
    </main>
  );
}