import DisplayPicture from "./components/DisplayPicture";
import ProjectsAndCredentials from "./components/ProjectsAndCredentials";
import Blogs from "./components/Blogs";
import Profiles from "./components/Profiles";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import WorkTogether from "./components/WorkTogether";

const Home = () => {
  return (
    <div>
      {/* 1st section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:h-[25rem] w-full py-10   ">
        <DisplayPicture />
        <ProjectsAndCredentials />
      </section>

      {/* 2nd section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 md:mt-0 ">
        <Services/>
        <Blogs/>
        <Profiles/>
      </section>

      {/* 3rd section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[15m] mt-10  ">
        <Experiences/>
        <WorkTogether/>
      </section>
    </div>
  );
};
export default Home;