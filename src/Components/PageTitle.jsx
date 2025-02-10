import { GoNorthStar } from "react-icons/go";

const PageTitle = ({title}) => {
  return (
    <div className="up flex items-center justify-center gap-1 text-3xl lg:text-6xl font-semibold ">
      <GoNorthStar className="text-teal-500 text-3xl lg:text-5xl "/>
      <h1 className="text-white">{title}</h1>
      <GoNorthStar className="text-teal-500 text-3xl lg:text-5xl "/>
    </div>
  );
};
export default PageTitle;