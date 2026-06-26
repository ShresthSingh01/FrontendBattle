import PageSpine from "./components/layout/PageSpine";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import NeuralEngine from "./components/sections/NeuralEngine";
import Statistics from "./components/sections/Statistics";
import ProductDemo from "./components/sections/ProductDemo";
import CaseStudies from "./components/sections/CaseStudies";
import ProductFeatures from "./components/sections/ProductFeatures";
import Performance from "./components/sections/Performance";
import Pricing from "./components/sections/Pricing";
import WhyUs from "./components/sections/WhyUs";
import Integrations from "./components/sections/Integrations";
import Articles from "./components/sections/Articles";
import Faq from "./components/sections/Faq";
import Footer from "./components/layout/Footer";
import { useReveal } from "./hooks/useReveal";

function App() {
  // Initialize scroll reveal observer
  useReveal();

  return (
    <div className="bg-oceanic-noir min-h-screen text-white font-sans selection:bg-forsythia selection:text-oceanic-noir">
      <PageSpine />
      <Header />
      <main className="relative z-10">
        <Hero />
        <NeuralEngine />
        <Statistics />
        <ProductDemo />
        <CaseStudies />
        <ProductFeatures />
        <Performance />
        <Pricing />
        <WhyUs />
        <Integrations />
        <Articles />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
