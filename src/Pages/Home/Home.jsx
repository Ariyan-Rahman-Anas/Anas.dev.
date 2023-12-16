import me from "./../../assets/me.png"
import sign from "./../../assets/sign.png"
import fitness from "./../../assets/fitness.png"
import gfonts from "./../../assets/gfonts.png"
import { TbArrowLoopRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="text-gray-100 w-full bg-[#0f0f0f] px-2 lg:px-8 ">
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:h-[25rem] w-full py-10   ">
          <div className="left flex flex-col md:flex-row items-center justify-center gap-6 flex-1 bg-teal-950 rounded-lg p-10 h-[100%] ">
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
          <div className="right flex-1 h-[100%] flex flex-col gap-8 ">
            <div className="upper h-[20%] bg-teal-950 rounded-lg ">
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
              <div className="div-1 group relative flex-1 bg-teal-950 rounded-lg h-full p-5 ">
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
              <div className="div-2 group relative flex-1 bg-teal-950 rounded-lg h-full p-5 ">
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
          <div className="div-1 col-span-1 group relative flex-1 bg-teal-950 rounded-lg h-full p-5 ">
            <img src={gfonts} alt="" className="w-full " />
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
          <div className="div-2 col-span-2 group relative flex-1 bg-teal-950 rounded-lg h-full p-5 ">
            <img src={gfonts} alt="" className="w-full " />
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
          <div className="div-3 col-span-1 group relative flex-1 bg-teal-950 rounded-lg h-full p-5 ">
            <img src={sign} alt="" className="w-full " />
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
          <div className="div-4 col-span-2 lg:hidden"></div>
        </section>
      </div>
    );
};

export default Home;