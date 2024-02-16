import me from "./../../assets/me.png";
import sign from "./../../assets/sign.png";
import fitness from "./../../assets/projects/fitness.png";
import gfonts from "./../../assets/gfonts.png";
import arrow from "./../../assets/arrow.png";
import { TbArrowLoopRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoCameraOutline, IoColorFilterOutline } from "react-icons/io5";
import { PiPencilCircle } from "react-icons/pi";
import { LiaDev } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { LuFileDown } from "react-icons/lu";
import myResume from "./../../assets/Ariyan-Rahman-Anas-Resume.pdf";

const Home = () => {
  return (
    <div>
      {/* 1st section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:h-[25rem] w-full py-10   ">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="left relative group col-span-2 flex flex-col md:flex-row items-center justify-center gap-6  bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500  rounded-lg p-5 md:p-10 h-[100%]  "
        >
          <div className="img w-full md:w-[13rem] ">
            <img
              src={me}
              alt=""
              className="w-full   "
              style={{ borderRadius: "1.2rem 0 1.2rem 0" }}
            />
          </div>
          <div className="info text-sm">
            <h1 className="text-gray-500 font-semibold">A WEB DESIGNER</h1>
            <h2 className="text-4xl  md:text-5xl mt-1">Ariyan Rahman Anas.</h2>
            <p className="text-gray-500 my-2  ">
              I am a Web Designer based in Chattogram, Bangladesh
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

        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
            <div className="div-1 group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full  p-5 ">
              <div className="mb-12 lg:mb-0 ">
                <img src={sign} alt="" className="w-2/3 mx-auto md:w-full" />
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
            </div>
            <div className="div-2 group relative flex-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 ">
              <div className="mb-16 lg:mb-0 ">
                <img
                  src={fitness}
                  alt=""
                  className="rounded-lg  w-2/ mx-auto md:w-full"
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
            </div>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-0 ">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="div-1 col-span-2 group relative bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 "
        >
          <div className="flex items-center justify-center gap-10 md:gap-20 text-4xl h-24 mb-12 ">
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
            <p className="text-2xl ">Offering Services</p>
          </div>
          <div className="absolute right-5 bottom-5 ">
            <Link
              to={"offeringServices"}
              className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl "
            >
              <TbArrowLoopRight></TbArrowLoopRight>
            </Link>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="div-2 col-span-2 md:col-span-1 w-full group relative bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 "
        >
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

        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="div-3 py-10  col-span-2 md:col-span-1 w-full group relative bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 "
        >
          <div
            className="mb-10 w-full flex items-center justify-between text-4xl p-4 rounded-lg "
            style={{
              boxShadow: "1px 1px 3px #042f2e,-1px -1px 3px #042f2e ",
            }}
          >
            <p className=" bg-teal-900 p-5 rounded-full hover:bg-teal-500 duration-500  ">
              <FaLinkedinIn></FaLinkedinIn>
            </p>
            <p className=" bg-teal-900 p-5 rounded-full hover:bg-teal-500 duration-500  ">
              <FaDribbble></FaDribbble>
            </p>
          </div>
          <div className="absolute bottom-5 ">
            <h1 className="text-gray-500 font-semibold text-sm ">
              STAY WITH ME
            </h1>
            <p className="text-2xl">Profiles</p>
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
      </section>

      {/* 3rd section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[15m] mt-10  ">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="left  p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
        >
          <div className="div-1 bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500 p-4">
            <h1 className="text-4xl font-semibold mb-5 text-gray-100 ">07 </h1>
            <p>YEARS</p>
            <p>EXPERIENCE</p>
          </div>
          <div className="div-2  bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-110 duration-500 p-4  ">
            <h1 className="text-4xl font-semibold mb-5 text-gray-100 ">+125</h1>
            <p>CLIENTS</p>
            <p>WORLDWIDE</p>
          </div>
          <div className="div-3  bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500 p-4 ">
            <h1 className="text-4xl font-semibold mb-5 text-gray-100 ">+210</h1>
            <p>TOTAL</p>
            <p>PROJECTS</p>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="right group py-16 relative bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
        >
          <div className="ml-10 relative -top-16 ">
            <img src={arrow} alt="" />
          </div>
          <div className=" mt-20 absolute bottom-5 left-8 group  flex items-end justify-between">
            <h1 className="text-3xl md:text-5xl pt-10 ">
              {`Let's`} <br /> Work{" "}
              <span className="text-teal-500">Together.</span>
            </h1>
          </div>
          <div className="absolute right-5 bottom-5">
            <Link
              to={"/contact"}
              className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl "
            >
              <TbArrowLoopRight></TbArrowLoopRight>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
