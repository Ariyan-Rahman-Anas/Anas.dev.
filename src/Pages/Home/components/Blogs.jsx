import { Link } from "react-router-dom";
import blogs from "./../../../assets/allProjects.png";
import { TbArrowLoopRight } from "react-icons/tb";

export default function Blogs() {
  return (
      <Link to={"/blogs"}
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="div-2 col-span-2 md:col-span-1 w-full group relative bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 "
      >
          <div className="mb-16 lg:mb-0 w-5/6 mx-auto">
              <img src={blogs} alt="blog's image" className="w-full h-full rounded-md opacity-60 group-hover:scale-110 group-hover:opacity-80 duration-500" />
          </div>
          <div className="absolute bottom-5 ">
              <h1 className="text-gray-500 font-semibold text-sm ">TECH TRENDS</h1>
              <p className="text-2xl">Blogs</p>
          </div>
          <div className="absolute right-5 bottom-5 ">
              <Link className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl ">
                  <TbArrowLoopRight></TbArrowLoopRight>
              </Link>
          </div>
      </Link>
  )
}