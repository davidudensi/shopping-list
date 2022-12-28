import styles from "./Item.module.scss";

const Item = ({ item, onAddToList }) => {
  return (
    <div className={styles.item} onClick={() => onAddToList(item)}>
      <div className={styles.details}>
        <img className={styles.item_image} src={item && item.image} />
        <div className={styles.info}>
          <span className={styles.name}>{item && item.name}</span>
          <span className={styles.description}>{item.description}</span>
          <div className={styles.locPane}>
            <label>Location: </label>
            <span className={styles.location}>{item.location}</span>
          </div>
        </div>
      </div>

      <div className={styles.qtyNAction}>
        <div className={styles.qtyPane}>
          <label>Quantity</label>
          <span className={styles.quantity}>{item.quantity}</span>
        </div>
        <div className={styles.addToList}>
          <span>Add to list</span>
        </div>
      </div>
    </div>
  );
};
export default Item;
