import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcements />
      <NavBar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
