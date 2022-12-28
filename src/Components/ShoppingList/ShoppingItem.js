import styles from "./ShoppingItem.module.scss";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const ShoppingItem = ({ item, onAdjustQuantity, onRemoveItem }) => {
  return (
    item && (
      <div className={styles.shoppingItem}>
        <div className={styles.item}>
          <img className={styles.item_image} src={item.image} />
          <div className={styles.details}>
            <label className={styles.name}>{item.name}</label>
            <span className={styles.location}>{item.location}</span>
            <div className={styles.total}>
              <label>Total: </label>
              <span className={styles.sum}>20</span>
            </div>
          </div>
        </div>

        <div className={styles.amount}>
          <div className={styles.qtyPane}>
            <label for="qty-label">Quantity: </label>
            <input
              id="qty-label"
              className={styles.quantity}
              type="number"
              value={item.quantity}
            />
          </div>

          <div className={styles.operation}>
            <FaPlus
              className={styles.icon}
              onClick={() => onAdjustQuantity(item.id, true)}
            />
            <FaMinus
              className={styles.icon}
              onClick={() => onAdjustQuantity(item.id, false)}
            />
          </div>
        </div>

        <div className={styles.remove}>
          <FaTrash
            className={styles.action}
            onClick={() => onRemoveItem(item.id)}
          />
        </div>
      </div>
    )
  );
};

export default ShoppingItem;
