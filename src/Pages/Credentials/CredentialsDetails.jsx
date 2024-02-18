import { useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";

const CredentialsDetails = () => {
  const credential = useLoaderData();
  const {
    title,
    degreeTitle,
    img,
    institute,
    instituteUrl,
    description,
    descriptionAction,
    grateful,
  } = credential || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-16  ">
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        className="left col-span-2 md:col-span-1 w-full md:w-1/ p-6 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
      >
        <img
          src={img}
          alt="image of certificate"
          className="w-full rounded-lg  "
        />
      </div>
      <div className="right col-span-2 ">
        <PageTitle title={"CREDENTIAL DETAILS"}></PageTitle>
        <div
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center-bottom"
          className="p-6 mt-10 md:col-span-1 text-gray-400 bg-gradient-to-r from-teal-950 to-gray-950 hover:to-gray-900 duration-500 rounded-lg "
        >
          <h1 className="text-4xl font-semibold text-white mb-3 ">
            {degreeTitle}
          </h1>
          <h2 className="text-xl">{title}</h2>
          <a
            href={instituteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-lg"
          >
            {institute}
          </a>
          <p className="text-sm my-3 ">{description}</p>
          <p>{descriptionAction} </p>
          <p className="font-semibold text-right mt-3 ">
            <i>🔊 {grateful}🤍</i>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CredentialsDetails;