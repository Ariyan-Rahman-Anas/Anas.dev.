import cover from "./../../assets/myCover.jpeg";
import arrow from "./../../assets/arrow.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

import PageTitle from "../../Components/PageTitle";
import MySocials from "../../Components/MySocials";
import DownloadMyResume from "../../Components/DownloadMyResume";
import MySkills from "./MySkills";
import EduWithPersonaInfo from "./EduWithPersonaInfo";
import MySpecialties from "./MySpecialties";
import Experiences from "./Experiences";

const About = () => {

  return (
    <div className="space-y-14 md:space-y-24 text-gray-400 w-[95%] md:w-[90%] mx-auto" >
      {/* top section starts from here */}
      <section
        id="media-and-top-info"
        className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-4  "
      >
        {/* cover img */}
        <div
          className="p-4 w-full col-span-2 md:col-span-1 rounded-lg bg-gradient-to-tl from-teal-950 to-white ">
          <img src={cover} alt="Ariyan Rahman Anas" loading="lazy" className="w-full h-full rounded-lg" />
        </div>

        {/* basic info */}
        <div
          className="col-span-2 flex flex-col justify-between gap-4 "
        >
          <PageTitle title={"SELF-SUMMARY"}></PageTitle>
          <div className="down px-8 pb-4 section-grant-left duration-500 rounded-lg">
            <img src={arrow} alt="name indicator" />
            <p className="mt-3 text-base ">
              I am a Bangladesh-based Full Stack Developer. I have a diverse range of experience having worked across various fields and industries.
            </p>
          </div>
        </div>
      </section>

    {/* video intro and specialties section */}
      <MySpecialties />

      {/* experience section */}
      <Experiences />

      {/* personal details section  */}
      <EduWithPersonaInfo />
    

      {/* skills section */}
      <MySkills />
    </div>
  );
};
export default About;