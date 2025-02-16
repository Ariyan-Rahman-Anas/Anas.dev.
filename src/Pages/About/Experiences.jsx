import { IoBriefcaseOutline } from "react-icons/io5";
import { useGetAllExperiencesQuery } from "../../redux/features/experiences/experiencesApi";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaCaretRight } from "react-icons/fa6";

const Experiences = () => {
  const experiences = [
    {
      title: "Web Instructor",
      employmentType: "Full time",
      company: "MIT Com. Ins.",
      startDate: "01-01-01",
      endDate: "01-01-01",
      duration: "3",
      currentlyWorking: false,
      location: "abc",
      workType: "Remote",
      skills: ["React", "Next", "React Native", "MERN"]
    },
    {
      title: "MERN Stack Developer",
      employmentType: "Contractual",
      company: "Loops Academy",
      startDate: "01-01-01",
      endDate: "01-01-01",
      duration: "3",
      currentlyWorking: false,
      location: "abc",
      workType: "Remote",
      skills: ["React", "Next", "React Native", "MERN"]
    },
    {
      title: "Frontend Developer",
      employmentType: "Internship",
      company: "Qwik IT",
      startDate: "01-01-01",
      endDate: "01-01-01",
      duration: "3",
      currentlyWorking: false,
      location: "abc",
      workType: "Remote",
      skills: ["React", "Next", "React Native", "MERN"]
    },
  ]


  
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  const { data } = useGetAllExperiencesQuery()
  console.log({data})



  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const suffix = (day) => {
      if (day >= 11 && day <= 13) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${suffix(day)} ${month} ${year}`;
  }

  return (
    <div className="relative">
      <div className="my-4 space-y-2">
        <h1 className="heading">Experiences</h1>
        <p className="text-center">Take a look at my professional journey, showcasing key achievements and the impact I've made.</p>
      </div>



      <div className="flex w-full justify-center">
        <div className="cursor-pointer space-y-6 w-full">
          {/* mapping each accordion  */}
          {data?.experiences.map(({title, company, employmentType, startDate,endDate, duration, workType, location,  current, skills }, idx) => (
            <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
              {/* the index div  */}
              <div className="flex w-16 h-16 items-center justify-center rounded-md bg-slate-500 text-4xl font-semibold text-teal-500">
                <span>{company.charAt(0)}</span>
              </div>

              <div className="relative h-[4px] w-16 bg-slate-500 rounded-r-full ">
                <FaCaretRight className={`${isOpen === idx ? "text-teal-500 rotate-90 " : "text-slate-500" } absolute -top-[11px] -left-[11px] text-2xl duration-300`} />
                <span
                  className={`absolute -right-[6.5px] -top-[4px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-white bg-teal-500 delay-100' : 'border-transparent'}`}
                ></span>
              </div>

              {/* main accordion div  */}
              <div className="bg-transparent w-full">
                  <h1 className={`select-none text-2xl font-semibold ${isOpen === idx ? "text-teal-500" : "text-white"} `}>{title}</h1>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="group hover:border-teal-500 border-[.1rem] rounded-lg p-6 text-sm text-white duration-500 ">
                      <h2 className="text-xl font-semibold ">{company}</h2>
                      <h3>{location}</h3>
                      <div className="flex items-center gap-6">
                        <p>{employmentType}</p>
                        <p>{workType}</p>
                      </div>
                      <hr className="border-[0.01rem] border-gray-400 rounded-full mt-1 mb-3 "/>
                      <div className="flex flex-col items-end gap-0.5">
                        <div className="flex items-center gap-2">
                          <p>{formatDate(startDate)} </p>
                          <p> to </p>
                          <p>{formatDate(endDate)}</p>
                        </div>
                        <p>{duration} months</p>
                      </div>

                      <div className="mt-6 flex items-center gap-6 flex-wrap ">
                        {
                          skills.map((skill, idx) => (
                            <p key={idx} className="px-5 py-1.5 rounded-full font-medium text-teal-400 hover:text-white border-[0.1rem] border-teal-400 hover:border-white duration-500 ">
                              {skill}
                            </p>
                          ))
                        }
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;