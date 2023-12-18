import me from "./../../assets/me.png"
import sign from "./../../assets/sign.png"
import fitness from "./../../assets/fitness.png"
import gfonts from "./../../assets/gfonts.png"
import arrow from "./../../assets/arrow.png"
import { TbArrowLoopRight } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { IoCameraOutline } from "react-icons/io5";
import { PiPencilCircle } from "react-icons/pi";
import { IoColorFilterOutline } from "react-icons/io5";
import { LiaDev } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";

const Home = () => { 
    return (
      <div className="text-gray-100 w-fit bg-[#0f0f0f] px-2 lg:px-8 ">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:h-[25rem] w-full py-10   ">
          <div className="left col-span-2 flex flex-col md:flex-row items-center justify-center gap-6  bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500  rounded-lg p-10 h-[100%]  ">
            <div className="img w-full md:w-[12rem] ">
              <img
                src={me}
                alt=""
                className="w-full   "
                style={{ borderRadius: "1.5rem 0 1.5rem 0" }}
              />
            </div>
            <div className="info">
              <h1 className="text-gray-500 font-semibold text-sm ">
                A WEB DESIGNER
              </h1>
              <h2 className="text-4xl  md:text-5xl mt-1 mb-4 ">
                Ariyan Rahman Anas.
              </h2>
              <p className="text-gray-500 ">
                I am a Web Designer based in Chattogram, Bangladesh
              </p>
            </div>
          </div>
          <div className="right col-span-2 h-[100%] flex flex-col gap-8 ">
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
                  <span className="text-gray-100 font-semibold">
                    {" "}
                    FEATURED
                  </span>{" "}
                  *
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
              <div className="div-1 group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 ">
                <img src={sign} alt="" className="w-full " />
                <div className="absolute bottom-5 ">
                  <h1 className="text-gray-500 font-semibold text-sm ">
                    MORE ABOUT ME
                  </h1>
                  <p className="text-2xl">Credentials</p>
                </div>
                <div className="absolute right-5 bottom-5 ">
                  <Link className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl ">
                    <TbArrowLoopRight></TbArrowLoopRight>
                  </Link>
                </div>
              </div>
              <div className="div-2 group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 ">
                <img src={fitness} alt="" className="w-full" />
                <div className="absolute bottom-5 ">
                  <h1 className="text-gray-500 font-semibold text-sm ">
                    SHOWCASE
                  </h1>
                  <p className="text-2xl">Projects</p>
                </div>
                <div className="absolute bottom-5 right-5 ">
                  <Link className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl ">
                    <TbArrowLoopRight></TbArrowLoopRight>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="div-1 col-span-1 w-full group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 ">
            <img src={gfonts} alt="" className="w-full mb-16 " />
            <div className="absolute bottom-5 ">
              <h1 className="text-gray-500 font-semibold text-sm ">BLOGS</h1>
              <p className="text-2xl">GFonts</p>
            </div>
            <div className="absolute right-5 bottom-5 ">
              <Link className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl ">
                <TbArrowLoopRight></TbArrowLoopRight>
              </Link>
            </div>
          </div>
          <div className="div-2 hidden lg:block col-span-2 group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 ">
            <div className="flex items-center justify-center gap-20 text-4xl ">
              <p>
                <IoCameraOutline></IoCameraOutline>
              </p>
              <p>
                <PiPencilCircle></PiPencilCircle>
              </p>
              <p>
                <IoColorFilterOutline></IoColorFilterOutline>
              </p>
              <p>
                <LiaDev></LiaDev>
              </p>
            </div>
            <div className="absolute bottom-5 ">
              <h1 className="text-gray-500 font-semibold text-sm ">
                SPECIALIZATION
              </h1>
              <p className="text-2xl ">Service offering</p>
            </div>
            <div className="absolute right-5 bottom-5 ">
              <Link className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl ">
                <TbArrowLoopRight></TbArrowLoopRight>
              </Link>
            </div>
          </div>
          <div className="div-3 col-span-1 w-full group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 ">
            <div
              className="flex items-center justify-center gap-10 text-4xl p-4 rounded-lg "
              style={{
                boxShadow: "1px 1px 3px #042f2e,-1px -1px 3px #042f2e ",
              }}
            >
              <p className=" bg-teal-900 p-5 rounded-full hover:bg-teal-500 duration-500  ">
                <FiTwitter></FiTwitter>
              </p>
              <p className=" bg-teal-900 p-5 rounded-full hover:bg-teal-500 duration-500  ">
                <FaDribbble></FaDribbble>
              </p>
            </div>
            <div className="absolute bottom-5 ">
              <h1 className="text-gray-500 font-semibold text-sm ">
                BG STAY WITH ME
              </h1>
              <p className="text-2xl">Profiles</p>
            </div>
            <div className="absolute right-5 bottom-5 ">
              <Link className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl ">
                <TbArrowLoopRight></TbArrowLoopRight>
              </Link>
            </div>
          </div>
          <div className="div-4 lg:hidden placeholder: col-span-2 group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 ">
            <div className="flex items-center justify-center gap-20 text-4xl ">
              <p>
                <IoCameraOutline></IoCameraOutline>
              </p>
              <p>
                <PiPencilCircle></PiPencilCircle>
              </p>
              <p>
                <IoColorFilterOutline></IoColorFilterOutline>
              </p>
              <p>
                <LiaDev></LiaDev>
              </p>
            </div>
            <div className="absolute bottom-5 ">
              <h1 className="text-gray-500 font-semibold text-sm ">
                SPECIALIZATION
              </h1>
              <p className="text-2xl ">Service offering</p>
            </div>
            <div className="absolute right-5 bottom-5 ">
              <Link className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl ">
                <TbArrowLoopRight></TbArrowLoopRight>
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[15rem] mt-10  ">
          <div className="left  p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg ">
            <div className="div-1 bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500">
              <h1 className="text-4xl font-semibold mb-5 text-gray-100 ">
                07{" "}
              </h1>
              <p>YEARS</p>
              <p>EXPERIENCE</p>
            </div>
            <div className="div-2  bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-110 duration-500  ">
              <h1 className="text-4xl font-semibold mb-5 text-gray-100 ">
                +125
              </h1>
              <p>CLIENTS</p>
              <p>WORLDWIDE</p>
            </div>
            <div className="div-3  bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500">
              <h1 className="text-4xl font-semibold mb-5 text-gray-100 ">
                +210
              </h1>
              <p>TOTAL</p>
              <p>PROJECTS</p>
            </div>
          </div>
          <div className="right bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg">
            <div className="ml-10">
              <img src={arrow} alt="" />
            </div>
            <div className="ml-9 mr-5 group mt-6 flex items-end justify-between">
              <h1 className="text-5xl  ">
                {`Let's`} <br /> Work{" "}
                <span className="text-teal-500">Together.</span>
              </h1>
              <Link className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl ">
                <TbArrowLoopRight></TbArrowLoopRight>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
};
export default Home;