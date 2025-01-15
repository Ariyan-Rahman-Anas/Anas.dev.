import PageTitle from "../../Components/PageTitle";
import { useEffect, useState } from "react";
import { getData } from "../../Hooks/apiUtils";
import Spinner from "../../Components/Spinner";
import ProjectCard from "../../Components/ProjectCard";
import cover from "./../../assets/myCover.jpeg";
import arrow from "./../../assets/arrow.png";
import { TbFaceIdError } from "react-icons/tb";

const Projects = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Front-End");

  // Fetching all projects
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("projects/all");
        setProjects(responseData?.projects);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fetching all categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await getData("projects/categories");
        setCategories(responseData?.categories);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Spinner />;
  // if (error) return <div>Error: {error.message}</div>;

  // Filter projects based on the active tab
  const filteredProjects = projects.filter(
    (project) => project?.category === activeTab
  );

  return (
    <div className="mt-12">
      <section
        id="media-and-top-info"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
      >
        {/* Cover image */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
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
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="col-span-2 flex flex-col justify-between gap-4"
        >
          <PageTitle title={"ALL-PROJECTS"} />
          <div className="down px-8 pb-4 section-grant-left duration-500 rounded-lg">
            <img src={arrow} alt="name indicator" />
            <h1 className="text-4xl font-semibold mt-5">
              Ariyan Rahman Anas
            </h1>
            <p className="mt-3 text-gray-300">
              I am a Bangladesh-based Full Stack Developer. I have a diverse
              range of experience having worked across various fields and
              industries.
            </p>
          </div>
        </div>
      </section>

      {
        categories && projects && <section
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="right w-full border2 flex flex-col gap-8"
        >
          <div className="w-full mt-10">
            {/* Tab Headers */}
            <div className="flex borderb border-gray-200 relative">
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
            <div className="relative mt-4 minh-screen grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {filteredProjects.map((project) => (
                <div
                  key={project?._id}
                  className="transition-opacity duration-500 opacity-100"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      
      {
        error && <div className="border-2 border-dashed rounded-lg border-gray-500 w-full md:w-fit mx-auto p-4 flex flex-col items-center justify-center ">
          <TbFaceIdError size={35}  />
          <h1 className="font-bold text-4xl">Oops!</h1>
          <p className="mt-4" >Something went wrong while fetching data.</p>
          <p>Please try again later.</p>
        </div>
      }

    </div>
  );
};

export default Projects;