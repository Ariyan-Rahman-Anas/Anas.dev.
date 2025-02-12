import { IoBriefcaseOutline } from "react-icons/io5";

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

  return (
    <div className="relative">
      <div className="my-4 space-y-2">
        <h1 className="heading">Experiences</h1>
        <p className="text-center">Take a look at my professional journey, showcasing key achievements and the impact I've made.</p>
      </div>

      <div className="relative flex justify-center hauto min-h-[200vh] overflowauto">
        {/* Center Timeline */}
        <div className="absolute w-2 h-full bg-primary rounded-full">
          <h1 className="text-white bg-primary h-8 w-8 absolute bottom-0 -left-3 rounded-full flex items-center justify-center">
            <IoBriefcaseOutline />
          </h1>
        </div>

        {/* Experience Cards Container */}
        <div className="relative w-full max-w-7xl">
          {experiences.map((experience, idx) => (
            <div
              key={idx}
              className={`absolute w-[calc(50%-20px)] ${idx % 2 === 0
                  ? 'left-0 pr-8'
                  : 'right-0 pl-8'
                }`}
              style={{
                top: `${(idx * 30) + 3}%`,
              }}
            >
              <div className="border border-teal-500 rounded-lg py-5 px-6 space-y-8 bg-gray-900">
                <div>
                  <h1 className="text-3xl font-medium text-white">{experience.title}</h1>
                  <div className="flex items-center gap-6 text-lg mt-4">
                    <p>{experience.employmentType}</p>
                    <p>{experience.workType}</p>
                  </div>
                  <hr className="border-[0.05rem] border-teal-500/40 rounded-full" />
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex items-end gap-4">
                    <div className="h-14 w-14 bg-gray-800 text-white rounded-lg flex items-center justify-center">
                      <h2 className="text-5xl font-medium">{experience.company.charAt(0)}</h2>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{experience.company}</h3>
                      <h4>{experience.location}</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>{experience.startDate} - {experience.endDate}</p>
                    <p>{experience.duration} months</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  {experience.skills.map((skill, idx) => (
                    <p
                      key={idx}
                      className="text-teal-500 hover:text-white border-teal-500 hover:border-white border-[0.1rem] rounded-full px-8 py-2 w-fit cursor-pointer duration-300"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              {/* Timeline Dot */}
              <div
                className={`absolute top-1/2 ${idx % 2 === 0 ? 'right-1 translate-x-[26px] bg-gradient-to-l from-primary to-gray-300 rounded-l-full' : 'left-1 -translate-x-[26px] bg-gradient-to-r from-primary to-gray-300 rounded-r-full '
                  } -translate-y-1/2 w-12 h-2`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;