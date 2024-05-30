import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from './../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item  text-white mb-16 ">
            <div className="h-full w-full pt-16 pb-10 px-32 bg-black bg-opacity-60">
            <SectionTitle subHeading={"Check It Out"} heading={"From Our Menu"}></SectionTitle>
            <div className="md:flex justify-center items-center gap-10 px-8 pb-16 pt-8 max-w-screen-xl mx-auto">
                {/* img */}
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                {/* content */}
                <div className="md:ml-10 ">
                    <p className="text-xl">May 30 , 2024</p>
                    <p className="uppercase text-xl mt-1">Where can i get someone?</p>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam ipsa ab quia amet veritatis cupiditate praesentium fugiat obcaecati quidem voluptates, exercitationem ratione aliquid! Aliquam, reprehenderit reiciendis ratione sit optio, ad repellendus quis, officia animi totam voluptate aut dolorum dolore sapiente sequi possimus laborum. Corrupti culpa labore cum quisquam distinctio?</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white bg-transparent mt-3 hover:border hover:border-white">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;