import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./../assets/anas.png";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  const handleHidingMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className="sticky top-0 z-[1000]">
      <nav className="flex flex-col md:flex-row md:items-center justify-between text-gray-500 bg-black py-3 ">
        <div className="nav-left flex items-center justify-between w-full md:w-fit z-50 ">
          <Link to={"/"}>
            <div className="logo w-[12rem] ">
              <img src={Logo} alt="the developer's logo" className="w-full" />
            </div>
          </Link>
          <div className="menu-btn md:hidden flex items-center justify-between duration-1000 ">
            {menu ? (
              <p
                onClick={() => setMenu(!menu)}
                className="text-gray-300 text-4xl duration-1000 "
              >
                <RxCross2></RxCross2>
              </p>
            ) : (
              <p
                onClick={() => setMenu(!menu)}
                className="text-teal-500 text-4xl duration-1000 "
              >
                <IoMenuOutline></IoMenuOutline>
              </p>
            )}
          </div>
        </div>
        <div className="nav-center  ">
          <ul
            className={`flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 absolute md:static ${
              menu
                ? "left-0 top-[3.8rem] py-10 md:py-0 right-0 bg-black rounded-md w-full min-h-screen md:min-h-0 "
                : "-left-[69rem]"
            }  duration-700 z-10 `}
            // className={`flex flex-col md:flex-row items-center justify-start gap-5 md:gap-8 absolute md:static  ${
            //   menu
            //     ? "left-0 pt-[4rem] md:pt-0 w-full min-h-screen md:min-h-0 "
            //     : "-left-[35rem]"
            // } bg-[#0f0f0f] text-gray-400 rounded-md duration-1000 z-10 `}
          >
            <li onClick={handleHidingMenu} className="tex-white relative group">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/"
                    ? "border-b-2 border-b-white rounded-sm text-white duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >
                Home
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li onClick={handleHidingMenu} className="tex-white relative group">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/about"
                    ? "border-b-2 border-b-white rounded-sm text-white duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >
                About
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li onClick={handleHidingMenu} className="tex-white relative group">
              <NavLink
                to={"/projects"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/projects"
                    ? "border-b-2 border-b-white rounded-sm text-white duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >
                Projects
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li onClick={handleHidingMenu} className="tex-white relative group">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/contact"
                    ? "border-b-2 border-b-white rounded-sm text-white duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >
                Contact
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li onClick={handleHidingMenu} className="tex-white relative group">
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive && location.pathname === "/dashboard"
                    ? "border-b-2 border-b-white rounded-sm text-white duration-500 "
                    : "border-b-2 border-b-transparent duration-500 "
                }
              >Dashboard
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right hidden md:block ">
          <button>
            <Link
              to={"/contact"}
              className="py-2 px-4 font-semibold text-gray-100 bg-teal-700 hover:bg-teal-600 rounded-md flex flex-col items-center justify-center  duration-500"
            >{`Let's talk`}</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
