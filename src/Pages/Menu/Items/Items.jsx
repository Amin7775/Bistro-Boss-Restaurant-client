
import MenuItem from "../../SharedComponents/MenuItem/MenuItem";

const Items = ({data}) => {
    console.log(data)    

    return (
        <div className="">
            
            <div className="grid grid-cols-2 gap-x-14 gap-y-8 mb-6 pt-5">
                {
                    data?.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Items;