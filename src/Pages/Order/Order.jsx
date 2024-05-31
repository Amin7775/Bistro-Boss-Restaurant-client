import { useParams } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import Cover from "../SharedComponents/Cover/Cover";
import FoodCard from "../SharedComponents/FoodCard/FoodCard";
import orderImg from "./../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
    const params = useParams()
    console.log(params.category)
  // custom hook to load menu
  const [menu] = useMenu();
  const salad = menu?.filter((item) => item.category === "salad");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const soup = menu?.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover
        img={orderImg}
        heading={"Order Foods"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <section className="max-w-screen-xl mx-auto my-8">
        <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
          </TabList>
          {/* salad */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-10 mt-10 mb-20">
                {
                    salad?.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                }
            </div>
          </TabPanel>
          {/* soup */}
          <TabPanel>
          <div className="grid grid-cols-3 gap-10 mt-10 mb-20">
                {
                    soup?.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                }
            </div>
          </TabPanel>
          {/* pizza */}
          <TabPanel>
          <div className="grid grid-cols-3 gap-10 mt-10 mb-20">
                {
                    pizza?.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                }
            </div>
          </TabPanel>
          {/* Dessert */}
          <TabPanel>
          <div className="grid grid-cols-3 gap-10 mt-10 mb-20">
                {
                    dessert?.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                }
            </div>
          </TabPanel>
          {/* Drink */}
          <TabPanel>
          <div className="grid grid-cols-3 gap-10 mt-10 mb-20">
                {
                    drinks?.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                }
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
