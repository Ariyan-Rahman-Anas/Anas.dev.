import arrow from "./../../../assets/arrow.png";
import RoutingIndicator from "./RoutingIndicator";

export default function WorkTogether() {
  return (
      <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="section-grant-left group py-16 relative duration-500 rounded-lg"
      >
          <div className="ml-9 relative -top-16 ">
              <img src={arrow} alt="" />
          </div>
          <div className=" mt-20 absolute bottom-6 left-8 group  flex items-end justify-between">
              <h1 className="text-2xl md:text-4xl pt-10 text-gray-200 ">
                  {`Let's`} <br /> Work{" "}
                  <span className="text-primary font-semibold">Together.</span>
              </h1>
          </div>
          <RoutingIndicator navigateTo={"/contact"} />
      </div>
  )
}