import meAI from "./myAI.jfif";
import PageTitle from "../../Components/PageTitle";
import arrow from "./../../assets/arrow.png";

const OfferingServices = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto flex flex-col md:flex-row items-start justify-between gap-6 my-4">
      <section className="section-grant-left p-4 rounded-lg w-full md:w-[35%] ">
          <img src={meAI} alt="Ariyan Rahman Anas" className="w-full h-full rounded-lg" />
      </section>

      <section className="w-full md:w-[65%] ">
        <PageTitle title={"Offering Services"} />
        <div className="section-grant-left rounded-lg">

        </div>
      </section>
   </div>
  );
};
export default OfferingServices;
