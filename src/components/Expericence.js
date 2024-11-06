import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import nextjs from "../images/nextjs.png";
import bootstrap from "../images/bootstrap.svg";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: " shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: " shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: " shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: " shadow-blue-600",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-100",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: " shadow-purple-400",
    },
    {
      id: 7,
      src: github,
      title: "Git hub",
      style: " shadow-gray-600",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: " shadow-cyan-400",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white w-full">
        <div className=" sm:text-4xl text-2xl  font-bold border-b-4  border-gray-500 p-2 inline">
          <p>Expericence</p>
          <p className="sm:py-6 py-2 sm:text-2xl text-base ">
            These are the Technologies I have Worked on
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 sm:gap-8 gap-5 text-center sm:py-8 py-2 px-4 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style} `}
            >
              <img src={src} className="w-20 mx-auto" alt="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
