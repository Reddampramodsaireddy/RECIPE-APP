import { useEffect, useState } from "react";
import styles from "./search.module.css";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const SEARCH_URL = import.meta.env.VITE_SPOONACULAR_SEARCH_URL;

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${SEARCH_URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
      } catch (error) {
        console.error("Error fetching food search results:", error);
      }
    }

    if (query.trim()) {
      fetchFood();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Enter a recipe"
      />
    </div>
  );
}
