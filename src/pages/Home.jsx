import React from "react";
import Spotlight from "../container/SpotLight";
import CuratedEssential from "../container/CuratedEssential";
import FactsSection from "../components/FactSection";
import SmartCare from "../container/SmartCare";
import Product from "../container/Product";
import FaqComponent from "../container/QuestionSection";
import TestimonialSlider from "../container/Testimonial";
import SubscribeSection from "../components/Subscribe";
import EmpoweringWomen from "../container/EmpoweringWomen";
import WhatsAppChatButton from "../components/WhatsAppChaButton";
import TravelKitSection from "../container/TravelKitSection";
import DemoProduct from "../container/DemoProduct";
function Home() {
  return (
    <div>
      <Spotlight />
      <CuratedEssential />
      <FactsSection description="Each of our hygiene care packs is thoughtfully curated with safe, skin-friendly, and high-quality products designed to support women’s health and comfort." />
      <TravelKitSection />
      <EmpoweringWomen />
      <SmartCare />
      <Product />
      {/* <DemoProduct/> */}
      <FactsSection
        description="From period essentials to soothing self-care items, every pack is a blend of practicality and pampering—perfect for daily use or special times when extra care is needed."
        isDark={true}
      />{" "}
      <FaqComponent />
      <FactsSection description="Each of our hygiene care packs is thoughtfully curated with safe, skin-friendly, and high-quality products designed to support women’s health and comfort." />
      {/* <TestimonialSlider/> */}
      <SubscribeSection />
      <WhatsAppChatButton />
    </div>
  );
}

export default Home;
