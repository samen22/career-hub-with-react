import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Career Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <CategoryList></CategoryList>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;