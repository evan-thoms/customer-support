'use client'
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./page.module.css";
import ChatBot from './components/ChatBot.js';

export default function Home() {
  return (

    <>
      <Header />
      <main className="container m-auto">

        <section className="flex justify-center items-center bg-Cararra gap-10 h-screen">
          <article className="py-20">
            <div className="mb-6 ">
              <h1 className="text-6xl text-bold text-AquamarineBlue mb-4">Hello I am Verda</h1>
              <p className="text-ShadowGreen px-3">your personalized AI support bot</p>
            </div>
            <div className="flex">
              <input className="w-96 h-9 rounded" />
              <button className="bg-Masala px-6 py-2 rounded-r-lg">
                <img className="w-4 h-4" src="/Vector.svg" />
              </button>
            </div>
            <div className="h-20"></div>
          </article>
          <article className="py-20">
            <img className="h-96" src="/bot.svg" alt="Verda ChatBot SVG" />
          </article>
        </section>
        <Footer />
      </main >
    </>



  );
}
