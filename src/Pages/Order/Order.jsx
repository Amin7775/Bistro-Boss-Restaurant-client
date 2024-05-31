import useMenu from "../../hooks/useMenu";
import Cover from "../SharedComponents/Cover/Cover";
import orderImg from "./../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
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
          <TabPanel>a</TabPanel>
          {/* soup */}
          <TabPanel></TabPanel>
          {/* pizza */}
          <TabPanel></TabPanel>
          {/* Dessert */}
          <TabPanel></TabPanel>
          {/* Drink */}
          <TabPanel></TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
