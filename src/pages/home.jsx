import AboutSection from "../components/HomePage/AboutSection";
import MainTitle from "../components/HomePage/MainTitle";
import StudentEssentialsSection from "../components/HomePage/StudentEssentialsSection";

const Home = () => {
  return (
    <div className="w-screen">
      <MainTitle />
      <AboutSection />
      <StudentEssentialsSection />
    </div>
  );
};

export default Home;
