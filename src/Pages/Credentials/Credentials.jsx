import PageTitle from "../../Components/PageTitle";
import me2 from "./../../assets/me3.jpg";
import arrow from "./../../assets/arrow.png";
import CredentialCard from "./CredentialCard";
import Spinner from "./../../Components/Spinner";
import { useGetAllCertificatesQuery } from "../../redux/features/certificates/certificatesApi";

const Credentials = () => {

  const { data: certificatesData, isLoading: isCertificatesLoading } = useGetAllCertificatesQuery()
  const certificates = certificatesData?.certificates

  if (isCertificatesLoading) {
    <Spinner />
  }

  return (
    <div className="my-6 text-gray-400 w-[95%] md:w-[90%] mx-auto md:h-[80vh] fle items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <section
          id="my-intro-section"
          className="w-full md:w-[33.4%] overflow-auto section-grant-left rounded-lg p-4 "
        >
          <img src={me2}
            alt="Ariyan Rahman Anas"
            loading="lazy"
            className="rounded-lg w-full h-full" />
        </section>

        {/* right section is starts from here */}
        <section id="certificates-section"
          className="overflow-hidden w-full md:w-[66.4%] ">
          <div
            className="right col-span-2 flex flex-col gap-5  "
          >
            <PageTitle title={"MY-CERTIFICATES"}></PageTitle>
            <div className="section-grant-left pl-0 py-1 pr-1.5 border2 duration-500 rounded-lg">
              <div className="border2 md:h-[65vh] pt-0 p-4 md:p-8 md:pt-0 overflow-auto">
                <div className="h-14 w-fit">
                  <img src={arrow} alt="down-arrow" className="w-full h-full" />
                </div>
                <h1 style={{textAlign:"left"}} className="heading mt-5">
                  Welcome to My Certificates Showcase!
                </h1>
                <p className="mt-3 text-gray-400 text-base leading-7 ">
                  Explore my journey of academic and professional achievements—degrees, certifications, and milestones that showcase my expertise. Dive in and discover my dedication to excellence!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 ">
                  {certificates?.map((credential) => (
                    <CredentialCard
                      key={credential._id}
                      credential={credential}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Credentials;