import white_arrow from "../images/white_arrow.webp";
import play from "../images/play.webp";
const Hero_section = () => {
  return (
    <>
      <div className=" w-full flex justify-between  md:px-[8%] mb-[5rem] px-[4%]">
        <div className="flex flex-col md:gap-[2rem] gap-[1.2rem]">
          <h1 className="text-white md:text-[4rem] text-[2.7rem] leading-[3.5rem] md:leading-[5rem] modal-title ">
            Be a part of the <br /> future of finance
          </h1>
          <p className="text-white modal-title  text-opacity-[40%] md:text-[1.2rem] text-[1rem]">
            Take your portfolio to the next level, invest <br /> in a secure and
            innovative technology
          </p>
          <div className="flex md:gap-[2.5rem] modal-title  md:justify-start w-full justify-between">
            <button
              className={` bg-[#272DE6]  transition duration-[0.6s] flex justify-center hover:bg-black md:gap-[0.6rem] items-center md:rounded-[2rem] gap-[0.5rem] md:text-[1.2rem] px-[1rem] py-[0.5rem] rounded-[2rem] md:px-0 md:py-[0.7rem] border border-[#272DE6] hover:border-white text-white`}
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
      </div>
    </>
  );
};

export default Hero_section;
