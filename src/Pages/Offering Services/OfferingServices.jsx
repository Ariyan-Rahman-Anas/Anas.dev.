import meAI from "./myAI.jfif";
import PageTitle from "../../Components/PageTitle";
import arrow from "./../../assets/arrow.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import MySocials from "./../../Components/MySocials";
import DownloadMyResume from "./../../Components/DownloadMyResume";

const OfferingServices = () => {
  return (
    <div className="h-[160rem]  md:h-[100rem] ">
      <div className="md:relative mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="left md:fixed top-24 let-0  w-full col-span-2 md:col-span-1 ">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="left p-8 w-full md:w-[30%] col-span-2 md:col-span-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
          >
            <img src={meAI} alt="" className="rounded-lg w-full " />
          </div>
        </div>

        {/* right section is starts from here */}
        <div className="right md:absolute right-0 w-full md:w-[66%] col-span-2 ">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="right col-span-2 flex flex-col gap-5  "
          >
            <PageTitle title={"OFFERING SERVICES"}></PageTitle>
            <div className="down px-8 pb-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg text-sm ">
              <img src={arrow} alt="an arrow" />
              <h1 className="text-4xl font-semibold mt-5">
                Welcome to my Credentials Showcase!
              </h1>
              <p className="mt-3 text-gray-400 text-base ">
                {`Welcome to my "MERN Stack Web Development Services" page! As a
                seasoned web developer, I specialize in crafting cutting-edge
                solutions using the powerful MERN stack – MongoDB, Express.js,
                React.js, and Node.js.`}
              </p>
              <p className="mt-3 text-gray-400 text-base ">{`With expertise in both frontend and backend development, I offer a comprehensive range of services to bring your digital ideas to life. Whether you're launching a new website, building a dynamic web application, or enhancing an existing platform, I have the skills and experience to deliver results that exceed your expectations.`}</p>
              <p className="mt-3 text-gray-400 text-base ">
                {`From concept to deployment, I work closely with clients to understand their unique requirements and provide tailored solutions that align with their business objectives. With a focus on scalability, performance, and user experience, I ensure that your MERN stack project is not only functional but also future-proof.`}{" "}
              </p>
              <p className="mt-3 text-gray-400 text-base ">
                {`Explore my MERN stack web development services below to see how I can help you transform your vision into reality. Feel free to reach out with any questions or project inquiries – I'm here to help you succeed online!`}
              </p>

              {/* social media and resume btn */}
              <div className="mdhidden mt-9 flex flex-col md:flex-row items-center justify-between gap-5 ">
                <MySocials
                  fb={<FaFacebookF></FaFacebookF>}
                  linkedin={<FaLinkedinIn></FaLinkedinIn>}
                  gh={<LuGithub></LuGithub>}
                ></MySocials>

                <DownloadMyResume></DownloadMyResume>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OfferingServices;
