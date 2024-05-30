import { useEffect, useState } from "react";
import MenuItem from "../../SharedComponents/MenuItem/MenuItem";

const Items = () => {
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
        <div className="">
            
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 pt-14 mb-20">
                {
                    menu?.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Items;