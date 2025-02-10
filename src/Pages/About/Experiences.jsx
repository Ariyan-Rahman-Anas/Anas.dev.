const Experiences = () => {

  const experiences = [
    {
      title: "Frontend Developer",
      employmentType: "Full time",
      company: "Qwik IT",
      startDate:"01-01-01",
      endDate: "01-01-01",
      duration:"3",
      currentlyWorking: false,
      location: "abc",
      workType: "Remote",
      skills:["React", "Next", "React Native", "MERN"]
    }
  ]

  
  return (
    <div>
      <div>
        <h1 className="heading">Experiences</h1>
      </div>
      <div>
        {
          experiences.map(({
            title, employmentType, company, startDate, endDate, duration, currentlyWorking, location, workType, skills
          }, idx) => <div key={idx} className="border border-teal-500 rounded-lg py-5 px-6 space-y-8">
              <div>
                <h1 className="text-3xl font-medium text-teal-500">{title}</h1>
                <div className="flex items-center gap-6 text-lg mt-4">
                  <p>{employmentType}</p>
                  <p>{workType}</p>
                </div>
                  <hr className="border-[0.05rem] border-teal-500/40 rounded-full " />
              </div>

              <div className="flex items-end justify-between">
                <div className="flex items-end gap-4">
                  <div className="h-20 w-20 bg-gray-800 text-teal-500 rounded-lg flex items-center justify-center">
                    <h2 className="text-6xl font-medium">{company.charAt(0)}</h2>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-teal-500 ">{company}</h3>
                    <h4>{location}</h4>
                  </div>
                </div>
                <div className="text-right">
                  <p>{startDate} - {endDate}</p>
                  <p>{duration} months</p>
                </div>
             </div>

              <div className="flex items-center gap-4 flex-wrap">
                {
                  skills.map((skill, idx)=> <p key={idx} className="text-teal-500 hover:text-white border-teal-500 hover:border-white border-[0.1rem] rounded-full px-8 py-2 w-fit cursor-pointer duration-300">{skill}</p> )
                }
              </div>
              
          </div>)
        }
      </div>
    </div>
  )
}
export default Experiences