"use client";

import React from "react";
import HomeComponent from "../../components/Home/HomeComponent";
import SectionCardsComopnent from "../../components/SectionCards/SectionCardsComopnent";
import ButtonSection from "../../components/ButtonSection/ButtonSection";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import Footer from "../../components/Footer/Footer";

// export async function getStaticProps(context) {
//   return {
//     props: {
//       messages: (await import(`../../messages/${context.locale}.json`)).default
//     }
//   };
// }
const Home = () => {


  return (
    <div>
      <NavbarComponent />
      <HomeComponent />
      <SectionCardsComopnent />
      <ButtonSection />
      <Footer />
    </div>
  );
};

export default Home;
