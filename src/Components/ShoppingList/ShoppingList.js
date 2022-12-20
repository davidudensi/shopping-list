import ShoppingItem from "./ShoppingItem";

const ShoppingList = ({ items, onAdjustQuantity, onRemoveItem }) => {
  return items !== null ? (
    <div>
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
