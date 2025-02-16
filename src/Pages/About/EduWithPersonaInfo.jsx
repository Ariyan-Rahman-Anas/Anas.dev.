const EduWithPersonaInfo = () => {
  return (
      <section className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-200">
          <div
              className="section-grant-left text-sm p-4 space-y-4 rounded-lg"
          >
              {/* personal information */}
              <div className="space-y-4">
                  <h1 className="text-3xl font-semibold">
                      Personal Information
                  </h1>

                  <div className="rounded-lg p-4 section-grant-right">
                      <div className="flex items-center gap-6">
                          <div className="flex flex-col gap-2 w-[5rem]">
                              <p>Name</p>
                              <p>Age</p>
                              <p>Phone</p>
                              <p>Email</p>
                          </div>
                          <div className="value flex flex-col gap-2 ">
                              <p className="font-semibold text-gray-100 ">
                                  : Ariyan Rahman Anas
                              </p>
                              <p className="font-semibold text-gray-100 ">: 24 years</p>
                              <a href="tel:+8801610195968" className="font-semibold text-gray-100 ">
                                  : +88 01610-195968
                              </a>

                              <a href="mailto:anas.hllw@gmail.com" className="font-semibold text-gray-100 ">
                                  : anas.hllw@gmail.com
                              </a>
                          </div>
                      </div>
                  </div>


                  <div className="rounded-lg p-4 section-grant-right ">
                      <div className="flex gap-6">
                          <div className="title flex flex-col gap-2 w-[5rem] ">
                              <p>Freelance</p>
                              <p>Languages</p>
                              <p>Address</p>
                              <p>Nationality</p>
                          </div>
                          <div className="value flex flex-col gap-2 ">
                              <p className="font-semibold text-gray-100 ">: Available</p>
                              <p className="font-semibold text-gray-100 ">
                                  : Bengali, English, and Hindi
                              </p>
                              <p className="font-semibold text-gray-100 ">
                                  : Chattogram, Bangladesh
                              </p>
                              <p className="font-semibold text-gray-100 ">: Bangladeshi</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* educational information */}
          <div
              className="section-grant-left text-sm p-4 space-y-4 rounded-lg"
          >
              <h1 className="text-3xl font-semibold">
                  Educational Qualifications
              </h1>
              <div className="section-grant-right flex flex-col items-start justify-start rounded-lg p-4">
                  <h1 className="text-gray-100 font-light text-xl border-b-[.09rem] mb-3 ">
                      Diploma in Engineering
                  </h1>
                  <div>
                      <div className="flex gap-6">
                          <div className="key flex flex-col gap-2 ">
                              <p>Department</p>
                              <p>Institute</p>
                              <p>Duration</p>
                              <p>Year of Pass</p>
                          </div>
                          <div className="value flex flex-col gap-2">
                              <p className="font-semibold text-gray-100">
                                  : Computer Science and Technology
                              </p>
                              <p className="font-semibold text-gray-100">
                                  : Chattogram Polytechnic Institute
                              </p>
                              <p className="font-semibold text-gray-100">
                                  : 4 Years, 8 Semester
                              </p>
                              <p className="font-semibold text-gray-100">: 2023</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="dakhil flex-col flex items-start justify-start gap-1 rounded-lg p-4 bg-gradient-to-l from-teal-950 hover:bg-gradient-to-r hover:from-teal-950 to-gray-900 hover:to-gray-950 duration-500">
                  <div>
                      <h1 className="text-gray-100 font-light text-xl border-b-[.09rem] mb-3 ">
                          Secondary School Certificate (SSC)
                      </h1>
                  </div>
                  <div>
                      <div className="flex items-center  gap-6 ">
                          <div className="key flex flex-col gap-2 ">
                              <p>Institute</p>
                              <p>Semester</p>
                              <p>Duration</p>
                              <p>Year of Pass</p>
                          </div>
                          <div className="value flex flex-col gap-2 ">
                              <p className="font-semibold text-gray-100">
                                  : Baitush Sharaf Ideal kamil (M.A) Madrasah
                              </p>
                              <p className="font-semibold text-gray-100">
                                  : 4 Semester
                              </p>
                              <p className="font-semibold text-gray-100">
                                  : 2 Years
                              </p>
                              <span className="font-semibold text-gray-100">: 2019</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default EduWithPersonaInfo