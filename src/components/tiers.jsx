import exit from "../images/exit.webp";
import right_arrow from "../images/right_arrow.png";

const Tiers = () => {
  const logo_array = [
    {
      token: "$0.005/Token",
      text: "More information would be added here for more description",
    },
    {
      token: "$0.010/Token",
      text: "More information would be added here for more description",
    },
    {
      token: "$0.015/Token",
      text: "More information would be added here for more description",
    },
  ];
  return (
    <>
      <div className="fixed z-[10000000] overflow-hidden flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-[90%] gap-[1.4rem] md:gap-[3rem]">
        <img
          src={exit}
          alt="exit ham"
          className="fixed md:top-[5rem] top-[2rem]  left-[50%] translate-x-[-50%] w-[3rem] h-fit cursor-pointer"
        />
        <p className="text-white  modal-title md:text-[2rem] md:mt-0 mt-[2rem] ">
          Token tiers
        </p>

        {/* bottom tiers */}
        <div className="flex md:gap-[2.5rem] gap-[1rem] md:flex-row flex-col items-center justify-center ">
          {logo_array.map((e, index) => {
            return (
              <div
                key={index}
                className="bg-[#131313] gap-[1rem] rounded-[2rem] md:w-[26%] lg:w-[21%] w-[80%] md:rounded-[2rem] md:px-[2.4rem] md:py-[1.7rem] px-[2.5rem] py-[1rem] flex flex-col md:gap-[1.6rem]  items-center "
              >
                <p className="text-white modal-title text-opacity-[30%] md:text-[1.2rem] text-[0.8rem] ">
                  {" "}
                  Teir {index + 1}
                </p>
                <div className="flex flex-col  gap-[0.5rem]">
                  <p className="modal-title md:text-[1.5rem] text-[1rem] text-center text-white">
                    {e.token}
                  </p>
                  <p className="modal-title md:text-[1rem] text-[0.8rem] text-center text-opacity-[40%] text-white">
                    {e.text}
                  </p>
                </div>
                <button
                  key={index}
                  className={` bg-[#272DE6] border modal-title  border-[#272DE6] hover:border-[white] transition duration-[0.4s] flex justify-center hover:bg-black md:gap-[0.6rem] items-center md:rounded-[2rem] text-[0.8rem]  md:text-[1rem] gap-[0.5rem] px-[0.7rem] py-[0.3rem] rounded-[2rem] md:px-[0.9rem] md:py-[0.4rem] text-white`}
                >
                  Buy tokens
                  <div className=" rounded-[100%] w-[2rem] h-[2rem] flex justify-center  items-center bg-white md:w-[2rem] md:h-[2rem]">
                    <img
                      src={right_arrow}
                      alt=""
                      className="h-fit w-[50%] md:w-[70%] "
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tiers;
