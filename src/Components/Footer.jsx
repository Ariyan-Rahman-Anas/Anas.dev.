import { Link } from "react-router-dom";
import Logo from "./../assets/anas.png";
const Footer = () => {
  const theDate = new Date();
  const currentYear = theDate.getFullYear();
  return (
    <footer className="bg-black pt-20 pb-4 flex flex-col items-center justify-center gap-2 text-center text-gray-400  text-sm ">
      <div className="w-1/3 lg:w-1/4 ">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-full" />
        </Link>
      </div>
      <div>
        <span>
          <span>{`Copy Right-${currentYear} ||`} </span>
          <span>
            ©All rights reserved by
            <Link to={"/"} > Ariyan Rahman Anas</Link>
          </span>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
