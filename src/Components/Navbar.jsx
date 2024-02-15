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
        <div className="nav-center  ">
          <ul
            className={`flex flex-col md:flex-row items-center justify-start gap-5 md:gap-8 absolute md:static  ${
              menu ? "left-0 pt-[4rem] w-[70vw] h-[100vh] " : "-left-[35rem]"
            } bg-[#0f0f0f] text-gray-400 rounded-md duration-1000 z-10 `}
          >
            <li className="tex-white relative group">
              <NavLink to={"/"} className=" group-hover:text-white">
                Home
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/about"} className=" group-hover:text-white">
                About
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/projects"} className=" group-hover:text-white">
                Projects
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/contact"} className=" group-hover:text-white">
                Contact me
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
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
