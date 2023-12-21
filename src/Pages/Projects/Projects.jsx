import fitness from "./../../assets/projects/fitness.png"
import jobCons from "./../../assets/projects/jobCons.png"
import DevAuto from "./../../assets/projects/DevAuto.png"
import g3Architect from "./../../assets/projects/g3Architect.png"
import fruitBrust from "./../../assets/projects/fruitBrust.png"
import teaHouse from "./../../assets/projects/teaHouse.png"

import { GiPolarStar } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
// import { LuGithub } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import hotGadget from "./../../assets/projects/hotGadget.png"
import penguinFashion from "./../../assets/projects/penguinFashion.png"
import influProduct from "./../../assets/projects/influProduct.png"
import justice from "./../../assets/projects/justice.png"
import bikerBD from "./../../assets/projects/bikerBD.png"
import { Link } from "react-router-dom"



const Projects = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 mt-12 ">
      <section className="left md:w-[30%] flex flex-col gap-8 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg p-5">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="div-1 relative group border- w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
        >
          <div>
            <img
              src={fitness}
              alt=""
              className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
            />
          </div>
          <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
            <a
              href=""
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-t from-teal-700 to-gray-800 rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-400 hover:to-gray-100 duration-500  "
            >
              {" "}
              <FaGithub></FaGithub> <span>Code Base</span>
            </a>
            <Link
              to={"https://assign12fitness.web.app/"}
              target="_blank"
              href=""
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-t from-teal-700 to-gray-800 rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-400 hover:to-gray-100 duration-500  "
            >
              {" "}
              <CgWebsite></CgWebsite> <span>Explore</span>
            </Link>
          </div>
          <div className="z-10 text-xs bg-[#0f0f0f] bg-opacity-80 h-full flex items-center justify-center absolute bottom-0 invisible group-hover:visible duration-75">
            <div className="text-center">
              <h1 className="text-lg font-semibold ">Fitness Tracker</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing reprehenderit
                temporibus accusantium.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="div-2 relative group border2 w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
        >
          <div>
            <img
              src={DevAuto}
              alt=""
              className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
            />
          </div>
          <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
            <a
              href=""
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-t from-teal-700 to-gray-800 rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-400 hover:to-gray-100 duration-500  "
            >
              {" "}
              <FaGithub></FaGithub> <span>Code Base</span>
            </a>
            <Link
              to={"https://brand-shop-assign-10.web.app/"}
              target="_blank"
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-t from-teal-700 to-gray-800 rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-400 hover:to-gray-100 duration-500  "
            >
              {" "}
              <CgWebsite></CgWebsite> <span>Explore</span>
            </Link>
          </div>
          <div className="z-10 text-xs bg-[#0f0f0f] bg-opacity-80 h-full flex items-center justify-center absolute bottom-0 invisible group-hover:visible duration-75">
            <div className="text-center">
              <h1 className="text-lg font-semibold ">Dev's Automobile</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing reprehenderit
                temporibus accusantium.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="div-3 relative group border2 w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
        >
          <div>
            <img
              src={penguinFashion}
              alt=""
              className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
            />
          </div>
          <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
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
            <div className="text-center">
              <h1 className="text-lg font-semibold ">Penguin Fashion</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing reprehenderit
                temporibus accusantium.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="div-4 relative group border2 w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
        >
          <div>
            <img
              src={fruitBrust}
              alt=""
              className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
            />
          </div>
          <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
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
            <div className="text-center">
              <h1 className="text-lg font-semibold ">Fruit Brust</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing reprehenderit
                temporibus accusantium.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="right md:w-[70%] flex flex-col gap-8 ">
        <div className="upper">
          <div className="up flex items-center justify-center gap-1 text-3xl lg:text-6xl font-semibold ">
            <GiPolarStar className="text-teal-700 text-3xl lg:text-5xl "></GiPolarStar>
            <h1>ALL PROJECTS</h1>
            <GiPolarStar className="text-teal-700 text-3xl lg:text-5xl "></GiPolarStar>
          </div>
        </div>
        <div className="down grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg p-5">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="div-1 relative group border- w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
          >
            <div>
              <img
                src={g3Architect}
                alt=""
                className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
              />
            </div>
            <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
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
              <div className="text-center">
                <h1 className="text-lg font-semibold ">G-3 Architect</h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  reprehenderit temporibus accusantium.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="div-2 relative group border- w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
          >
            <div>
              <img
                src={jobCons}
                alt=""
                className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
              />
            </div>
            <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
              <a
                href=""
                className="flex items-center gap-1 px-3 py-1 bg-gradient-to-t from-teal-700 to-gray-800 rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-400 hover:to-gray-100 duration-500  "
              >
                {" "}
                <FaGithub></FaGithub> <span>Code Base</span>
              </a>
              <Link
                to={"https://assignmnet-11.web.app/"}
                target="_blank"
                className="flex items-center gap-1 px-3 py-1 bg-gradient-to-t from-teal-700 to-gray-800 rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-400 hover:to-gray-100 duration-500  "
              >
                {" "}
                <CgWebsite></CgWebsite> <span>Explore</span>
              </Link>
            </div>
            <div className="z-10 text-xs bg-[#0f0f0f] bg-opacity-80 h-full flex items-center justify-center absolute bottom-0 invisible group-hover:visible duration-75">
              <div className="text-center">
                <h1 className="text-lg font-semibold ">Job Construction</h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  reprehenderit temporibus accusantium.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="div-3 relative group border- w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
          >
            <div>
              <img
                src={hotGadget}
                alt=""
                className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
              />
            </div>
            <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
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
              <div className="text-center">
                <h1 className="text-lg font-semibold ">HotGadgets</h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  reprehenderit temporibus accusantium.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="div-4 relative group border2 w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
          >
            <div>
              <img
                src={influProduct}
                alt=""
                className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
              />
            </div>
            <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
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
              <div className="text-center">
                <h1 className="text-lg font-semibold ">Influencer Product</h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  reprehenderit temporibus accusantium.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="div-5 relative group border- w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
          >
            <div>
              <img
                src={teaHouse}
                alt=""
                className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
              />
            </div>
            <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
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
              <div className="text-center">
                <h1 className="text-lg font-semibold ">Tea House</h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  reprehenderit temporibus accusantium.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="div-6 relative group border2 w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
          >
            <div>
              <img
                src={justice}
                alt=""
                className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
              />
            </div>
            <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
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
              <div className="text-center">
                <h1 className="text-lg font-semibold ">Justice</h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  reprehenderit temporibus accusantium.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="div-7 relative group border- w-full rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
          >
            <div>
              <img
                src={bikerBD}
                alt=""
                className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
              />
            </div>
            <div className="buttons z-50 absolute bottom-1.5 left-[8%] right-[8%] flex items-center justify-between text-sm font-semibold ">
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
              <div className="text-center">
                <h1 className="text-lg font-semibold ">BikerBD</h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  reprehenderit temporibus accusantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
