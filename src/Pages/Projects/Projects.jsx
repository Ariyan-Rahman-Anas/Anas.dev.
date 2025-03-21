import PageTitle from "../../Components/PageTitle";
import { useState } from "react";
import Spinner from "../../Components/Spinner";
import ProjectCard from "../../Components/ProjectCard";
import cover from "./../../assets/myCover.jpeg";
import arrow from "./../../assets/arrow.png";
import { TbFaceIdError } from "react-icons/tb";
import { useGetAllCategoriesQuery, useGetAllProjectsQuery } from "../../redux/features/projects/projectsApi";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Front-End");

  const { data: categoriesData, isLoading: isCategoriesLoading, error:categoryError } = useGetAllCategoriesQuery()
  const categories = categoriesData?.categories

  const { data: projectsData, isLoading: isProjectsLoading, error:projectError } = useGetAllProjectsQuery()
  const projects = projectsData?.projects

  if (isCategoriesLoading || isProjectsLoading) {
    <Spinner />
  }

  // Filter projects based on the active tab
  const filteredProjects = projects?.filter(
    (project) => project?.category === activeTab
  );

  return (
    <div className="mt-12 space-y-8 w-[95%] md:w-[90%] mx-auto">
      <section
        id="intro-section"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 "
      >
        {/* Cover image */}
        <div
          className="p-4 w-full col-span-2 md:col-span-1 section-grant-left rounded-lg"
        >
          <img
            src={cover}
            alt="Ariyan Rahman Anas"
            className="w-full h-full rounded-lg"
          />
        </div>

        {/* Basic info */}
        <div
          className="col-span-2 flex flex-col justify-between gap-4"
        >
          <PageTitle title={"All Projects"} />
          <div className="down px-8 pb-4 section-grant-left duration-500 rounded-lg">
            <img src={arrow} alt="name indicator" />
            <p className="mt-3 text-gray-400">
              I am a Bangladesh-based Full Stack Developer. I have a diverse
              range of experience having worked across various fields and
              industries.
            </p>
          </div>
        </div>
      </section>

      {
        categories && projects && <section id="projects-section"
          className="w-full flex flex-col gap-8"
        >
            {/* Tab Headers */}
            <div className="flex items-center relative">
              {categories?.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(category)}
                  className={`flex-1 text-center py-2 font-medium transition-colors duration-300 ${activeTab === category
                    ? "text-teal-500"
                    : "text-gray-300 hover:text-teal-500"
                    }`}
                >
                  {category}
                </button>
              ))}

              {/* Indicator for Active Tab */}
              <div
                className="absolute bottom-0 h-[2px] bg-teal-500 rounded-full transition-all duration-500"
                style={{
                  width: `${100 / categories.length}%`,
                  transform: `translateX(${categories.findIndex((cat) => cat === activeTab) * 100
                    }%)`,
                }}
              ></div>
            </div>

            {/* Tab Content */}
            <div className="relative mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {filteredProjects.map((project) => (
                <div
                  key={project?._id}
                  className="transition-opacity duration-500 opacity-100"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
        </section>
      }
      
      <section id="error-section">
        {
          (categoryError || projectError) && <div className="border-2 border-dashed rounded-lg border-gray-500 w-full md:w-fit mx-auto p-4 flex flex-col items-center justify-center ">
            <TbFaceIdError size={35} />
            <h1 className="font-bold text-2xl">Oops!</h1>
            <p className="mt-2 text-gray-500">Something went wrong while fetching data.</p>
            <p>Please try again later.</p>
          </div>
        }
      </section>
    </div>
  );
};
export default Projects;