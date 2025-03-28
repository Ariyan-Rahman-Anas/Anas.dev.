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
    <div className="my-2 text-gray-400 w-[95%] md:w-[90%] mx-auto space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div
          className="p-4 w-full col-span-3 md:col-span-1 rounded-lg bg-gradient-to-tr from-teal-950 to-white ">
          <img src={meAI} alt="Ariyan Rahman Anas" loading="lazy" className="w-full h-full rounded-lg" />
        </div>

        <div className="col-span-3 md:col-span-2 flex flex-col justify-between gap-4 ">
          <PageTitle title="Offering Services" />
          <div className="down px-8 pb-4 section-grant-left duration-500 rounded-lg">
            <img src={arrow} alt="name indicator" />
            <p className="mt-1 tex text-base">
              Explore the professional solutions I provide—cutting-edge development, seamless user experiences, and scalable web applications tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      <section id="certificates-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(({ icon, title, description }, index) => (
            <div key={index}>
              <div className="px-4 py-5 section-grant-right flex flex-col items-center text-center rounded-2xl text-white">
                <div className="mb-6 animate-bounce">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 ">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default OfferingServices;
