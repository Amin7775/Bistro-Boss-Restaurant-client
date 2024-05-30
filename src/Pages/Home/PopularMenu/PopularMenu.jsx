import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../SharedComponents/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popularItems = menu?.filter(item => item.category === 'popular')


    // old method
    // const [menu,setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])

    console.log(menu)

    return (
        <div className="mb-16">
            <SectionTitle subHeading={"Popular Items"} heading={"From our menu"}></SectionTitle>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                {
                    popularItems?.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;