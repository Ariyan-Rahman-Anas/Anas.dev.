import PageTitle from "../../Components/PageTitle";
import me3 from "./../../assets/me3.jpg";
import arrow from "./../../assets/arrow.png";
import CredentialCard from "./CredentialCard";
import { useGetAllCertificatesQuery } from "../../redux/features/certificates/certificatesApi";

const Credentials = () => {
  const { data: certificatesData, isLoading: isCertificatesLoading } = useGetAllCertificatesQuery();
  const certificates = certificatesData?.certificates;

  return (
    <div className="text-gray-400 w-[95%] md:w-[90%] mx-auto h-full space-y-8 mt-6">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div
          className="p-4 w-full col-span-3 md:col-span-1 rounded-lg section-grant-left "
        >
          <img src={me3} alt="Ariyan Rahman Anas" loading="lazy" className="w-full h-full rounded-lg" />
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col justify-between gap-4 ">
          <PageTitle title={"Certificates"}></PageTitle>
          <div className="down px-8 pb-4 section-grant-left duration-500 rounded-lg">
            <img src={arrow} alt="name indicator" />
            <p className="mt-3 text-base ">
              Showcasing my professional growth through industry-recognized certifications and accomplishments that validate my expertise.
            </p>
          </div>
        </div>
      </section>

      <section id="certificates-section" className="h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {isCertificatesLoading
            ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
            : certificates?.map((credential) => (
              <CredentialCard key={credential._id} credential={credential} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Credentials;

const SkeletonCard = () => {
  return (
    <div className="group p-5 pb-3 text-center bg-gray-700 border border-transparent hover:border-white duration-500 rounded-lg">
      <div className="relative overflow-hidden rounded-lg bg-gray-800 animate-pulse h-40 w-full flex items-center justify-center">
        <div className="bg-gray-700 h-9 w-20 rounded-lg animate-pulse ">
        </div>
      </div> 
      <div className="mt-3 bg-gray-800 animate-pulse h-6 w-3/4 mx-auto rounded"></div>
    </div>
  );
};