const MySocials = ({fb, linkedin, gh}) => {
    return (
      <div
        className=" social-icons w-full flex items-center justify-center gap-10 text-xl p-4 text-gray-100 rounded-lg  bg-gradient-to-l from-teal-950 to-gray-900 hover:to-gray-950 duration-500"
        style={{
          boxShadow: "1px 1px 3px #042f2e,-1px -1px 3px #042f2e ",
        }}
      >
        <a
          href="https://www.facebook.com/ariyanrahmananas69/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="p-3 rounded-full bg-gradient-to-r from-teal-900 to-gray-950 hover:to-teal-600 hover:transform hover:scale-110 duration-500  ">
            {fb}
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/ariyanrahmananas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="p-3 rounded-full bg-gradient-to-r from-teal-900 to-gray-950 hover:to-teal-600 hover:transform hover:scale-110 duration-500">
            {linkedin}
          </p>
        </a>
        <a
          href="https://github.com/Ariyan-Rahman-Anas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="p-3 rounded-full bg-gradient-to-r from-teal-900 to-gray-950 hover:to-teal-600 hover:transform hover:scale-110 duration-500">
            {gh}
          </p>
        </a>
      </div>
    );
};
export default MySocials;