import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="relative pb-20 md:pb-10 px-2 lg:px-8 text-gray-300 bg-gray-950 min-h-screen">
      <Navbar></Navbar>
      <div className="max-w-[1920px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;