import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="relative pb-20 md:pb-10 px2 lg:px8 text-gray-300 bg-gradient-to-b from-teal-950 to-black min-h-screen">
      <Navbar></Navbar>
      <div className="max-w-[1920px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;