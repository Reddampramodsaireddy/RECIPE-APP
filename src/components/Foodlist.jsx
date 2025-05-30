import FoodItems from "./Fooditems";

export default function FoodList({ foodData,setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItems food={food} key={food.id} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
