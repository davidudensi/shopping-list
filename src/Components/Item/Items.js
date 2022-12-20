import Item from "./Item";

const Items = ({ list, onAddToList }) => {
  return (
    <div>
      {list &&
        list.map((item) => (
          <Item key={item.id} item={item} onAddToList={onAddToList} />
        ))}
    </div>
  );
};
export default Items;
