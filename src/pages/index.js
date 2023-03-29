import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import TopSection from "@/components/TopSection";
import About from "@/components/About";
import About2 from "@/components/About2";
import Experience from "@/components/Experience";

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
      <main className={styles.main}>
        <NavBar title="Mateusz Komar" />
        <TopSection />
        <About />
        <Experience />
        <About2 />

      </main>
    </>
  );
}
