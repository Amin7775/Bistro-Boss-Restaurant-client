import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../SharedComponents/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])

    console.log(menu)

    return (
        <div className="mb-16">
            <SectionTitle subHeading={"Check It Out"} heading={"From our menu"}></SectionTitle>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                {
                    menu?.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;