import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Category from "./category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* container = max-w-screen-xl mx-auto*/}
            <section className="max-w-screen-xl mx-auto">
                <Category></Category>
                <PopularMenu></PopularMenu>
            </section>
                <Featured></Featured>
        </div>
    );
};

export default Home;