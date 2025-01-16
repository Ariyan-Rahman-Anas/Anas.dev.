import { BiPlus } from "react-icons/bi"

const MySpecialties = () => {

  const specialties = [
    { title: 2, description: "Years of Experience" },
    { title: 85, description: "Completed Projects" },
    { title: 5, description: "Countries I worked already" },
    { title: 7, description: "Clients I have worked already" },
  ]

  return (
    <div className="text-center space-y-4">
      <div>

        <h1 className="font-semibold text-3xl ">{`Let's Get Introduced`}</h1>
        <p className="mt-1" >{`Hi, you already know my name, right? Now let's discover in the video below why I'm your next hire.`}</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 border- gap-8 md:gap-0" >
        <div className="order-2 md:order-1 grid grid-cols-2 md:grid-cols-2 gap-4 place-items-center">
          {
            specialties.map(({ title, description }, index) => (
              <div key={index} className="fle items-center justify-items-center section-grant-left rounded-lg p-4 space-y-4 md:h-fit w-full md:w-3/5">
                <div className="w-fit relative ">
                  <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
                  <BiPlus className="absolute top-2 -right-4 md:-right-5 text-xl md:text-2xl font-bold " />
                </div>
                <p className="text-gray-400 font-semibold ">{description}</p>
              </div>
            ))
          }
        </div>
        <div className="order-1 md:order-2 flex items-center justify-end">
          <iframe className="w-full h-full min-h-[70vh] min-w-max"
            src="https://player.vimeo.com/video/1044393508?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Ariyan Rahman Anas">
          </iframe>
        </div>
      </section>
    </div>
  )
}
export default MySpecialties