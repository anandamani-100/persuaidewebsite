import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeroBlue from "./components/hero-blue";
import Trust from "./components/trust";
import Features from "./components/features";
import Founder from "./components/founder";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      <Navbar />
      <HeroBlue />
  
      <Trust />
      <Features />
      <Founder />
      <Footer />
    </main>
  );
}
