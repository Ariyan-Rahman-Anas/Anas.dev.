import { IoCameraOutline, IoColorFilterOutline } from "react-icons/io5";
import { PiPencilCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { LiaDev } from "react-icons/lia";
import { TbArrowLoopRight } from "react-icons/tb";

export default function Services() {
    return (
        <Link to={"offering-services"}
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="div-1 col-span-2 group relative bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg h-full p-5 "
        >
            <div className="flex items-center justify-center gap-10 md:gap-20 text-4xl h-24 mb-12 ">
                <IoCameraOutline className="opacity-50 hover:opacity-80 duration-500" />
                <PiPencilCircle className="opacity-50 hover:opacity-80 duration-500" />
                <IoColorFilterOutline className="opacity-50 hover:opacity-80 duration-500" />
                <LiaDev className="opacity-50 hover:opacity-80 duration-500" />
            </div>
            <div className="absolute bottom-5 ">
                <h1 className="text-gray-500 font-semibold text-sm ">
                    SPECIALIZATION
                </h1>
                <p className="text-2xl ">Offering Services</p>
            </div>
            <div className="absolute right-5 bottom-5 ">
                <Link
                    to={"offering-services"}
                    className="text-gray-500 group-hover:text-gray-100 duration-500 text-2xl "
                >
                    <TbArrowLoopRight></TbArrowLoopRight>
                </Link>
            </div>
        </Link>
    )
}