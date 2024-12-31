

const FoodCard = ({item}) => {
    const { name, price, image, recipe } = item || {};
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <p className="bg-slate-900 text-white absolute top-12 right-12 px-2 rounded-md">{price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard