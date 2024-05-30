
const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item;

    return (
        <div className="flex space-x-3">
            <img className="w-28 rounded-full rounded-tl-none object-cover drop-shadow-lg" src={image} alt="" />        
            <div>
                <h1 className="uppercase text-lg font-medium">{name} ---------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600 font-semibold">${price}</p>
        </div>
    );
};

export default MenuItem;