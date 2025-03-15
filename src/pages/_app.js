import '@/styles/globals.css';
import { Nunito_Sans } from 'next/font/google';
import NavbarComponent from '../../components/Navbar/NavbarComponent';
import Footer from '../../components/Footer/Footer';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '800'], 
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={nunito.className}>
      <NavbarComponent/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
