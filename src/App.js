import Hero_section from "./components/hero";
import Logo_carousel from "./components/logo_carousel";
import Nav from "./components/nav";
import Tiers from "./components/tiers";

function App() {
  return (
    <div className="w-full bg-gradient-to-r from-[#000000] to-[#050621]">
      <Nav />
      <div className="md:h-[15rem] h-[12rem] "></div>
      <Hero_section />
      <Logo_carousel />
    </div>
  );
}

export default App;
