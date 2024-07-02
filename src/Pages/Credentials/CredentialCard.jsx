import { Link } from "react-router-dom";

const CredentialCard = ({ credential }) => {
  const { _id, degreeTitle, image } = credential || {};

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-anchor-placement="center-bottom"
      className="group p-5 pb-3 text-center  bg-gradient-to-r from-gray-950 to-teal-950 hover:to-teal-900 duration-500 rounded-lg"
    >
      <div className="relative overflow-hidden ">
        <img
          src={image}
          alt=""
          className="rounded-lg w-full group-hover:scale-125 duration-500  "
        />
        <div className="hidden absolute top-0 bg-black rounded-lg w-full h-full group-hover:flex items-center justify-center bg-opacity-60 duration-500  ">
          <Link
            state={{ credential }}
            to={`/credentialDetails/${_id}`}
            className="py-2 px-5 text-xl text-gray-100 bg-gradient-to-t from-teal-600 to-gray-800 rounded-md flex flex-col items-center justify-center  hover:transform hover:scale-110 duration-500"
          >
            Details
          </Link>
        </div>
      </div>
      <h1 className="font-semibold mt-3 text-xl ">{degreeTitle} </h1>
    </div>
  );
};
export default CredentialCard;