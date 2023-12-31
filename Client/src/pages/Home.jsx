import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcements />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
