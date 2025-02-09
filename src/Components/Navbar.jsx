import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { IoBriefcaseOutline } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    { title: "Home", link: "", icon: <AiOutlineHome /> },
    { title: "About", link: "about", icon: <TiInfoLarge /> },
    { title: "Projects", link: "projects", icon: <IoBriefcaseOutline />},
    { title: "Credentials", link: "credentials", icon: <TbCertificate /> },
    { title: "Contact", link: "contact", icon: <MdOutlinePhoneInTalk /> },
  ];

  return (
    <div className="sticky top-0 z-[1000] px-2 md:px-4 lg:px-8 bg-teal-950 ">
      <nav className="flex items-center justify-between text-gray-500 bggray-950 py-3">
        <Link
          to="/"
          id="nav-left"
          className="bg-gradient-to-r from-white via-teal-500 to-teal-600 text-transparent bg-clip-text group-hover:from-primary group-hover:via-primary group-hover:to-primary duration-1000"
        >
          <h1 className="text-3xl font-bold">{`<Anas/>.`}<span className="text-base">dev.</span> </h1>
        </Link>

        <ul
          id="nav-middle"
          className={`bg-gray-800 border border-primary md:border-none md:bg-transparent rounded-full w-[95%] mx-auto md:w-fit flex items-center justify-around md:justify-center py-2 gap-x-8 fixed bottom-[0.08rem] left-0 right-0 md:static duration-700 z-10`}
        >
          {navItems.map(({ title, icon, link }, index) => (
            <li key={index} className="text-black md:text-white text-sm group">
              <NavLink
                to={`/${link}`}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-primary md:border-b-white rounded-sm text-white font-medium duration-500 w-fit flex items-center gap-1 relative "
                    : "border-b-2 border-b-transparent text-gray-200 duration-500 flex items-center gap-1 relative "
                }
              >
                <span className="text-primary md:text-white text-2xl md:text-base">{icon}</span> <span className="hidden md:block">{title}</span>
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-primary md:bg-white transform scale-x-0 origin-bottom transition-transform md:group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          id="nav-right"
          to="/contact"
          className="btn"
        >
          {`Let's talk`}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;