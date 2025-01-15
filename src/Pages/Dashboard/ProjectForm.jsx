import { useRef, useState } from "react";
import { postDataWithFile } from "../../Hooks/apiUtils";

const ProjectForm = () => {
    const formRef = useRef(null);
    const [aside, setAside] = useState(false);
    const [category, setCategory] = useState(null)


    //handle submit project
    const handleSubmitProject = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const details = form.details.value;
        const frontTech = form.frontTech.value
        const backTech= form.backTech.value
        const frontCode = form.frontCode.value;
        const backCode = form.backCode.value;
        const liveLink = form.liveLink.value;
        const image = form.image.files[0];

        try {
            const aProject = {
                category,
                name,
                details,
                frontTech,
                backTech,
                frontCode,
                backCode,
                liveLink,
                aside,
                image,
            };

            const hashFile = !!form.image.files[0];
            try {
                await postDataWithFile("projects/create", aProject, hashFile);
                form.reset();
                alert("Project posted Successfully!");
            } catch (error) {
                console.error(
                    "Error with storing the project image in cloudinary :",
                    error
                );
            }
        } catch (error) {
            console.error("Error with posting a project: ", error);
        }
    };

    //radio input handling in the project section
    const handleRadioChange = (e) => {
        setAside(e.target.value === "yes");
    };

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="right flex-1  p-2 md:p-6  bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg"
        >
            <h1 className="text-3xl font-semibold mb-5 ">Add a Projects</h1>
            <div>
                <form onSubmit={handleSubmitProject} ref={formRef}>
                    <select
                        required
                        name="category"
                        onChange={((e)=>setCategory(e.target.value))}
                        className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 mb-3 border-transparent focus:border-b-teal-600"
                    >
                        <option value="">Select Category</option>
                        <option value="Non-Functional">Non-Functional</option>
                        <option value="Front-End">Front-End</option>
                        <option value="Full-Stack">Full-Stack</option>
                    </select>
                    <div className="flex flex-col md:flex-row gap-3 mb-3">
                        <input
                            name="name"
                            type="text"
                            required
                            placeholder="name"
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
                            name="frontTech"
                            type="text"
                            required
                            placeholder="Frontend technologies separated by comma"
                            className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                        />
                        <input
                            name="backTech"
                            placeholder="Backend technologies separated by comma"
                            type="text"
                            className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 mb-3">
                        <input
                            name="frontCode"
                            required
                            placeholder="Front-End code base link:"
                            type="text"
                            className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                        />
                        <input
                            name="backCode"
                            placeholder="Back-End code base link:"
                            type="text"
                            className="w-full p-2 rounded-lg bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
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
                            name="image"
                            required
                            type="file"
                            className="w-full p-2 rounded-md bg-gray-600 focus:bg-gray-700 focus:outline-none border-b-4 border-transparent focus:border-b-teal-600 "
                        />
                    </div>
                    <div className="aside flex items-center gap-3 mb-3">
                        <label className="font-semibold  ">Aside:</label>
                        <div className="flex items-center gap-[.10rem] ">
                            <input
                                required
                                type="radio"
                                name="aside"
                                value="yes"
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="yes" className="text-sm font-medium">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center gap-[.10rem] ">
                            <input
                                required
                                type="radio"
                                name="aside"
                                value="no"
                                onChange={handleRadioChange}
                            />
                            <label htmlFor="no" className="text-sm font-medium">
                                No
                            </label>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        className=" w-full p-3 text-lg rounded-md text-white font-semibold bg-gradient-to-l from-teal-700 to-gray-900 hover:to-gray-700 focus:outline-none cursor-pointer "
                    />
                </form>
            </div>
        </div>
    )
}

export default ProjectForm