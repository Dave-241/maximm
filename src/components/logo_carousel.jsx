import logo_1 from "../images/logo_1.webp";
import logo_2 from "../images/logo_2.webp";
import logo_3 from "../images/logo_3.webp";
import logo_4 from "../images/logo_4.webp";
import logo_5 from "../images/logo_5.webp";
import logo_6 from "../images/logo_6.webp";
const Logo_carousel = () => {
  const logo_array = [
    {
      img: logo_1,
    },
    {
      img: logo_2,
    },
    {
      img: logo_3,
    },
    {
      img: logo_4,
    },
    {
      img: logo_5,
    },
    {
      img: logo_6,
    },
  ];
  return (
    <>
      <div className=" flex md:pt-[2rem]  flex-wrap md:mb-0  md:flex-nowrap items-center gap-[10%] md:gap-[3%]  justify-center ">
        {logo_array.map((e, index) => {
          return (
            <img
              src={e.img}
              key={index}
              alt="maxim text"
              className=" opacity-[40%] md:w-[11%] md:mb-[4rem] mb-[15%] w-[40%] h-fit"
            />
          );
        })}
      </div>
    </>
  );
};

export default Logo_carousel;
