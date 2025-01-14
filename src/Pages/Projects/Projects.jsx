import PageTitle from "../../Components/PageTitle";
import { useEffect, useState } from "react";
import { getData } from "../../Hooks/apiUtils";
import Spinner from "../../Components/Spinner";
import ProjectCard from "../../Components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetching all project
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

  //filtering all of projects for displaying issue
  const mainProjects = projects?.filter((project) => project.aside === false);
  const asideProjects = projects?.filter((project) => project?.aside === true);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 mt-12 ">
      <section
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="left md:w-[30%] bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg p-4"
      >
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="flex flex-col gap-4">
            {asideProjects?.map((project) => (
              <div
                key={project._id}
                className="bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </section>
      <section
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="right md:w-[70%] flex flex-col gap-8 "
      >
        <div className="upper">
          <PageTitle title={"ALL PROJECTS"}></PageTitle>
        </div>
        <div className="bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg p-4 ">
          {loading ? (
            <Spinner />
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mainProjects?.map((project) => (
                <div key={project._id} className="">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Projects;
