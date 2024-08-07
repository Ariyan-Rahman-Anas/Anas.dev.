export default function Experiences() {
  return (
      <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
          className="left  p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
      >
          <div className="div-1 bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500 p-4">
              <h1 className="text-4xl font-semibold mb-5">03</h1>
              <div className="text-gray-400 text-center ">
                  <p>YEARS</p>
                  <p>EXPERIENCE</p>
              </div>
          </div>
          <div className="div-2  bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center hover:transform hover:scale-110 duration-500 p-4  ">
              <h1 className="text-4xl font-semibold mb-5">+25</h1>
              <div className="text-gray-400 text-center ">
                  <p>CLIENTS</p>
                  <p>WORLDWIDE</p>
              </div>
          </div>
          <div className="div-3  bg-gradient-to-b from-teal-950 to-gray-950 rounded-lg flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500 p-4 ">
              <h1 className="text-4xl font-semibold mb-5">+86</h1>
              <div className="text-gray-400 text-center ">
                  <p>TOTAL</p>
                  <p>PROJECTS</p>
              </div>
          </div>
      </div>
  )
}