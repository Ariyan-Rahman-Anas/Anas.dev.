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
    SiExpress,
    SiShadcnui
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandPrisma } from "react-icons/tb";

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
            icon: <SiShadcnui />,
            title: "Shadcn UI",
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
            icon: <TbBrandPrisma />,
            title: "Prisma",
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
            className="p-4 text-gray-200 rounded-lg text-center space-y-8"
        >
            <div className="my-4 space-y-2">
                {/* <h1 className="heading">⚔️ Weapons ⚔️</h1> */}
                <h1 className="heading">Weapons</h1>
                <p className="text-gray-400 font-medium ">Equipped with a powerful tech stack, I build seamless solutions and tackle challenges with precision.</p>
            </div>

            <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {
                    skills?.map((item, index) => <div
                        key={index}
                        className="shadow hover:shadow-sm shadow-teal-700 rounded-lg p-4 all-skills duration-500">
                        <div>
                            <h1>
                                {item.icon}
                            </h1>
                            <p>{item.title} </p>
                       </div>
                    </div>)
                }
            </div>
        </section>
    )
}
export default MySkills