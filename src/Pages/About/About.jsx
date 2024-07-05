import cover from "./../../assets/myCover.jpeg";
import arrow from "./../../assets/arrow.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import "./about.css";
import PageTitle from "../../Components/PageTitle";
import MySocials from "../../Components/MySocials";
import DownloadMyResume from "../../Components/DownloadMyResume";

const About = () => {
  return (
    <div>
      {/* top section starts from here */}
      <section
        id="media-and-top-info"
        className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Ariyan Rahman Anas's cover img */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="left p-6 w-full col-span-2 md:col-span-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
        >
          <img src={cover} alt="" className="rounded-lg" />
        </div>

        {/* Ariyan Rahman Anas's basic info */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="right col-span-2 flex flex-col gap-5  "
        >
          <PageTitle title={"SELF-SUMMARY"}></PageTitle>
          <div className="down px-8 pb-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg">
            <img src={arrow} alt="" />
            <h1 className="text-4xl font-semibold mt-5">Ariyan Rahman Anas</h1>
            <p className="mt-3 text-gray-400">
              I am a Bangladesh-based Front-End Web Developer with a focus on
              Back-End Development. I have a diverse range of experience having
              worked across various fields and industries.
            </p>

            {/* social media and resume btn */}
            <div className="md:hidden mt-12 flex flex-col md:flex-row items-center justify-between gap-5 ">
              <MySocials
                fb={<FaFacebookF></FaFacebookF>}
                linkedin={<FaLinkedinIn></FaLinkedinIn>}
                gh={<LuGithub></LuGithub>}
              ></MySocials>

              <DownloadMyResume></DownloadMyResume>
            </div>
          </div>
        </div>
      </section>
      {/* top section ends here */}

      {/* personal details section is starts from here */}
      <section className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-500">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="left text-xs 2xl:text-base px-2 py-5 md:p-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
        >
          {/* personal information */}
          <div>
            <h1 className="text-3xl font-semibold mb-6  ">
              Personal Information
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-between gap-2 rounded-lg p-4 bg-gradient-to-l from-teal-950 hover:bg-gradient-to-r hover:from-teal-950 to-gray-900 hover:to-gray-950 duration-500">
              <div className="left flex gap-1 ">
                <div className="title flex flex-col gap-2 ">
                  <p>First Name</p>
                  <p>Age</p>
                  <p>Phone</p>
                  <p>Skype</p>
                  <p>Address</p>
                </div>
                <div className="value flex flex-col gap-2 ">
                  <p className="font-semibold text-gray-100 ">
                    : Ariyan Rahman
                  </p>
                  <p className="font-semibold text-gray-100 ">: 23 years</p>
                  <p className="font-semibold text-gray-100 ">
                    : +88 01610-195968
                  </p>
                  <p className="font-semibold text-gray-100 ">: mr.anas</p>
                  <p className="font-semibold text-gray-100 ">
                    : Chattogram, Bangladesh
                  </p>
                </div>
              </div>
              <div className="right flex gap-1">
                <div className="title flex flex-col gap-2 ">
                  <p>Last Name</p>
                  <p>Freelance</p>
                  <p>Email</p>
                  <p>Languages</p>
                  <p>Nationality</p>
                </div>
                <div className="value flex flex-col gap-2 ">
                  <p className="font-semibold text-gray-100 ">: Anas</p>
                  <p className="font-semibold text-gray-100 ">: Available</p>
                  <p className="font-semibold text-gray-100 ">
                    : mohammadariyanrahmananas@gmail.com
                  </p>
                  <p className="font-semibold text-gray-100 ">
                    : Bengali, English, Urdu and Hindi
                  </p>
                  <p className="font-semibold text-gray-100 ">: Bangladeshi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ariyan Rahman Anas's basic info again here for medium to large devices */}
          <div className="social-icons-resume-download hidden mt-0 md:mt-12 mb-12 md:flex flex-col md:flex-row items-center justify-between gap-5 ">
            {/* <MySocials></MySocials> */}
            <MySocials
              fb={<FaFacebookF></FaFacebookF>}
              linkedin={<FaLinkedinIn></FaLinkedinIn>}
              gh={<LuGithub></LuGithub>}
            ></MySocials>

            <DownloadMyResume></DownloadMyResume>
          </div>
        </div>

        {/* educational information */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="right text-xs 2xl:text-base px-2 py-5 md:p-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
        >
          <h1 className="text-3xl font-semibold mb-5 ">
            Educational Qualifications
          </h1>
          <div className="flex flex-col gap-5">
            <div className="diploma flex flex-col items-start justify-start gap-1 rounded-lg p-4 bg-gradient-to-l from-teal-950 to-gray-900 hover:bg-gradient-to-r hover:from-teal-950 hover:to-gray-950 duration-500">
              <div>
                <h1 className="text-gray-100 font-light text-xl border-b-[.09rem] mb-3 ">
                  Diploma in Engineering
                </h1>
              </div>
              <div>
                <div className="flex gap-x-5">
                  <div className="key flex flex-col gap-2 ">
                    <p>Department</p>
                    <p>Institute</p>
                    <p>Duration</p>
                    <p>Year of Pass</p>
                  </div>
                  <div className="value flex flex-col gap-2">
                    <p className="font-semibold text-gray-100">
                      : Computer Science and Technology
                    </p>
                    <p className="font-semibold text-gray-100">
                      : Chattogram Polytechnic Institute
                    </p>
                    <p className="font-semibold text-gray-100">
                      : 4 Years, 8 Semester
                    </p>
                    <p className="font-semibold text-gray-100">: 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dakhil flex-col flex items-start justify-start gap-1 rounded-lg p-4 bg-gradient-to-l from-teal-950 hover:bg-gradient-to-r hover:from-teal-950 to-gray-900 hover:to-gray-950 duration-500">
              <div>
                <h1 className="text-gray-100 font-light text-xl border-b-[.09rem] mb-3 ">
                  Secondary School Certificate (SSC)
                </h1>
              </div>
              <div>
                <div className="flex gap-x-2 ">
                  <div className="key flex flex-col gap-2 ">
                    <p>Institute</p>
                    <p>Duration</p>
                    <p>Year of Pass</p>
                  </div>
                  <div className="value flex flex-col gap-2 ">
                    <p className="font-semibold text-gray-100">
                      : Baitush Sharaf Ideal kamil (M.A) Madrasah
                    </p>
                    <p className="font-semibold text-gray-100">
                      : 2 Years-4 Semester
                    </p>
                    <span className="font-semibold text-gray-100">: 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* personal details section is ends here */}

      {/* skills section is starts from here */}
      <section
        id="skills"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="my-10 p-5 text-gray-500 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
      >
        <h1 className="text-3xl font-semibold mb-6  ">My Skills</h1>
        <div className="all-skills grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaHtml5></FaHtml5>
            </h1>
            <p>HTML-5</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaCss3Alt></FaCss3Alt>
            </h1>
            <p>CSS-3</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaSass></FaSass>
            </h1>
            <p>SASS</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaBootstrap></FaBootstrap>
            </h1>
            <p>Bootstrap</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <SiTailwindcss></SiTailwindcss>
            </h1>
            <p>Tailwind</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <IoLogoJavascript></IoLogoJavascript>
            </h1>
            <p>JavaScript</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaReact></FaReact>
            </h1>
            <p>React.JS</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <IoLogoFirebase></IoLogoFirebase>
            </h1>
            <p>Firebase</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <FaNode></FaNode>
            </h1>
            <p>Node.JS</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <SiExpress></SiExpress>
            </h1>
            <p>Express.JS</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="aos-init aos-animate"
          >
            <h1>
              <BiLogoMongodb></BiLogoMongodb>
            </h1>
            <p>MongoDB</p>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
          >
            <h1>
              <FaGithub></FaGithub>
            </h1>
            <p>GitHub</p>
          </div>
        </div>
      </section>
      {/* skills section is ends here */}
    </div>
  );
};
export default About;
