"use client";

import React from "react";
import HomeComponent from "../components/Home/HomeComponent";
import SectionCardsComopnent from "../components/SectionCards/SectionCardsComopnent";
import ButtonSection from "../components/ButtonSection/ButtonSection";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import QuestionsComponent from "../components/Questions/QuestionsComponent";
import Footer from "../components/Footer/Footer";
import TestimonialsComponent from "../components/Testimonials/TestimonialsComponent";
import Sponsors from "../components/Sponsors/Sponsors";

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
      <HomeComponent />
      <SectionCardsComopnent />
      <Sponsors/>
      <TestimonialsComponent/>
      <QuestionsComponent/>
      <ButtonSection />
      <Footer />
    </div>
  );
};

export default Home;
