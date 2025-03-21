import { Link } from "react-router-dom";

const CredentialCard = ({ credential }) => {
  const { _id, degreeTitle, image } = credential || {};

  return (
    <div
      className="group p-5 pb-3 text-center section-grant-left border border-transparent hover:border-white duration-500 rounded-lg"
    >
      <div className="relative overflow-hidden rounded-lg ">
        <img
          src={image}
          alt={`${degreeTitle}'image`}
          loading="lazy"
          className="rounded-lg w-full h-full group-hover:scale-125 duration-500  "
        />
        <div className="hidden absolute top-0 bg-black rounded-lg w-full h-full group-hover:flex items-center justify-center bg-opacity-60 duration-500  ">
          <Link
            state={{ credential }}
            to={`/credential-details/${_id}`}
            className="btn"
          >
            Details
          </Link>
        </div>
      </div>
      <h1 className="font-semibold mt-3 text-lg text-white">{degreeTitle} </h1>
    </div>
  );
};
export default CredentialCard;