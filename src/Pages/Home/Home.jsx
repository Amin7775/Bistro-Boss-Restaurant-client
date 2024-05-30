import Banner from "./Banner/Banner";
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
        </div>
    );
};

export default Home;