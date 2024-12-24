import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { title: "Home", link: "" },
    { title: "About", link: "about" },
    { title: "Projects", link: "projects" },
    { title: "Contact", link: "contact" },
  ];

  const [menu, setMenu] = useState(false);

  const handleHidingMenu = () => {
    setMenu((prev) => !prev);
  };

  const menuClass = menu
    ? "left-0 top-[3.8rem] py-10 md:py-0 right-0 bg-black rounded-md w-full min-h-screen md:min-h-0"
    : "-left-[69rem]";

  return (
    <div className="sticky top-0 z-[1000]">
      <nav className="flex flex-col md:flex-row md:items-center justify-between text-gray-500 bg-gray-950 py-3">
        <div className="nav-left group flex items-center justify-between w-full md:w-fit z-50">
          <Link to="/" className="bg-gradient-to-r from-white via-teal-500 to-teal-600 text-transparent bg-clip-text group-hover:from-primary group-hover:via-primary group-hover:to-primary duration-1000 animate-bounce " >
            <h1 className="font-bruno text-3xl font-bold">Anas</h1>
          </Link>
          <div className="menu-btn md:hidden flex items-center">
            <button
              aria-label="Toggle Menu"
              onClick={handleHidingMenu}
              className="text-4xl duration-1000"
            >
              {menu ? (
                <RxCross2 className="text-gray-300" />
              ) : (
                <IoMenuOutline className="text-primary" />
              )}
            </button>
          </div>
        </div>

        <div className="nav-center">
          <ul
            className={`flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 absolute md:static ${menuClass} duration-700 z-10`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={handleHidingMenu}
                className="text-white relative group"
              >
                <NavLink
                  to={`/${item.link}`}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-b-white rounded-sm text-white font-medium duration-500"
                      : "border-b-2 border-b-transparent text-gray-200 duration-500"
                  }
                >
                  {item.title}
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-white transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right hidden md:block">
          <Link
            to="/contact"
            className="btn rounded-md text-gray-200 flex duration-500"
          >
            {`Let's talk`}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;