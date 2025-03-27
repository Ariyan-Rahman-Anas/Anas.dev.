import meAI from "./myAI.jfif";
import PageTitle from "../../Components/PageTitle";
import { FaCode } from "react-icons/fa6";
import { LuDatabase, LuMonitorSmartphone } from "react-icons/lu";
import { IoGlobeOutline } from "react-icons/io5";
import arrow from "./../../assets/arrow.png";


const OfferingServices = () => {

  const services = [
    {
      icon: <FaCode size={40} />, title: "Full-Stack Web Development",
      description: "Building modern, scalable, and responsive web applications using latest technology."
    },
    {
      icon: <LuDatabase size={40} />, title: "Backend API Development",
      description: "Creating robust RESTful and GraphQL APIs with authentication, authorization, and database management."
    },
    {
      icon: <IoGlobeOutline size={40} />, title: "Custom Web Solutions",
      description: "Tailored web solutions to meet unique business needs, including CMS, e-commerce, and SaaS platforms."
    },
    {
      icon: <LuMonitorSmartphone size={40} />, title: "Responsive UI/UX Design",
      description: "Crafting visually appealing and user-friendly designs optimized for desktop, tablet, and mobile users."
    }
  ];

  return (
    <div className="my-2 text-gray-400 w-[95%] md:w-[90%] mx-auto md:h-[74vh] fle items-center justify-center">
      <div className="flex flex-col md:flex-row items-start justify-center gap-4">
        <section
          id="my-intro-section"
          className="w-full md:w-[33.4%] overflow-auto section-grant-left rounded-lg p-4 "
        >
          <img src={meAI}
            alt="Ariyan Rahman Anas"
            loading="lazy"
            className="rounded-lg w-full h-full" />
        </section>

        {/* right section is starts from here */}
        <section id="certificates-section"
          className="overflow-hidden w-full md:w-[66.4%]">
          <div
            className="right col-span-2 flex flex-col gap-5  "
          >
            <PageTitle title={"Offering Services"}></PageTitle>
            <div className="section-grant-left pl-0 duration-500 rounded-lg">
              <div className=" pt-0 p-4 md:p-6 md:pt-0 ">
                <div className="h-14 w-fit">
                  <img src={arrow} alt="down-arrow" className="w-full h-full" />
                </div>
                <div className="md:h-[43vh] rounded-lg mt-2 overflow-auto pr-2.5">
                  <p className="mt-1 tex text-base">
                    <span className="text-3xl">E</span>xplore the professional solutions I provide—cutting-edge development, seamless user experiences, and scalable web applications tailored to your needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 ">
                    {services.map(({ icon, title, description }, index) => (
                      <div key={index}>
                        <div className="px-2 py-4 section-grant-right flex flex-col items-center text-center rounded-2xl text-white">
                          <div className="mb-1 animate-bounce">{icon}</div>
                          <h3 className="text-xl font-semibold mb-2">{title}</h3>
                          <p className="text-gray-400 ">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default OfferingServices;
