import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import AdminModal from "./../../Components/AdminModal";
import PageTitle from "../../Components/PageTitle";
import cover from "./../../assets/myCover.jpeg";
import MySocials from "../../Components/MySocials";
import DownloadMyResume from "../../Components/DownloadMyResume";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-black ">
      <AdminModal show={showModal} onClose={handleCloseModal} />
      {!showModal && (
        <div>
          <section
            id="media-and-top-info"
            className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-anchor-placement="center-bottom"
              className="left p-6 w-full col-span-2 md:col-span-1 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
            >
              <img src={cover} alt="" className="rounded-lg" />
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-anchor-placement="center-bottom"
              className="right col-span-2 flex flex-col gap-5  "
            >
              <PageTitle title={"Admin Dashboard"} />
              <div className="down px-8 pb-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg">
                <img src={"."} alt="" />
                <h1 className="text-4xl font-semibold mt-5">
                  Ariyan Rahman Anas
                </h1>
                <p className="mt-3 text-gray-400">
                  I am a Bangladesh-based Front-End Web Developer with a focus
                  on Back-End Development. I have a diverse range of experience
                  having worked across various fields and industries.
                </p>

                {/* social media and resume btn */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-5 ">
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
          {/* top section ends here */}

          <section className="my-10 flex flex-col  gap-8 text-gray-500">
            <div
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-anchor-placement="center-bottom"
              className="left flex-1 p-2 md:p-6  bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
            >
              <h1 className="text-3xl font-semibold mb-5 ">Add a Credential</h1>
              <div>
                <form className="">
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <input
                      name="title"
                      type="text"
                      required
                      placeholder="Title"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                    <input
                      name="degreeTitle"
                      required
                      placeholder="Degree"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <input
                      name="institute"
                      required
                      placeholder="Institute"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                    <input
                      name="instituteURL"
                      required
                      placeholder="Institute URL"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <input
                      name="description"
                      required
                      placeholder="Description:"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                    <input
                      name="cto"
                      required
                      placeholder="CTO:"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 mb-4">
                    <input
                      name="greeting"
                      required
                      placeholder="Greeting:"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                    <input
                      name="image"
                      required
                      // placeholder="Description:"
                      type="file"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className=" w-full p-3 text-lg rounded-md text-white font-semibold bg-gradient-to-l from-teal-700 to-gray-900 hover:to-gray-700 focus:outline-none cursor-pointer "
                  />
                </form>
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-anchor-placement="center-bottom"
              className="right flex-1  p-2 md:p-6  bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
            >
              <h1 className="text-3xl font-semibold mb-5 ">Add a Projects</h1>
              <div>
                <form className="">
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <input
                      name="title"
                      type="text"
                      required
                      placeholder="Title"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                    <input
                      name="details"
                      required
                      placeholder="Details"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <input
                      name="liveLink"
                      required
                      placeholder="Live Link:"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                    <input
                      name="frontCode"
                      required
                      placeholder="Front-End code base link:"
                      type="text"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 mb-4">
                    <input
                      name="backCode"
                      required
                      placeholder="Back-End code base link:"
                      type="text"
                      className="w-full p-2 rounded-lg bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                    <input
                      name="image"
                      required
                      type="file"
                      className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                    />
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className=" w-full p-3 text-lg rounded-md text-white font-semibold bg-gradient-to-l from-teal-700 to-gray-900 hover:to-gray-700 focus:outline-none cursor-pointer "
                  />
                </form>
              </div>
              {/* ... */}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Dashboard;