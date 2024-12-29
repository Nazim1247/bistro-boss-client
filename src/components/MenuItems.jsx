

const MenuItems = ({ item }) => {
    const { name, price, image, recipe } = item || {};
    return (
        <div>
            <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-24" src={image} alt="" />
            <div>
            <h3>{name}------------</h3>
            <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
        </div>
    );
};

export default MenuItems;