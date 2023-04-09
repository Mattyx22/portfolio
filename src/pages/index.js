import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import TopSection from "@/components/TopSection";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Marquee from "@/components/partials/Marquee";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mateusz Komar - webdeveloping</title>
        <meta
          name="description"
          content="A portfolio of webdeveloper - Mateusz Komar. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
        <NavBar title="Mateusz Komar" />
        <TopSection />
        <About />
        <Experience />
        <Work />
        <Contact/>
    </>
  );
}
