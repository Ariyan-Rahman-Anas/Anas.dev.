import { Link, NavLink } from "react-router-dom";
import Logo from "./../assets/anas.png";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:items-center justify-between text-gray-500 bg-[#0f0f0f]  py-2 ">
        <div className="nav-left flex items-center justify-between w-full md:w-fit z-50 ">
          <Link to={"/"}>
            <div className="logo w-[12rem] ">
              <img src={Logo} alt="the developer's logo" className="w-full" />
            </div>
          </Link>
          <div className="menu-btn md:hidden flex items-center justify-between duration-1000 ">
            {menu ? (
              <p
                onClick={handleMenu}
                className="text-gray-300 text-4xl duration-1000 "
              >
                <RxCross2></RxCross2>
              </p>
            ) : (
              <p
                onClick={handleMenu}
                className="text-teal-500 text-4xl duration-1000 "
              >
                <IoMenuOutline></IoMenuOutline>
              </p>
            )}
          </div>
        </div>
        <div className="nav-center">
          <ul
            className={`flex flex-col md:flex-row items-center justify-start gap-y-5 absolute md:static  ${
              menu ? "left-0 pt-[4rem] w-[70vw] h-[100vh] " : "-left-[35rem]"
            } text-gray-300 bg-[#0f0f0f] rounded-md duration-1000 -4 px3 z-10 `}
          >
            <li>
              <NavLink
                to={"/"}
                className=" px-5 py-1 hover:text-gray-100 focus:text-gray-100 duration-500 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className=" px-5 py-1  hover:text-gray-100 focus:text-gray-100 duration-500"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                className=" px-5 py-1  hover:text-gray-100 focus:text-gray-100 duration-500"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className=" px-5 py-1  hover:text-gray-100 focus:text-gray-100 duration-500"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right hidden md:block ">
          <button>
            <Link
              to={"/contact"}
              className="py-2 px-4 text-gray-100 bg-gradient-to-t from-teal-600 to-gray-800 rounded-md flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500"
            >{`Let's talk`}</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
