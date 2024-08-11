'use client'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const fullText1 = "Hello I am Verda";
  const fullText2 = "your personalized AI support bot";

  useEffect(() => {
    let currentIndex1 = 0;

    const intervalId1 = setInterval(() => {
      setDisplayText1(fullText1.slice(0, currentIndex1 + 1));
      currentIndex1 += 1;

      if (currentIndex1 >= fullText1.length) {
        clearInterval(intervalId1);
        let currentIndex2 = 0;

        const intervalId2 = setInterval(() => {
          setDisplayText2(fullText2.slice(0, currentIndex2 + 1));
          currentIndex2 += 1;

          if (currentIndex2 >= fullText2.length) {
            clearInterval(intervalId2);
          }
        }, 100);
      }
    }, 100);

    return () => {
      clearInterval(intervalId1);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="">
        <section className="flex justify-center items-center bg-Cararra gap-10 h-screen">
          <article className="py-20 flex flex-col items-center w-1/2">
            <div className="mb-6 text-center">
              <h1 className="text-6xl font-bold text-AquamarineBlue mb-4">
                {displayText1}
              </h1>
              <p className="text-ShadowGreen px-3 text-2xl">{displayText2}</p>
            </div>
            <div className="flex mt-8">
              <Link
                href="/pages/signup"
                className="bg-Masala text-white px-32 py-4 rounded transform transition-transform duration-200 hover:scale-105"
              >
                Get Started
              </Link>
            </div>
            <div className="h-20"></div>
          </article>
          <article className="py-20 ml-5">
            <img className="h-[28rem]" src="/bot.svg" alt="Verda ChatBot SVG" />
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
}
