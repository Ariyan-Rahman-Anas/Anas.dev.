import DisplayPicture from "./components/DisplayPicture";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center border2 bg-gradient-to-b from-teal-950 to-black">
      <div>
          <DisplayPicture />

        {/* 2nd section */}
        {/* <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[15m]"> */}
          {/* <Experiences /> */}
          {/* <WorkTogether /> */}
        {/* </section> */}
      </div>
    </div>
  );
};
export default Home;