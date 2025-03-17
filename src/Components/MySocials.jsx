const MySocials = ({socialsArr }) => {
  
    return (
      <div className="w-full flex items-center justify-between gap-10 text-xl p-4 text-gray-100 rounded-lg section-grant-right">
        {socialsArr.map(({icon, link}, index) => <a key={ index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="p-3 rounded-full bg-gradient-to-r from-teal-900 to-gray-950 hover:to-teal-600 hover:transform hover:scale-110 duration-500  ">
            {icon}
          </p>
        </a>  )}
      </div>
    );
};
export default MySocials;