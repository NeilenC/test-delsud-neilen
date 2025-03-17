import '@/styles/globals.css';
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800'], 
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  );
}
