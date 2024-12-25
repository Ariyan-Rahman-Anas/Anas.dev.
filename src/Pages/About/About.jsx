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
import {
  SiRedux,
  SiNextdotjs,
  SiMongoose,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiExpress
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import "./about.css";
import PageTitle from "../../Components/PageTitle";
import MySocials from "../../Components/MySocials";
import DownloadMyResume from "../../Components/DownloadMyResume";

const About = () => {

  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
    },
    {
      icon: <FaSass />,
      title: "Sass",
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind",
    },
    {
      icon: <IoLogoJavascript />,
      title: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next",
    },
    {
      icon: <SiRedux />,
      title: "Redux",
    },
    {
      icon: <FaNode />,
      title: "Node",
    },
    {
      icon: <SiExpress />,
      title: "Express",
    },
    {
      icon: <BiLogoMongodb />,
      title: "MongoDB",
    },
    {
      icon: <SiMongoose />,
      title: "Mongoose",
    },
    {
      icon: <IoLogoFirebase />,
      title: "Firebase",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
    },
    {
      icon: <SiPostman />,
      title: "Postman",
    },
  ];


  return (
    <div>
      {/* top section starts from here */}
      <section
        id="media-and-top-info"
        className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-4"
      >
        {/* Ariyan Rahman Anas's cover img */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="p-4 w-full col-span-2 md:col-span-1 section-grant-left rounded-lg"
        >
          <img src={cover} alt="Ariyan Rahman Anas" className="w-full h-full rounded-lg" />
        </div>

        {/* Ariyan Rahman Anas's basic info */}
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

      {/* personal details section is starts from here */}
      <section className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-200">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="section-grant-left text-sm p-4 space-y-4 rounded-lg"
        >
          {/* personal information */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">
              Personal Information
            </h1>

            <div className="rounded-lg p-4 section-grant-right">
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-2 w-[5rem]">
                  <p>Name</p>
                  <p>Age</p>
                  <p>Phone</p>
                  <p>Email</p>
                </div>
                <div className="value flex flex-col gap-2 ">
                  <p className="font-semibold text-gray-100 ">
                    : Ariyan Rahman Anas
                  </p>
                  <p className="font-semibold text-gray-100 ">: 24 years</p>
                  <a href="tel:+8801610195968" className="font-semibold text-gray-100 ">
                    : +88 01610-195968
                  </a>

                  <a href="mailto:anas.hllw@gmail.com" className="font-semibold text-gray-100 ">
                    : anas.hllw@gmail.com
                  </a>
                </div>
              </div>
            </div>


            <div className="rounded-lg p-4 section-grant-right ">
              <div className="flex gap-6">
                <div className="title flex flex-col gap-2 w-[5rem] ">
                  <p>Freelance</p>
                  <p>Languages</p>
                  <p>Address</p>
                  <p>Nationality</p>
                </div>
                <div className="value flex flex-col gap-2 ">
                  <p className="font-semibold text-gray-100 ">: Available</p>
                  <p className="font-semibold text-gray-100 ">
                    : Bengali, English, and Hindi
                  </p>
                  <p className="font-semibold text-gray-100 ">
                    : Chattogram, Bangladesh
                  </p>
                  <p className="font-semibold text-gray-100 ">: Bangladeshi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ariyan Rahman Anas's basic info again here for medium to large devices */}
          <div className="social-icons-resume-download hidden mt-0 md:mt12 mb12 md:flex flex-col md:flex-row items-center justify-between gap-5 ">
            {/* <MySocials></MySocials> */}
            <MySocials
              fb={<FaFacebookF></FaFacebookF>}
              linkedin={<FaLinkedinIn></FaLinkedinIn>}
              gh={<LuGithub></LuGithub>}
            ></MySocials>

            <DownloadMyResume />
          </div>
        </div>

        {/* educational information */}
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="section-grant-left text-sm p-4 space-y-4 rounded-lg"
        >
          <h1 className="text-3xl font-semibold">
            Educational Qualifications
          </h1>
          <div className="section-grant-right flex flex-col items-start justify-start rounded-lg p-4">
                <h1 className="text-gray-100 font-light text-xl border-b-[.09rem] mb-3 ">
                  Diploma in Engineering
                </h1>
              <div>
                <div className="flex gap-6">
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
                <div className="flex items-center  gap-6 ">
                  <div className="key flex flex-col gap-2 ">
                    <p>Institute</p>
                    <p>Semester</p>
                    <p>Duration</p>
                    <p>Year of Pass</p>
                  </div>
                  <div className="value flex flex-col gap-2 ">
                    <p className="font-semibold text-gray-100">
                      : Baitush Sharaf Ideal kamil (M.A) Madrasah
                    </p>
                    <p className="font-semibold text-gray-100">
                      : 4 Semester
                    </p>
                    <p className="font-semibold text-gray-100">
                      : 2 Years
                    </p>
                    <span className="font-semibold text-gray-100">: 2019</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* skills section is starts from here */}
      <section
        id="skills"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        className="section-grant-left my-4 p-4 text-gray-200 rounded-lg"
      >
        <h1 className="text-3xl font-semibold mb-6  ">My Skills</h1>
        <div className="all-skills grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {
            skills?.map((item, index) => <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
              className="aos-init aos-animate py-4 " >
              <h1>
                {item.icon}
              </h1>
              <p>{item.title} </p>
            </div>)
          }
        </div>
      </section>
    </div>
  );
};
export default About;