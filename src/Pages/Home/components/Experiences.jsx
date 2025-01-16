import { BiPlus } from "react-icons/bi"

export default function Experiences() {

    const experience = [
        {
            cta: "2",
            title: "Years",
            description: "Experienced",
        },
        {
            cta: "7",
            title: "Clients",
            description: "in abroad",
        },
        {
            cta: "85",
            title: "Total",
            description: "Projects",
        },
    ]

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="section-grant-left p-4 md:p-8 grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 text-sm duration-500 rounded-lg "
        >
            {
                experience.map(({ cta, title, description }, index) => <div key={index} className="shadow shadow-gray-400 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-110 duration-500 p-2 md:p-4 hover:shadow-primary space-y-2 ">
                    {/* <h1 className="text-5xl font-semibold mb-3">{cta} </h1> */}
                    <div className="w-fit relative ">
                        <h1 className="text-4xl md:text-5xl font-semibold">{cta}</h1>
                        <BiPlus size={30} className="absolute top-2 -right-6 font-bold " />
                    </div>
                    <div className="text-gray-300 font-semibold text-sm text-center ">
                        <p>{title}</p>
                        <p>{description}</p>
                    </div>
                </div>)
            }
        </div>
    )
}