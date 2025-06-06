import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={`https://spoonacular.com/cdn/ingredients_250x250/${item.image}`} alt={item.name} />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount}&nbsp;&nbsp;
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
