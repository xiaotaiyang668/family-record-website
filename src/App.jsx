import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Plans from "./components/Plans.jsx";
import MessageBoard from "./components/MessageBoard.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Portfolio />
        <Plans />
        <MessageBoard />
      </main>
      <Footer />
    </>
  );
}
