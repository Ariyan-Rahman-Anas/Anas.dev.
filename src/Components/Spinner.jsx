import loader from "./../assets/Spinner.gif";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] w-[5rem] mx-auto ">
      <img src={loader} alt="Loading..." className=" w-full" />
    </div>
  );
};
export default Spinner;