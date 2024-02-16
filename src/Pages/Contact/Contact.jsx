import { IoMailOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import arrow from "./../../assets/arrow.png";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import MySocials from "../../Components/MySocials";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleOpen = () => setOpen(!open);

  // Function to clear form data
  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  // Check if open is true, then clear form
  useEffect(() => {
    if (open) {
      clearForm();
    }
  }, [open]);

  const form = useRef();
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-20">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 ">
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="left col-span-2 lg:col-span-1 "
        >
          <div className="flex flex-col items-start w-full h-full justify-between gap-8 ">
            <div>
              <h1 className="text-3xl mb-8 font-semibold mb6 text-gray-500 ">
                Contact Info
              </h1>
              <div className="flex flex-col gap-8">
                <div
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="center-bottom"
                  className="mail flex flex-col md:flex-row items-start justify-start gap-x-5 gap-y-1 "
                >
                  <div className="text-3xl px-5 py-3 bg-gradient-to-r from-teal-700 to-gray-950 hover:from-teal-800 hover:to-gray-800 duration-500 rounded-lg">
                    <IoMailOutline></IoMailOutline>
                  </div>
                  <div>
                    <p className="text-gray-500">MAIL US</p>
                    <p>mohammadariyanrahmananas@gmail.com</p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="center-bottom"
                  className="number flex flex-col md:flex-row items-start justify-start gap-x-5 gap-y-1 "
                >
                  <div className="text-3xl px-5 py-3 bg-gradient-to-r from-teal-700 to-gray-950 hover:from-teal-800 hover:to-gray-800 duration-500 rounded-lg">
                    <MdOutlineCall></MdOutlineCall>
                  </div>
                  <div>
                    <p className="text-gray-500">CONTACT US</p>
                    <p>+88 01610-195968</p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="center-bottom"
                  className="location flex flex-col md:flex-row items-start justify-start gap-x-5 gap-y-1"
                >
                  <div className="text-3xl px-5 py-3 bg-gradient-to-r from-teal-700 to-gray-950 hover:from-teal-800 hover:to-gray-800 duration-500 rounded-lg">
                    <IoLocationOutline></IoLocationOutline>
                  </div>
                  <div>
                    <p className="text-gray-500">LOCATION</p>
                    <p>Khulshi, Chattogram, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <h1 className="text-3xl font-semibold mb-8 text-gray-500 ">
                Social Info
              </h1>
              <div
                data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
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
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="right relative col-span-2 p-5 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
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
                onClick={handleOpen}
                type="submit"
                value="Send Message"
                className="w-full p-3 rounded-lg bg-gradient-to-l from-teal-700 to-gray-900 hover:to-gray-700 focus:outline-none cursor-pointer "
              />
              <div className="bg-red-">
                <Dialog
                  open={open}
                  handler={handleOpen}
                  className=" flex flex-col items-center justify-center border- shadow-lg border-[.05rem] border-gray-100 w-fit absolute top-1/4 mx-2 text-gray-100 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
                >
                  <DialogHeader>
                    <Typography variant="h2" color="blue-gray">
                      Thank You!
                    </Typography>
                  </DialogHeader>
                  <DialogBody divider className="grid place-items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-16 w-16 text-tea-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Typography variant="h4" className="text-gray-500">
                      You should read this!
                    </Typography>
                    <Typography className="text-center text-gray-500 font-normal">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </Typography>
                  </DialogBody>
                  <DialogFooter className="space-x-6">
                    <Button
                      variant="text"
                      onClick={handleOpen}
                      className="px-6 py-2 text-base font-semibold bg-gradient-to-l from-teal-700 to-gray-900 hover:to-gray-900 duration-500"
                    >
                      Close
                    </Button>
                    <Button
                      variant="gradient"
                      className="px-6 py-2 text-base font-semibold bg-gradient-to-l from-teal-700 to-gray-900 hover:to-gray-900 duration-500"
                      onClick={handleOpen}
                    >
                      Ok, Got it
                    </Button>
                  </DialogFooter>
                </Dialog>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;