import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiFiverr } from "react-icons/si";

export default function Profiles() {
  return (
      <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="div-3 py-10 group col-span-2 md:col-span-1 w-full group relative bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 "
      >
          <div
              className="mb-10 w-full flex items-center justify-between text-4xl p-4 rounded-lg "
              style={{
                  boxShadow: "1px 1px 3px #042f2e,-1px -1px 3px #042f2e ",
              }}
          >
              <Link to={"https://www.fiverr.com/m_ar_anas?up_rollout=true"} className="opacity-50 group-hover:opacity-80 bg-teal-900 p-3 rounded-full hover:bg-teal-700 duration-500  ">
                  <SiFiverr />
              </Link>
              <Link to={"https://www.linkedin.com/in/ariyanrahmananas/"} className="opacity-50 group-hover:opacity-80 bg-teal-900 p-3 rounded-full hover:bg-teal-700 duration-500  ">
                  <FaLinkedinIn />
              </Link>
          </div>
          <div className="absolute bottom-5 ">
              <h1 className="text-gray-500 font-semibold text-sm ">
                  STAY WITH ME
              </h1>
              <p className="text-2xl">Profiles</p>
          </div>
      </div>
  )
}