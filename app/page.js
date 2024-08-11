'use client'
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./page.module.css";
import ChatBot from './components/ChatBot.js';

export default function Home() {
  const [messageSent, setMessageSent] = useState(false);

  const handleMessageSend = () => {
    setMessageSent(true);
  };

  return (

     <>
      <Header />
      <main className="">
        <section className={`flex justify-center items-center bg-Cararra gap-10 h-screen ${messageSent ? "message-sent" : ""}`}>
          <article className={`py-20 ${messageSent ? "hidden" : ""}`}>
            <div className="mb-6">
              <h1 className="text-6xl text-bold text-AquamarineBlue mb-4">Hello I am Verda</h1>
              <p className="text-ShadowGreen px-3">your personalized AI support bot</p>
            </div>
            <div className="flex">
              <ChatBot onMessageSend={handleMessageSend} />
            </div>
            <div className="h-20"></div>
          </article>
          
          <article className={`py-20 ${messageSent ? "flex-grow transition-transform duration-500" : ""}`}>
            <img className={`h-96 ${messageSent ? "animate-fadeIn" : ""}`} src="/bot.svg" alt="Verda ChatBot SVG" />
          </article>
        </section>
        <Footer />
      </main>
    </>


  );
}
