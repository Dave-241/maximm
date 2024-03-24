import white_arrow from "../images/white_arrow.webp";
import hero_bg from "../images/hero_bg.webp";
import progress from "../images/progress.webp";
import play from "../images/play.webp";
import { useEffect, useState } from "react";
import Tiers from "./tiers";
import Invest from "./invest";
const Hero_section = ({ setshow_invest }) => {
  const [start_animation, setstart_anitmation] = useState(false);
  const [show_tiers, setshow_tiers] = useState(false);

  useEffect(() => {
    setstart_anitmation(true);
  }, []);
  return (
    <>
      <div className=" w-full flex justify-between  flex-col md:flex-row md:gap-0 gap-[5rem]  md:px-[8%] mb-[7rem] px-[3%] ">
        <div className="flex pr-[4%]  w-full flex-col md:gap-[2rem] gap-[1.2rem]">
          <h1
            className={`text-white md:text-[4rem] text-[2.7rem] leading-[3.5rem] md:leading-[5rem] modal-title  ${
              start_animation ? " translate-y-0" : " translate-y-[5rem]"
            } `}
            style={{ transition: "1s ease" }}
          >
            Be a part of the <br /> future of finance
          </h1>
          <p
            className={`text-white modal-title  text-opacity-[40%] md:text-[1.2rem] text-[1rem]  ${
              start_animation ? " translate-y-0" : " translate-y-[5rem]"
            } `}
            style={{ transition: "1s ease" }}
          >
            Take your portfolio to the next level, invest <br /> in a secure and
            innovative technology
          </p>
          <div
            className={`flex md:gap-[2.5rem]  ${
              start_animation ? " translate-y-0" : " translate-y-[5rem]"
            }  modal-title gap-[2rem]  justify-start w-full `}
            style={{ transition: "1s ease" }}
          >
            <button
              className={` bg-[#272DE6]  transition duration-[0.6s] flex justify-center hover:bg-black md:gap-[0.6rem] items-center md:rounded-[2rem] gap-[0.5rem] md:text-[1.2rem] px-[1rem] py-[0.5rem] rounded-[2rem] md:px-0 md:py-[0.7rem] border border-[#272DE6] hover:border-white text-white`}
              onClick={() => {
                setshow_invest(true);
              }}
            >
              Invest now
              <img
                src={white_arrow}
                alt=""
                className="h-fit w-[1.5rem] md:w-[20%] "
              />
            </button>
            <button
              className={` hover:bg-[#272DE6]  transition duration-[0.6s] flex justify-center  md:gap-[0.6rem] items-center md:rounded-[2rem] gap-[0.5rem] md:text-[1.2rem] px-[1rem] py-[0.7rem] rounded-[2rem] md:px-0 md:py-[0.7rem] border hover:border-[#272DE6] border-white border-opacity-[60%] text-white`}
            >
              Play video
              <img src={play} alt="" className="h-fit w-[1.5rem] md:w-[20%] " />
            </button>
          </div>
        </div>

        {/* second section */}
        <div className=" w-full h-fit flex justify-end relative">
          <img
            src={hero_bg}
            alt="hero image"
            className={`  ${
              start_animation ? " rotate-0" : " rotate-[70deg]"
            } md:w-[80%] w-[90%] md:h-[25rem] h-[20rem] `}
            style={{ transition: "1s ease" }}
          />
          <div
            className={` ${
              start_animation ? " rotate-0" : " rotate-[-70deg]"
            } md:w-[80%] border border-opacity-[60%] border-white  rounded-[1.5rem]  md:h-[25rem] h-[20rem]  absolute top-[10%] right-[10%] flex flex-col overflow-hidden`}
            style={{ transition: "1s ease" }}
          >
            <div className="w-full h-[20%] bg-white bg-opacity-[4%] backdrop-blur-xl flex justify-center flex-col  items-center">
              <h3 className="text-white text-opacity-[50%] text-[0.9rem] md:text-[1.1rem]">
                PRIVATE SALE ROUNDS UP IN
              </h3>
            </div>
            <div className="h-[80%] px-[5%]   bg-black bg-opacity-[5%] backdrop-blur-xl flex justify-center flex-col  items-center w-full ">
              <img src={progress} alt="progress " className="w-full h-fit" />{" "}
              <div className="flex items-center  w-full  justify-between">
                <p className=" modal-title md:w-auto w-[50%] text-[#B784E7] md:text-[1.1rem]">
                  6 million left off 10 million tokens
                </p>

                <button
                  onClick={() => {
                    setshow_tiers(true);
                  }}
                  className={` bg-[#A4A7F2]  hover:text-white  transition duration-[0.6s] flex justify-center hover:bg-black md:gap-[0.6rem] items-center md:rounded-[1.5rem] gap-[0.5rem] md:text-[1rem] text-[0.8rem] px-[1rem] py-[0.5rem] rounded-[2rem] md:px-[1.5rem] md:py-[0.7rem] border border-[#A4A7F2] hover:border-white `}
                >
                  View tiers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {show_tiers && <Tiers setshow_tiers={setshow_tiers} />}
    </>
  );
};

export default Hero_section;
