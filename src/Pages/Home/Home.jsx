import DisplayPicture from "./components/DisplayPicture";
import Experiences from "./components/Experiences";
import WorkTogether from "./components/WorkTogether";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* 1st section */}
      <section className="">
        <DisplayPicture />
      </section>

      {/* 2nd section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[15m]">
        <Experiences/>
        <WorkTogether/>
      </section>
    </div>
  );
};
export default Home;