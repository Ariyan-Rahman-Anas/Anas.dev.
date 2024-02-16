import { GiPolarStar } from "react-icons/gi";

const PageTitle = ({title}) => {
  return (
    <div className="up flex items-center justify-center gap-1 text-3xl lg:text-6xl font-semibold ">
      <GiPolarStar className="text-teal-500 text-3xl lg:text-5xl "></GiPolarStar>
      <h1>{title}</h1>
      <GiPolarStar className="text-teal-500 text-3xl lg:text-5xl "></GiPolarStar>
    </div>
  );
};
export default PageTitle;