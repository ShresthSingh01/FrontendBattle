import PageSpine from "./components/layout/PageSpine";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-forsythia selection:text-black">
      <PageSpine />
      <Header />
      <main className="relative z-10">
        <Hero />
        {/* Future sections will go here */}
      </main>
    </div>
  );
}

export default App;
