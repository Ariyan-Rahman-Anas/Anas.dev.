import { LuFileDown } from "react-icons/lu";
import { Link } from "react-router-dom";

const DownloadMyResume = () => {
  return (
    <div
      className="resume-download w-full flex items-center justify-center gap-10 text-xl p-4 text-gray-100 rounded-lg section-grant-left "
    >
      <Link
        to={import.meta.env.VITE_RESUME}
        target="_blank"
        className="flex text-base items-center justify-between gap-2 py-2 px-4 btn rounded-md"
      >
        Download My Resume
        <LuFileDown></LuFileDown>
      </Link>
    </div>
  );
};
export default DownloadMyResume;