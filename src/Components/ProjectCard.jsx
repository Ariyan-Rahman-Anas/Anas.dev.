import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { title, details, image, liveLink, frontCode, backCode } =
    project || {};

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="div-1 relative group border- w-full border border-transparent hover:border-gray-400 h-full  rounded-lg overflow-hidden hover:transform hover:scale-110 duration-500 "
    >
      <div>
        <img
          src={image}
          alt=""
          className="rounded-lg group-hover:transform group-hover:scale-125 duration-500 "
        />
      </div>
      <div className="buttons z-50 absolute bottom-1.5 left-[4%] right-[4%] flex items-center justify-between text-sm font-semibold ">
        <Link
          to={frontCode}
          target="_blank"
          className="flex items-center gap-1 px-3 py-1 section-grant-left  rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-500 hover:to-gray-200 duration-500  "
        >
          {" "}
          <FaGithub /> <span>Client</span>
        </Link>
        <Link
          to={backCode}
          target="_blank"
          className="flex items-center gap-1 px-3 py-1 section-grant-left rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-500 hover:to-gray-200 duration-500  "
        >
          {" "}
          <FaGithub /> <span>Server </span>
        </Link>
        <Link
          to={liveLink}
          target="_blank"
          className="flex items-center gap-1 px-3 py-1 section-grant-left rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-500 hover:to-gray-200 duration-500  "
        >
          {" "}
          <CgWebsite /> <span>Explore</span>
        </Link>
      </div>
      <div className="z-10 text-xs bg-[#0f0f0f] bg-opacity-95 w-full h-full flex items-center justify-center absolute bottom-0 invisible group-hover:visible">
        <div className="text-center mb-8 ">
          <h1 className="text-lg font-semibold text-gray-100 ">{title}</h1>
          <p className="text-gray-200 px-2 ">{details}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;