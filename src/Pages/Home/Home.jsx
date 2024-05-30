import Banner from "./Banner/Banner";
import Category from "./category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* container = max-w-screen-xl mx-auto*/}
            <section className="max-w-screen-xl mx-auto">
                <Category></Category>
            </section>
        </div>
    );
};

export default Home;