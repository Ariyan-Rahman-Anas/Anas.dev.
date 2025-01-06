const Footer = () => {
  const theDate = new Date();
  const currentYear = theDate.getFullYear();
  return (
    <footer className="absolute bottom-11 left-0 right-0 bg-gray-950 border2 mt-5 pb-1 text-center text-gray-400 text-sm font-semibold ">
      <span>©-Ariyan Rahman Anas {currentYear}</span>
    </footer>
  );
};
export default Footer;