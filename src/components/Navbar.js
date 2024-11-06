import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
      href: "/about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 1,
      link: "experience",
    },
    {
      id: 1,
      link: "contact",
    },
  ];
  const [nav, setnav] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center bg-black text-white fixed w-full h-20 px-4">
        <div>
          <h1 className=" font-signature ml-2 text-5xl">Imran</h1>
        </div>
        <ul className="md:flex" hidden>
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 text-xl cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setnav(!nav)}
          className="  cursor-pointer pr-4 text-gray-400 z-10 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col md:hidden justify-center items-center absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-800 text-gray-400">
            {links.map(({ link, id, href }) => (
              <li
                key={id}
                className="px-4 text-3xl cursor-pointer capitalize font-medium py-6 text-gray-400 hover:scale-105 duration-200"
              >
                <Link
                  onClick={() => setnav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
