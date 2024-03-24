import { useState } from "react";
import Hero_section from "./components/hero";
import Invest from "./components/invest";
import Logo_carousel from "./components/logo_carousel";
import Nav from "./components/nav";

function App() {
  const [show_invest, setshow_invest] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-[#000000] to-[#050621]">
      <Nav setshow_invest={setshow_invest} />
      <div className="md:h-[15rem] h-[12rem] "></div>
      <Hero_section setshow_invest={setshow_invest} />
      <Logo_carousel />
      {show_invest && <Invest setshow_invest={setshow_invest} />}
    </div>
  );
}

export default App;
