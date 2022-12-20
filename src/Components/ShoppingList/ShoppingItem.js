const ShoppingItem = ({ item, onAdjustQuantity, onRemoveItem }) => {
  return (
    item && (
      <div>
        <img src={item.image} />
        <label>{item.name}</label>
        <div>
          <label>{item.quantity}</label>
          <span onClick={() => onAdjustQuantity(item.id, true)}>Add</span>
          <span onClick={() => onAdjustQuantity(item.id, false)}>Deduct</span>
          <span onClick={() => onRemoveItem(item.id)}>Remove</span>
        </div>
      </div>
    )
  );
};
export default ShoppingItem;
