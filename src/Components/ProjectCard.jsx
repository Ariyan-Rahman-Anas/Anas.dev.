import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  const { name, details, image, liveLink, frontCode, backCode, frontTech, backTech } =
    project || {};

  return (
    <div
      className="relative group border-[0.02rem] w-full section-grant-left border-transparent hover:border-gray-200 h-full rounded-lg overflow-hidden duration-500 pb-16 "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full rounded-t-lg group-hover:transform group-hover:scale-125 duration-500 "
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
        {
          backCode && <Link
            to={backCode}
            target="_blank"
            className="flex items-center gap-1 px-3 py-1 section-grant-left rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-500 hover:to-gray-200 duration-500  "
          >
            {" "}
            <FaGithub /> <span>Server </span>
          </Link>
        }
        <Link
          to={liveLink}
          target="_blank"
          className="flex items-center gap-1 px-3 py-1 section-grant-left rounded-full hover:text-gray-900 hover:bg-gradient-to-t hover:from-teal-500 hover:to-gray-200 duration-500  "
        >
          {" "}
          <CgWebsite /> <span>Live Preview</span>
        </Link>
      </div>


      <div className="px-4">
        <h1 className="text-xl font-semibold text-gray-100 mt-2 ">{name}</h1>

        <div className="space-y-4 mt-2">
          <div className="flex items-start gap-3">
            <h3 className="font-semibold underline underline-offset-2 min-w-fit" >Client tech: </h3>
            <div className="flex items-center flex-wrap gap-2">
              {
                frontTech &&
                frontTech
                  .flatMap((item) => item.split(","))
                  .map((tech, index) => (
                    <p
                      key={index}
                      className="text-sm px-3 font-semibold py-1 section-grant-right rounded-md"
                    >
                      {tech.trim()}
                    </p>
                  ))
              }
            </div>
          </div>

          {
            backCode && backTech && <div className="flex items-start gap-3 ">
              <h3 className="font-semibold underline underline-offset-2 min-w-fit">Server tech: </h3>
              <div className="flex flex-wrap items-start gap-2 ">
                {
                  backTech &&
                  backTech
                    .flatMap((item) => item.split(","))
                    .map((tech, index) => (
                      <p
                        key={index}
                        className="text-sm px-3 font-semibold py-1 section-grant-right rounded-md"
                      >
                        {tech.trim()}
                      </p>
                    ))
                }
              </div>
            </div>
          }
        </div>
      </div>

      <div className="z-10 bg-[#0f0f0f] bg-opacity-95 w-full h-full flex items-center justify-center absolute bottom-0 invisible group-hover:visible">
        <div className="text-center px-2 ">
          <h1 className="text-2xl font-semibold text-gray-200 ">{name}</h1>
          <p className="text-gray-400 px-2 ">{details}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;