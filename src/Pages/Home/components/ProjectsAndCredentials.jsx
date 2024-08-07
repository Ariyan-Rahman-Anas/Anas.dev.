import { TbArrowLoopRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import credentials from "./../../../assets/allCredentials.png";
import projects from "./../../../assets/allProjects.png";

export default function ProjectsAndCredentials() {
  return (
      <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="right col-span-2 h-[100%] flex flex-col gap-8 "
      >
          <div className="upper h-[20%] bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg ">
              <marquee
                  behavior="scroll"
                  direction="middle"
                  vspace="3%"
                  hspace="3"
                  scrollamount="8"
              >
                  <p className="text-gray-500 text-sm ">
                      * LATEST WORK AND
                      <span className="text-gray-100 font-semibold"> FEATURED</span> *
                      <span>
                          {" "}
                          LATEST WORK AND * LATEST WORK AND
                          <span className="text-gray-100 font-semibold">
                              {" "}
                              FEATURED
                          </span>{" "}
                      </span>
                      <span>
                          * LATEST WORK AND
                          <span className="text-gray-100 font-semibold">
                              {" "}
                              FEATURED
                          </span>{" "}
                          *
                      </span>
                  </p>
              </marquee>
          </div>
          <div className="down flex flex-col md:flex-row items-center justify-between gap-8 h-[80%]  ">
              <Link to={"/credentials"} className="div-1 group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full  p-5 ">
                  <div className="mb-16 lg:mb-0 w-5/6 mx-auto ">
                      <img src={credentials} alt="credential's image" className="w-full h-full rounded-md opacity-60 group-hover:scale-110 group-hover:opacity-80 duration-500" />
                  </div>
                  <div className="absolute bottom-5 ">
                      <h1 className="text-gray-500 font-semibold text-sm ">
                          MORE ABOUT ME
                      </h1>
                      <p className="text-2xl">Credentials</p>
                  </div>
                  <div className="absolute right-5 bottom-5 ">
                      <Link
                          to={"/credentials"}
                          className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl "
                      >
                          <TbArrowLoopRight></TbArrowLoopRight>
                      </Link>
                  </div>
              </Link>

              <Link to={"/projects"} className="div-2 group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 ">
                  <div className="mb-16 lg:mb-0 w-5/6 mx-auto ">
                      <img
                          src={projects}
                          alt="projects's image"
                          className="w-full h-full rounded-md opacity-60 group-hover:scale-110 group-hover:opacity-80 duration-500 "
                      />
                  </div>
                  <div className="absolute bottom-5 ">
                      <h1 className="text-gray-500 font-semibold text-sm ">
                          SHOWCASE
                      </h1>
                      <p className="text-2xl">Projects</p>
                  </div>
                  <div className="absolute bottom-5 right-5 ">
                      <Link
                          to={"/projects"}
                          className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl "
                      >
                          <TbArrowLoopRight></TbArrowLoopRight>
                      </Link>
                  </div>
              </Link>
          </div>
      </div>
  )
}