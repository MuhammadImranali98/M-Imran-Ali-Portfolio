import React from "react";
import logo1 from "../images/logo1.PNG";
import gbclogo from "../images/gbclogo.jpg";
import BAC from "../images/BAC.png";
import sky from "../images/sky.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: logo1,
      href: "https://www.haleemghar.com.pk/",
    },
    {
      id: 2,
      src: gbclogo,
      href: "https://greatbritaincars.co.uk/",
    },
    {
      id: 3,
      src: BAC,
      href: "https://britanniaairportcars.co.uk",
    },
    {
      id: 4,
      src: sky,
      href: " https://skybridgecars.com/",
    },
    //  {
    //   id:5,
    //   src:installNode,
    //   href:'https://www.haleemghar.com.pk/'
    // },
    // {
    //   id:6,
    //   src:installNode,
    //   href:'https://www.haleemghar.com.pk/'
    // },
  ];
  return (
    <div
      name="portfolio"
      className=" mx-auto w-full text-white bg-gradient-to-b md:h-full  from-black to-gray-800"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className="pb-2 sm:pb-8">
          <p className="sm:text-4xl text-2xl font-bold inline  border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check some of my work here</p>
        </div>
        <div className="  grid sm:gird-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className=" shadow-md shadow-gray-600  rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex  items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {" "}
                  <a target="_blank" rel="noreferrer" href={href}>
                    Demo{" "}
                  </a>{" "}
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
