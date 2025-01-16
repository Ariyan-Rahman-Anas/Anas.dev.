import DisplayPicture from "./components/DisplayPicture";
import Experiences from "./components/Experiences";
import WorkTogether from "./components/WorkTogether";

const Home = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center ">
      <div className="space-y-8">
        {/* 1st section */}
          <DisplayPicture />

        {/* 2nd section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[15m]">
          <Experiences />
          <WorkTogether />
        </section>
      </div>
    </div>
  );
};
export default Home;