import logo_1 from "../images/logo.png";
import right_arrow from "../images/right_arrow.png";

const Nav = () => {
  const links = [
    {
      text: "About",
      link: "/",
    },
    {
      text: "Story",
      link: "/",
    },
    {
      text: "Roadmap",
      link: "/",
    },
    {
      text: "Invest now",
      link: "/",
      blue: true,
    },
  ];
  return (
    <>
      <div className="w-full md:pt-[3rem] md:pb-[1.5rem] flex-col md:flex-row py-[1rem] gap-[0.7rem] px-[6%]  bg-transparent z-[10000] bg-opacity-[5%] backdrop-blur-xl   flex justify-between items-center fixed top-0 md:px-[8%]">
        <img
          src={logo_1}
          alt="maxim logo"
          className="md:w-[6rem] w-[8rem] h-fit"
        />

        <div className="flex items-center w-full md:w-fit  flex-wrap justify-between  md:justify-center  md:gap-[2rem]">
          {links.map((e, index) => {
            return (
              <>
                {e.blue ? (
                  <button
                    key={index}
                    className={` bg-[#272DE6] border modal-title  border-[#272DE6] hover:border-[white] transition duration-[0.4s] flex justify-center hover:bg-black md:gap-[0.6rem] items-center md:rounded-[2rem] text-[0.8rem]  md:text-[1rem] gap-[0.5rem] px-[0.6rem] py-[0.3rem] rounded-[2rem] md:px-[0.5rem] md:py-[0.3rem] text-white`}
                  >
                    {e.text}{" "}
                    <div className=" rounded-[100%] w-[1.5rem] h-[1.5rem] flex justify-center  items-center bg-white ">
                      <img
                        src={right_arrow}
                        alt=""
                        className="h-fit w-[50%]  "
                      />
                    </div>
                  </button>
                ) : (
                  <a
                    href={e.link}
                    key={index}
                    className={`hover:text-blue-600 modal-title  text-[0.8rem]  md:text-[1rem] text-white`}
                  >
                    {e.text}
                  </a>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nav;
