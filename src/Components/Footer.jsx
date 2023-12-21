import { Link, NavLink } from "react-router-dom";
import Logo from "./../assets/anas.png"
const Footer = () => {
      const theDate = new Date()
  const currentYear = theDate.getFullYear()
    return (
        <footer className="bg-[#0f0f0f] pt-10 pb-2 flex flex-col items-center justify-center text-center text-gray-500  text-sm ">
          <div className="w-1/3 lg:w-1/4 ">
            <img src={Logo} alt="" className="w-full" />
          </div>
          <div className="nav-center">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-500 bg-[#0f0f0f] rounded-md duration-500 py-4 px-3 z-10">
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
          <div>
            <span>
              <span>{`Copy Right-${currentYear} ||`} </span>
              <span>
                ©All rights reserved by{" "}
                <Link className="text-teal-500">Ariyan Rahman Anas</Link>{" "}
              </span>
            </span>
          </div>
        </footer>
    );
};

export default Footer;