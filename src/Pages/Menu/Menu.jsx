import { Helmet } from "react-helmet-async";
import Cover from "../SharedComponents/Cover/Cover";
import menuBG from "./../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import Items from "./Items/Items";
import MenuCover from "./MenuCover/MenuCover";


const Menu = () => {
  return (
    <div>
      {/* helmet */}
      <Helmet>
        <title>Menu</title>
      </Helmet>

      <Cover
        img={menuBG}
        heading={"OUR MENU"}
        description={"WOULD YOU LIKE TO TRY A DISH"}
      ></Cover>

      <SectionTitle
        heading={"today's offer"}
        subHeading={"Don't miss"}
      ></SectionTitle>

      {/* container 1 */}
      <section className="max-w-screen-xl mx-auto mt-16 ">
        <MenuCover
          img={menuBG}
          heading={"OUR MENU"}
          description={"WOULD YOU LIKE TO TRY A DISH"}
        ></MenuCover>
        <Items></Items>
      </section>
    </div>
  );
};

export default Menu;
