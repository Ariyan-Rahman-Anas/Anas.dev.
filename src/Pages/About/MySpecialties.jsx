import { BiPlus } from "react-icons/bi"
import { useGetSpecalitiesQuery } from "../../redux/features/specalities/specalitiesApi"
import Spinner from './../../Components/Spinner';

const MySpecialties = () => {

  const { data, isLoading } = useGetSpecalitiesQuery()
  const { yearsOfExperience,
    completedProjects,
    workedCountries,
    clients } = data?.specalities[0] || {}
  
  const specialties = [
    { title: yearsOfExperience, description: "Years of Experience" },
    { title: completedProjects, description: "Completed Projects" },
    { title: workedCountries, description: "Countries I worked already" },
    { title: clients, description: "Clients I have worked already" },
  ]

  if(isLoading) <Spinner />

  return (
    <div className="text-center space-y-5 border2">
      <div>
        <h1 className="heading">{`Let's Get Introduced`}</h1>
        <p className="mt-1 text-base " >{`Hi, you already know my name, right? Now let's discover in the video below why I'm your next hire.`}</p>
      </div>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <div className="flex-1 grid grid-cols-2 gap-6 border2 place-items-center">
          {
            specialties.map(({ title, description }, index) => (
              <div key={index} className="group shadow shadow-teal-400 fle items-center justify-items-center rounded-lg p-4 space-y-4 md:h-fit w-full md:w-3/5 cursor-pointer">
                <div className="w-fit relative text-white group-hover:text-teal-500 duration-500">
                  <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
                  <BiPlus className="absolute top-2 -right-4 md:-right-5 text-xl md:text-2xl font-bold " />
                </div>
                <p className="text-gray-400 font-semibold ">{description}</p>
              </div>
            ))
          }
        </div>
        <div className="flex-1 flex items-center justify-center">
            <iframe
              className="w-full h-full min-h-[45vh] md:min-h-[55vh]"
              src="https://player.vimeo.com/video/1044393508?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Ariyan Rahman Anas"
            ></iframe>
        </div>
      </section>
    </div>
  )
}
export default MySpecialties