import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./itemlist";

// Importing API values from .env
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

export default function Fooddetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`${BASE_URL}/${foodId}/information?apiKey=${API_KEY}`);
        const data = await response.json();
        setFood(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    }

    fetchFood();
  }, [foodId]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.recipeCard}>
      <h1 className={styles.title}>{food.title}</h1>
      <img className={styles.img} src={food.image} alt={food.title || "recipe"} />
      <div className={styles.recipeDetails}>
        <div>⌛ {food.readyInMinutes} minutes</div>
        <div>🍽️ Serves: {food.servings}</div>
        <div>{food.vegetarian ? "Veg 🥕" : "Non-Veg 🍗"}</div>
        <div>❤️ Health Score: {food.healthScore}</div>
        <div>💲 Price per Serving: {food.pricePerServing}</div>
      </div>
      <h1>Ingredients</h1>
      <ItemList food={food} isLoding={isLoading} />
      <div className={styles.instructions}>
        <h1 className={styles.abc}>Instructions</h1>
        <ol>
          {food.analyzedInstructions?.[0]?.steps?.map((step) => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
