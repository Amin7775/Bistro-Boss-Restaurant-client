import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import Category from "./category/Category";

const Home = () => {
  return (
    <div className="pb-16">
      {/* main banner */}
      <Banner></Banner>

      {/* container = max-w-screen-xl mx-auto*/}
      <section className="max-w-screen-xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </section>

      {/* Featured Section */}
      <Featured></Featured>

      {/* container 2*/}
      <section className="max-w-screen-xl mx-auto">
        <Testimonials></Testimonials>
      </section>
    </div>
  );
};

export default Home;
