import { useEffect, useState } from "react";
import exit from "../images/exit.webp";
import right_arrow from "../images/right_arrow.png";

const Invest = () => {
  const [start_animation, setstart_anitmation] = useState(false);

  useEffect(() => {
    setstart_anitmation(true);
  }, []);
  return (
    <>
      <div
        onClick={() => {
          //   setshow_tiers(false);
        }}
        className="fixed z-[10000000]  flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-[95%] gap-[1.4rem] md:gap-[3rem]"
      >
        <img
          src={exit}
          onClick={(e) => {
            e.stopPropagation(e);
            // setshow_tiers(false);
          }}
          alt="exit ham"
          className="fixed md:top-[5rem] top-[2rem]  left-[2rem] md:left-[50%] md:translate-x-[-50%] w-[3rem] h-fit cursor-pointer"
        />

        {/* bottom tiers */}
        <div
          className={` ${
            start_animation
              ? " translate-y-0 opacity-100"
              : " translate-y-[5rem] opacity-0"
          } flex md:gap-[2.5rem] gap-[1rem] md:flex-row flex-col items-center justify-center `}
          style={{ transition: "0.6s ease" }}
        ></div>
      </div>
    </>
  );
};

export default Invest;

// Get in on the ground floor
