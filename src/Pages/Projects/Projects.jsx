import fitness from "./../../assets/projects/fitness.png"

import { GiPolarStar } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
// import { LuGithub } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 ">
      <section className="left w-[30%] flex flex-col gap-8 ">
        <div className="div-1 relative group p6 w-full  col-span-2 md:col-span-1 rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 ">
          <div>
            <img
              src={fitness}
              alt=""
              className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
            />
          </div>
          <div className="buttons z-50 absolute bottom-1.5 left-[18%] right-[18%] flex items-center justify-between gap10 text-sm font-semibold ">
            <a
              href=""
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-t from-teal-700 to-gray-800 rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-400 hover:to-gray-100 duration-500  "
            >
              {" "}
              <FaGithub></FaGithub> <span>Code Base</span>
            </a>
            <a
              href=""
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-t from-teal-700 to-gray-800 rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-400 hover:to-gray-100 duration-500  "
            >
              {" "}
              <CgWebsite></CgWebsite> <span>Explore</span>
            </a>
          </div>
          <div className="z-10 text-xs bg-[#0f0f0f] bg-opacity-80 h-full flex items-center justify-center absolute bottom-0 invisible group-hover:visible duration-75">
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              reprehenderit neque eius saepe est ducimus temporibus eos
              accusantium. Recusandae.
            </p>
          </div>
        </div>
        <div className="div-2 p-6 w-full  col-span-2 md:col-span-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"></div>
      </section>
      <section className="right w-[70%] flex flex-col gap-8 ">
        <div className="upper">
          <div className="up flex items-center justify-center gap-1 text-3xl lg:text-6xl font-semibold ">
            <GiPolarStar className="text-teal-500 text-3xl lg:text-5xl "></GiPolarStar>
            <h1>SELF-SUMMARY</h1>
            <GiPolarStar className="text-teal-500 text-3xl lg:text-5xl "></GiPolarStar>
          </div>
        </div>
        <div className="down flex flex-col md:flex-row"></div>
      </section>
    </div>
  );
};

export default Projects;
