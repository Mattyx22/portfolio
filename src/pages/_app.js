import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-HW8DKGYFJE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-HW8DKGYFJE');
        `}
      </Script>
    <Component {...pageProps} />
    </>
  );
}
