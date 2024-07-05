import loader from "./../assets/Spinner.gif";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-[5rem] my-12  mx-auto ">
      <img src={loader} alt="Loading..." className="h-full w-full" />
    </div>
  );
};
export default Spinner;