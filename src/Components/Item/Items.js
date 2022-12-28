import Item from "./Item";
import styles from "./Items.module.scss"

const Items = ({ list, onAddToList }) => {
  return (
    <div className={styles.items}>
      {list &&
        list.map((item) => (
          <Item key={item.id} item={item} onAddToList={onAddToList} />
        ))}
    </div>
  );
};
export default Items;
