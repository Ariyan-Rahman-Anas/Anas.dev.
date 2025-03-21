import { IoMailOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
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

  const socials = [
    {
      icon: <LuGithub />,
      link: "https://github.com/Ariyan-Rahman-Anas",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/ariyanrahmananas69/",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/ariyanrahmananas/",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/+8801610195968",
    }
  ]

  return (
    <div className="flex items-center justify-center h-full min-h-[60vh] ">
      <div className="my-6 text-gray-400 w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <section className="w-full h-full section-grant-left rounded-lg flex-1 flex flex-col items-start justify-between gap-4 space-y-4 p-4">
          <div className="space-y-6 w-full ">
            <h1 style={{ textAlign: "left" }} className="heading">
              Contact Info
            </h1>
            <div className="flex flex-col gap-4 w-full   ">
              <a href="mailto:anas.hllw@gmail.com" className="mail flex items-center gap-2 shadow hover:shadow-primary rounded-lg duration-300 ">
                <div className="text-3xl px-5 py-2 section-grant-right rounded-l-lg">
                  <IoMailOutline></IoMailOutline>
                </div>
                <span>anas.hllw@gmail.com</span>
              </a>
              <a href="tel:+8801610195968" className="number flex items-center gap-2 shadow hover:shadow-primary rounded-lg duration-300 ">
                <div className="text-3xl px-5 py-2 section-grant-right rounded-l-lg">
                  <MdOutlineCall></MdOutlineCall>
                </div>
                <div>
                  <span>+88 01610-195968</span>
                </div>
              </a>
              <div className="location flex items-center gap-2 shadow hover:shadow-primary rounded-lg duration-300">
                <div className="text-3xl px-5 py-2 section-grant-right rounded-l-lg">
                  <IoLocationOutline></IoLocationOutline>
                </div>
                <div>
                  <p>Khulshi, Chattogram, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          <div className="social w-full ">
            <MySocials
              socialsArr={socials}
              fb={<FaFacebookF></FaFacebookF>}
              linkedin={<FaLinkedinIn></FaLinkedinIn>}
              gh={<LuGithub></LuGithub>}
            ></MySocials>
          </div>
        </section>

        <section className="relative flex-1 p-4 section-grant-left rounded-lg">
          <div className="absolute right-5 top-0 h-14 ">
            <img
              src={arrow}
              alt="down-arrow"
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <h1 style={{ textAlign: "left" }} className="heading ">
            {`Let's Work`} <span className="text-teal-500  ">Together.</span>{" "}
          </h1>
          <div className="contact-form">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="flex flex-col gap-4 w-full mt-6 "
            >
              <input
                type="text"
                required
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-input"
                placeholder="Name*"
              />

              <input
                type="email"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-input"
                placeholder="Email*"
              />

              <input
                type="text"
                required
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="text-input"
                placeholder="Your Subject*"
              />

              <textarea
                name="message"
                placeholder="Your Message*"
                required
                cols="30"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-input"
              ></textarea>

              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Contact;