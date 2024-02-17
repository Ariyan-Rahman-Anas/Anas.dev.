import { useLoaderData } from "react-router-dom";

const CredentialsDetails = () => {
  const credential = useLoaderData();
  console.log(credential);
  const { title, degreeTitle, img, description } = credential || {};

  return (
    <div className="flex items-center md:items-start justify-between gap-8 mt-10  ">
      <div className="left flex-1 w-full md:w-1/2 ">
        <img
          src={img}
          alt="image of certificate"
          className="w-full rounded-lg  "
        />
      </div>
      <div className="right flex-1 ">
        <h1>{title}</h1>
        <h2>{degreeTitle}</h2>
      </div>
    </div>
  );
};
export default CredentialsDetails;
