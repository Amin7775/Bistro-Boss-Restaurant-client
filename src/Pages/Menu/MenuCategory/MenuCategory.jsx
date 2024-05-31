import { Link } from "react-router-dom";
import Items from "../Items/Items";
import MenuCover from "../MenuCover/MenuCover";

const MenuCategory = ({ items, title, image }) => {
  return (
    <div>
      <MenuCover img={image} heading={title}></MenuCover>
      <Items data={items}></Items>
      <div className="flex justify-center items-center mb-10">
        <Link to={`/order/${title}`}>
      <button className="btn btn-outline border-0 border-b-4 border-black  bg-transparent mt-3 hover:border hover:border-white text-black">Order {title} Now</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
