import { Link } from "react-router-dom";
import arrow from "./../../../assets/arrow.png";
import { TbArrowLoopRight } from "react-icons/tb";

export default function WorkTogether() {
  return (
      <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
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
  )
}