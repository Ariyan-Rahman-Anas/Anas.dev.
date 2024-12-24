export default function Experiences() {

    const experience = [
        {
            cta: "1.8+",
            title:"Years",
            description: "Experienced",
        },
        {
            cta: "17+",
            title:"Clients",
            description: "Worldwide",
        },
        {
            cta: "56+",
            title:"Total",
            description: "Projects",
        },
    ]

  return (
      <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="section-grant-left p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm duration-500 rounded-lg "
      >
          {
              experience.map(({cta, title, description}, index) => <div key={index} className="shadow shadow-white rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-110 duration-500 p-4 hover:shadow-primary ">
                  <h1 className="text-4xl font-semibold mb-3">{cta} </h1>
                  <div className="text-gray-300 font-semibold text-sm text-center ">
                      <p>{title}</p>
                      <p>{description}</p>
                  </div>
              </div>)
          }
      </div>
  )
}