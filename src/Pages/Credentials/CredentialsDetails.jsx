import { useLocation } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";

const CredentialsDetails = () => {
  const location = useLocation();
  const { credential } = location.state || {};

  const {
    title,
    degreeTitle,
    image,
    institute,
    instituteUrl,
    description,
    cto,
    greeting,
  } = credential || {};

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-10 md:mt-16 w-[95%] md:w-[90%] mx-auto ">
      <div
        className="w-full md:w-[35%] section-grant-left p-4 rounded-lg "
      >
        <img
          src={image}
          loading="lazy"
          alt="image of certificate"
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="w-full md:w-[65%] text-gray-400 ">
        <PageTitle title={"CREDENTIAL DETAILS"}></PageTitle>
        <div
          className="p-6 mt-6 section-grant-left rounded-lg text-sm"
        >
          <h1 className="text-4xl font-semibold text-white mb-3 ">
            {degreeTitle}
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between flex-wrap ">
            <h2 className="text-xl">{title}</h2>
            <a
              href={instituteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-lg"
            >
              {institute}
            </a>
          </div>
          <p className="my-3 ">{description}</p>
          <p>{cto}</p>
          <p className="font-semibold  text-right mt-3 ">
            <i>🔊 {greeting}🤍</i>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CredentialsDetails;
