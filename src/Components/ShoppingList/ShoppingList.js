import ShoppingItem from "./ShoppingItem";
import styles from "./ShoppingList.module.scss"

const ShoppingList = ({ items, onAdjustQuantity, onRemoveItem }) => {
  return items !== null ? (
    <div className={styles.shoppingList}>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onAdjustQuantity={onAdjustQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </div>
  ) : (
    <label>Shopping list is empty</label>
  );
};
export default ShoppingList;
