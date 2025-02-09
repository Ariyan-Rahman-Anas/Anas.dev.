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

const MySkills = () => {
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
        <section
            id="skills"
            className="section-grant-left my-4 p-4 text-gray-200 rounded-lg"
        >
            <h1 className="text-3xl font-semibold mb-6  ">My Weapons</h1>
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
    )
}
export default MySkills