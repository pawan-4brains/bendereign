import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import styles from "@/styles/EventDetails.module.css";
import NavBar from "@/components/NavBar";

const raleway = Raleway({ subsets: ["latin"] });

export default function Signup() {
  return (
    <>
      <Head>
        <title>Events | Bendereign</title>
        <meta name="description" content="Bendereign" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={`${raleway.className}`}>
        <NavBar activeMenu={""} />
      </main>
    </>
  );
}
