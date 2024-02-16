import PageTitle from "../../Components/PageTitle";
import me2 from "./../../assets/me3.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub} from "react-icons/lu";
import arrow from "./../../assets/arrow.png";
import MySocials from "../../Components/MySocials";
import DownloadMyResume from "../../Components/DownloadMyResume";

const Credentials = () => {
  return (
    <div>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="left w-full col-span-2 md:col-span-1 ">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="left p-8 w-full  col-span-2 md:col-span-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
          >
            <img src={me2} alt="" className="rounded-lg" />
          </div>
        </div>

        {/* right section is starts from here */}
        <div className="right w-full col-span-2 ">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
            className="right col-span-2 flex flex-col gap-5  "
          >
            {/* <PageTitle title={"SELF-SUMMARY"}></PageTitle> */}
            <PageTitle title={"MY-CREDENTIALS"}></PageTitle>
            <div className="down px-8 pb-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg">
              <img src={arrow} alt="" />
              <h1 className="text-4xl font-semibold mt-5">
                Welcome to my Credentials Showcase!
              </h1>
              <p className="mt-3 text-gray-400">
                Here, you will find a treasure trove of my educational
                achievements and professional successes. From degrees to
                certifications, each entry tells a story of my dedication to
                becoming the best in my field. Dive in and explore the colorful
                array of qualifications that highlight my skills and
                experiences. This is where my journey meets its milestones come,
                discover the essence of my expertise!
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
export default Credentials;