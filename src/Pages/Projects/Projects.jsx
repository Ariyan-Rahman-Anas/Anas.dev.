import PageTitle from "../../Components/PageTitle";
import { useEffect, useState } from "react";
import { getData } from "../../Hooks/apiUtils";
import Spinner from "../../Components/Spinner";
import ProjectCard from "../../Components/ProjectCard";

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const responseData = await getData("projects")
        setProjects(responseData.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])
  
  const mainProjects = projects?.filter((project) => project.aside === false);
  const asideProjects = projects?.filter((project) => project?.aside === true);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 mt-12 ">
      <section className="left md:w-[30%] flex flex-col gap-8 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg p-4">
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div>
            {mainProjects?.map((project) => (
              <div
                key={project._id}
                className="bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="right md:w-[70%] flex flex-col gap-8 ">
        <div className="upper">
          <PageTitle title={"ALL PROJECTS"}></PageTitle>
        </div>
        <div className="bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg ">
          {loading ? (
            <Spinner />
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div>
              {mainProjects?.map((project) => (
                <div
                  key={project._id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg p-4"
                >
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