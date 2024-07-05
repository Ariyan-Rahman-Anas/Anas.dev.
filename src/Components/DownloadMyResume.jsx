import { LuFileDown } from "react-icons/lu";
import myResume from "./../assets/my-resume.pdf"

const DownloadMyResume = () => {
  return (
    <div
      className="resume-download w-full flex items-center justify-center gap-10 text-xl p-4 text-gray-100 rounded-lg  bg-gradient-to-l from-teal-950 to-gray-900 hover:to-gray-950 duration-500"
      style={{
        boxShadow: "1px 1px 3px #042f2e,-1px -1px 3px #042f2e ",
      }}
    >
      <a
        href={myResume}
        download
        className="flex text-base items-center justify-between gap-2 py-2 px-4  bg-gradient-to-r from-teal-950 to-gray-950 hover:to-teal-600  rounded-md   hover:transform hover:scale-105 duration-500 "
      >
        Download My Resume
        <LuFileDown></LuFileDown>
      </a>
    </div>
  );
};
export default DownloadMyResume;