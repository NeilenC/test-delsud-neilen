import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import { ClientProvider } from "../../context/IsClientContext";
import '../commons/logo/logo.css'
import '../commons/cards-component/cardsComponent.css'
import '../commons/carousel-sponsors/carouselStyles.css'
import '../components/Sponsors/sponsorsStyles.css'
import '../commons/testimonial-card/testimonialCard.css'
import '../commons/testimonial-card/testimonialCard.css'
import '../commons/question-card/questionCard.css'
import '../commons/styled-button/styledButton.css'
import '../commons/styled-icon-button/iconButton.css'


import '../components/Navbar/navbarStyles.css'
import '../commons/menu-items/menuItemsStyles.css'
import '../components/Navbar/LanguagesOptions/languagesStyles.css'
import '../components/Navbar/LanguagesOptions/languagesStyles.css'
import '../components/Home/homeStyles.css'
import '../components/Questions/questionsStyles.css'
import '../components/SectionCards/sectionCardsStyles.css'
import '../components/Testimonials/testimonialsStyles.css'
import '../components/ButtonSection/buttonSectionStyles.css'
import '../components/Footer/footerStyles.css'



const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={nunito.className}>
      <ClientProvider>
        <Component {...pageProps} />
      </ClientProvider>
    </div>
  );
}
