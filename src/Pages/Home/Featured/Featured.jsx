import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from './../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item pt-16 pb-10 px-32 text-white">
            <SectionTitle subHeading={"Check It Out"} heading={"From Our Menu"}></SectionTitle>
            <div className="md:flex justify-center items-center gap-10 px-8 pb-16 pt-8">
                {/* img */}
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                {/* content */}
                <div className="md:ml-10">
                    <p>May 30 , 2024</p>
                    <p className="uppercase">Where can i get someone?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam ipsa ab quia amet veritatis cupiditate praesentium fugiat obcaecati quidem voluptates, exercitationem ratione aliquid! Aliquam, reprehenderit reiciendis ratione sit optio, ad repellendus quis, officia animi totam voluptate aut dolorum dolore sapiente sequi possimus laborum. Corrupti culpa labore cum quisquam distinctio?</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;