import React from "react";
// internal
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import HeroBanner from "@components/hero-banner";
import Slider1 from "@components/slider-1";
import Slider2 from "@components/slider-2";
import Slider3 from "@components/slider-3";
import TrustSection from "@components/trust-section";
import StatsSection from "@components/stats-section";
import CTASection from "@components/cta-section";
import Footer from "@layout/footer";

export const metadata = {
  title: "Home - Harri Shop"
};

const HomeShop = () => {
  return (
    <Wrapper>
      <Header />
      <HeroBanner />
      <TrustSection />
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <StatsSection />
      <CTASection />
      <Footer />
    </Wrapper>
  );
};

export default HomeShop;