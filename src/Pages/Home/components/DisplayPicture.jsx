import { Link } from "react-router-dom";
import { LuFileDown } from "react-icons/lu";
import myDisplayPicture from "../../../assets/me.png"
import RoutingIndicator from "./RoutingIndicator";
import { useGetSpecalitiesQuery } from "../../../redux/features/specalities/specalitiesApi";
import Spinner from "../../../Components/Spinner";

export default function DisplayPicture() {
    const resume = import.meta.env.VITE_RESUME
    const { data, isLoading } = useGetSpecalitiesQuery()
    const { yearsOfExperience} = data?.specalities[0] || {}
    
    if (isLoading) <Spinner />

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border2  ">
            <div className="col-span-12 md:col-span-5 mt-5 md:mt-0 flex flex-col md:flex-row items-center justify-start gap-4 border2 " >
                <div className="img w-full md:w-[70%] rounded-se-full mx-auto">
                    <img
                        src={myDisplayPicture}
                        alt="Ariyan Rahman Anas"
                        loading="lazy"
                        className="w-full h-full rounded-ee-[17rem] rounded-xl border-primary border-b-[.25rem] border-dashed"
                    />
                </div>
            </div>
            
            <div className="border- col-span-12 md:col-span-7 p-4 md:px-8 flex items-center justify-center">
                <div className="flex flex-col items-start ">
                    <div className="flex items-end gap-2 font-semibold">
                        <h2 className="md:text-xl">Hello, {`I'm`}</h2>
                        <span className="text-primary text-3xl hidden lg:block"> Ariyan Rahman Anas</span>
                    </div>
                    <span className="text-primary text-2xl font-semibold lg:hidden"> Ariyan Rahman Anas</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-200 ">A Full Stack Developer.</h2>
                    <p className="text-s leading-7 tracking-wide my-5 ">Experienced full stack developer with {yearsOfExperience}+ years of expertise in building pixel-perfect, responsive web applications using modern technologies. Proficient in both frontend and backend development, including creating serverless full stack solutions with Next.js. Fluent in English, quick to respond, a team person and committed to delivering projects on time.</p>
                    <Link
                        to={resume}
                        target="_blank"
                        className="flex items-center justify-between gap-2 btn"
                    >
                        Download My Resume
                        <LuFileDown></LuFileDown>
                    </Link>
                </div>
            </div>
            
           {/* <RoutingIndicator navigateTo={"/about"} /> */}
        </div>
    )
}