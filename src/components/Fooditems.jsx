export default function FoodItems({ food, setFoodId }) {
  return (
    <div className="container mt-4">
      <div
        className="card"
        style={{
          width: "18rem",
          background: "linear-gradient(to left, rgb(228, 124, 124), white)",
        }}
      >
        <img src={food.image} className="card-img-top" alt="Recipe" />
        <div className="card-body">
          <h2 className="card-text">{food.title}</h2>
        </div>
        <div className="card-footer text-center">
          <button
            onClick={() => {
              console.log(food.id);
              setFoodId(food.id);
            }}
            className="btn btn-danger"
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
