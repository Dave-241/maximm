import { useEffect, useState } from "react";
import exit from "../images/exit.webp";
import right_arrow from "../images/right_arrow.png";
import dollar from "../images/dollar.webp";
import swap from "../images/swap.png";
import token from "../images/token.webp";

const Invest = ({ setshow_invest }) => {
  const [start_animation, setstart_anitmation] = useState(false);

  useEffect(() => {
    setstart_anitmation(true);
  }, []);

  const [send_eth, setsend_eth] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setshow_invest(false);
        }}
        className="fixed z-[10000000]  flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-[95%] gap-[1.4rem] md:gap-[3rem]"
      >
        <img
          src={exit}
          alt="exit ham"
          className="fixed md:top-[3rem] top-[2rem]  left-[2rem] md:left-[50%] md:translate-x-[-50%] w-[3rem] h-fit cursor-pointer"
        />

        {/* bottom tiers */}
        <div
          className={` ${
            start_animation
              ? " translate-y-0 opacity-100"
              : " translate-y-[5rem] opacity-0"
          } flex    bg-[#0A0A0A]  rounded-[1rem] overflow-hidden md:w-[40%] w-[90%] flex-col items-center justify-center `}
          style={{ transition: "0.6s ease" }}
          onClick={(e) => {
            e.stopPropagation(e);
          }}
        >
          {/* the first section  */}
          <div className="w-full  bg-opacity-[6%] bg-white py-[1.5rem]">
            <p className="modal-title text-white font-bold text-center md:text-[1.1rem]">
              Get in on the ground floor
            </p>
          </div>

          {/* second section */}
          <div className="modal-title  w-full  items-center flex flex-col md:gap-[1.5rem] gap-[1rem] py-[1.5rem]">
            <p className="text-white text-opacity-[45%] text-center md:text-[1rem]">
              Please input the amount you <br /> would like to invest
            </p>

            {/* the input box for investing and swapping */}
            <div className="w-full md:flex-row px-[5%] flex-col gap-[0.5rem] md:gap-[5%]  md:px-[3%] justify-center flex items-center">
              <div className="relative  md:w-[40%] md:h-[3.5rem] w-full h-[3.5rem] rounded-[1rem] overflow-hidden ">
                <input
                  type="number"
                  placeholder="What you invest"
                  className="w-full h-full bg-white text-white text-opacity-[80%] md:pl-[5%] md:pr-[30%] pl-[5%] pr-[20%] text-[0.8rem] bg-opacity-[4%]"
                />
                <img
                  src={dollar}
                  alt="What you invest"
                  className="absolute top-[50%] outline-none border-none  right-[0.5rem] md:w-[15%] w-[10%] translate-y-[-50%] md:right-[1rem]"
                />
              </div>

              <img src={swap} alt="" className="h-fit md:w-[8%] w-[15%]  " />
              <div className="relative  md:w-[40%] md:h-[3.5rem] w-full h-[3.5rem] rounded-[1rem] overflow-hidden ">
                <input
                  type="number"
                  placeholder="The maxim tokens you get"
                  className="w-full h-full bg-white  text-white text-opacity-[80%] md:pl-[5%] md:pr-[30%]  pl-[5%] pr-[20%] text-[0.8rem]  bg-opacity-[4%]"
                />
                <img
                  src={token}
                  alt="What you invest"
                  className="absolute top-[50%] outline-none border-none md:w-[15%] w-[10%] right-[0.5rem] translate-y-[-50%] right-[md:1rem]"
                />
              </div>
            </div>

            {/* check box question */}
            <div className="flex gap-[0.7rem]">
              <p className="text-white modal-title text-opacity-[45%] text-center md:text-[1rem]">
                You are going to send ETH
              </p>

              <button
                onClick={() => {
                  setsend_eth(!send_eth);
                }}
                className={`border ${
                  send_eth ? "bg-[#272DE6]" : ""
                }  border-opacity-[35%] border-white rounded-[0.3rem] w-[1.5rem] h-[1.5rem]`}
              ></button>
            </div>
            {/* invest button */}
            <button
              className={` bg-[#272DE6] border w-fit   border-[#272DE6] hover:border-[white] transition duration-[0.4s] flex justify-center    hover:bg-[#24232395] md:gap-[0.6rem] items-center md:rounded-[2rem] text-[0.8rem]  md:text-[1rem] gap-[0.5rem] px-[0.7rem] py-[0.4rem] rounded-[2rem]  md:py-[0.6rem] text-white`}
            >
              Invest now
              <div className=" rounded-[100%] w-[1.5rem] h-[1.5rem] flex justify-center  items-center bg-white ">
                <img src={right_arrow} alt="" className="h-fit w-[50%]  " />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invest;

// Get in on the ground floor
