import React from "react";
import Header from "../../components/Home-layout/Header-layout/Header";
import Hero from "../../components/Home-layout/Hero-layout/Hero";
import Brand from "../../components/Home-layout/Brand-logo/Brand";
import NewArrival from "../../components/Home-layout/New-ariwal-clothes/new-ariwal";
import TopSellingClothes from "../../components/Home-layout/Top-selling-clothes/Top-selling-clothes";
import Dressstyle from "../../components/Home-layout/Dress-style/dress-style";
import RateCustomer from "../../components/Home-layout/Rate-custumer/Rate-customer";
import NewsLetter from "../../components/Home-layout/news-letter/News-letter";
import Footer from "../../components/Home-layout/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Brand />
      <NewArrival />
      <TopSellingClothes />
      <Dressstyle />
      <RateCustomer />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
