import { Helmet } from "react-helmet-async";
import Cover from "../SharedComponents/Cover/Cover";
import menuBG from "./../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import Items from "./Items/Items";
import MenuCover from "./MenuCover/MenuCover";
import useMenu from "../../hooks/useMenu";

// images
import soupImg from "./../../assets/menu/soup-bg.jpg";
import drinksImg from "./../../assets/menu/banner3.jpg";
import saladImg from "./../../assets/menu/salad-bg.jpg";
import pizzaImg from "./../../assets/menu/pizza-bg.jpg";
import dessertImg from "./../../assets/menu/dessert-bg.jpeg";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  // load all menu data from the custom hook
  const [menu] = useMenu();
  console.log(menu);
  // filter menu data
  const salad = menu?.filter((item) => item.category === "salad");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const soup = menu?.filter((item) => item.category === "soup");
  const offered = menu?.filter((item) => item.category === "offered");
  console.log(salad);

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
      <section className="max-w-screen-xl mx-auto ">
        <Items data={offered}></Items>
        {/* salad */}
        <MenuCategory
          image={saladImg}
          title={"Salad"}
          items={salad}
        ></MenuCategory>
        {/* soup */}

        <MenuCategory
          image={soupImg}
          title={"soup"}
          items={soup}
        ></MenuCategory>
        {/* pizza */}

        <MenuCategory
          image={pizzaImg}
          title={"pizza"}
          items={pizza}
        ></MenuCategory>
        {/* dessert */}

        <MenuCategory
          image={dessertImg}
          title={"dessert"}
          items={dessert}
        ></MenuCategory>

        {/* drinks */}
        <MenuCategory
          image={drinksImg}
          title={"drinks"}
          items={drinks}
        ></MenuCategory>
      </section>
    </div>
  );
};

export default Menu;
