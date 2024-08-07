import { TbArrowLoopRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import myResume from "./../../../assets/my-resume.pdf";
import { LuFileDown } from "react-icons/lu";
import myDisplayPicture from "../../../assets/myDisplayPicture.png" 

export default function DisplayPicture() {
  return (
      <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="left relative group col-span-2 flex flex-col md:flex-row items-center justify-center gap-6  bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500  rounded-lg p-5 md:p-10 h-[100%]  "
      >
          <div className="img w-full md:w-[13rem] ">
              <img
                  src={myDisplayPicture}
                  alt=""
                  className="w-full   "
                  style={{ borderRadius: "1.2rem 0 1.2rem 0" }}
              />
          </div>
          <div className="info text-sm">
              <h1 className="text-gray-500 font-semibold">A WEB DEVELOPER</h1>
              <h2 className="text-4xl  md:text-5xl mt-1">Ariyan Rahman Anas.</h2>
              <p className="text-gray-500 mt-3 mb-5  ">
                  I am a Web Developer based in Chattogram, Bangladesh
              </p>
              <a
                  href={myResume}
                  download
                  className="w-fit flex items-center justify-between gap-2 py-2 px-4  bg-gradient-to-l from-teal-950 to-gray-950 hover:to-teal-600  rounded-md   hover:transform hover:scale-110 duration-500 "
              >
                  Download My Resume
                  <LuFileDown></LuFileDown>
              </a>
          </div>
          <div className="absolute right-5 bottom-5 ">
              <Link
                  to={"/about"}
                  className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl "
              >
                  <TbArrowLoopRight></TbArrowLoopRight>
              </Link>
          </div>
      </div>
  )
}