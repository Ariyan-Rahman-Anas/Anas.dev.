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
    <div className="space-y-14 md:space-y-24" >
      {/* top section starts from here */}
      <section
        id="media-and-top-info"
        className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-4"
      >
        {/* cover img */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="p-4 w-full col-span-2 md:col-span-1 section-grant-left rounded-lg"
        >
          <img src={cover} alt="Ariyan Rahman Anas" loading="lazy" className="w-full h-full rounded-lg" />
        </div>

        {/* basic info */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="col-span-2 flex flex-col justify-between gap-4  "
        >
          <PageTitle title={"SELF-SUMMARY"}></PageTitle>
          <div className="down px-8 pb-4 section-grant-left duration-500 rounded-lg">
            <img src={arrow} alt="name indicator" />
            <h1 className="text-4xl font-semibold mt-5">Ariyan Rahman Anas</h1>
            <p className="mt-3 text-gray-300">
              I am a Bangladesh-based Full Stack Developer. I have a diverse range of experience having worked across various fields and industries.
            </p>

            {/* social media and resume btn */}
            <div className="md:hidden mt-12 flex flex-col md:flex-row items-center justify-between gap-5 ">
              <MySocials
                fb={<FaFacebookF></FaFacebookF>}
                linkedin={<FaLinkedinIn></FaLinkedinIn>}
                gh={<LuGithub></LuGithub>}
              ></MySocials>

              <DownloadMyResume />
            </div>
          </div>
        </div>
      </section>

    {/* video intro and specialties section */}
      <MySpecialties />

      {/* personal details section  */}
      <EduWithPersonaInfo />

      {/* experience section */}
      <Experiences />
    

      {/* skills section */}
      <MySkills />
    </div>
  );
};
export default About;