const Item = ({ item, onAddToList }) => {
  return (
    <div onClick={() => onAddToList(item)}>
      <img src={item && item.image} />
      <label>{item && item.name}</label>
    </div>
  );
};
export default Item;
