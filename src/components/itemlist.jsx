import Item from "./item";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div key={item.id}>
            <Item item={item} />
          </div>
        ))
      )}
    </div>
  );
}
