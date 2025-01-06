import { IoMailOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import arrow from "./../../assets/arrow.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import MySocials from "../../Components/MySocials";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Function to clear form data
  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const form = useRef();

  //handling the sending message
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jd5nmtr",
        "template_uy9vdnn",
        form.current,
        "8c2USFOHOn4FPGrSX"
      )
      .then(
        (result) => {
          clearForm();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  

  return (
    <div className="mt-4">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="left w-full col-span-3 md:col-span-1 "
        >
          <div className="flex flex-col items-start w-full h-full justify-between gap-4 ">
            <div className="space-y-6 section-grant-left w-full p-4 rounded-lg ">
              <h1 className="text-3xl font-semibold text-gray-200 ">
                Contact Info
              </h1>
              <div className="flex flex-col gap-4 w-full   ">
                <div
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="center-bottom"
                  className="mail flex items-center gap-2 shadow hover:shadow-primary rounded-lg duration-500 "
                >
                  <div className="text-3xl px-5 py-3 section-grant-right rounded-l-lg">
                    <IoMailOutline></IoMailOutline>
                  </div>
                  <div>
                    <a href="mailto:anas.hllw@gmail.com" >anas.hllw@gmail.com</a>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="center-bottom"
                  className="number flex items-center gap-2 shadow hover:shadow-primary rounded-lg duration-500 "
                >
                  <div className="text-3xl px-5 py-3 section-grant-right rounded-l-lg">
                    <MdOutlineCall></MdOutlineCall>
                  </div>
                  <div>
                    <a href="tel:+8801610195968" >+88 01610-195968</a>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="center-bottom"
                  className="location flex items-center gap-2 shadow hover:shadow-primary rounded-lg duration-500"
                >
                  <div className="text-3xl px-5 py-3 section-grant-right rounded-l-lg">
                    <IoLocationOutline></IoLocationOutline>
                  </div>
                  <div>
                    <p>Khulshi, Chattogram, Bangladesh</p>
                  </div>
                </div>
              </div>
              </div>
            <div className="space-y-6 section-grant-left w-full p-4 rounded-lg ">
              <h1 className="text-3xl font-semibold text-gray-200 ">
                Social Info
              </h1>
              <div
                data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
                className="social"
              >
                <MySocials
                  fb={<FaFacebookF></FaFacebookF>}
                  linkedin={<FaLinkedinIn></FaLinkedinIn>}
                  gh={<LuGithub></LuGithub>}
                ></MySocials>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="right relative col-span-3 md:col-span-2 p-5 section-grant-left rounded-lg"
        >
          <div className="absolute right-5 top-0 ">
            <img src={arrow} alt="" />
          </div>
          <h1 className="text-5xl ">
            {`Let's Work`} <span className="text-teal-500  ">Together.</span>{" "}
          </h1>
          <div className="contact-form">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="flex flex-col gap-4 w-full mt-14 "
            >
              <input
                type="text"
                required
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-lg bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                placeholder="Name *"
              />

              <input
                type="email"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 rounded-lg bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                placeholder="Email *"
              />

              <input
                type="text"
                required
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="p-3 rounded-lg bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                placeholder="Your Subject *"
              />

              <textarea
                name="message"
                placeholder="Your Message *"
                required
                cols="30"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600"
              ></textarea>

              <input
                type="submit"
                value="Send Message"
                className="w-full p-3 rounded-lg bg-gradient-to-l from-teal-700 to-gray-900 hover:to-gray-700 focus:outline-none cursor-pointer "
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;