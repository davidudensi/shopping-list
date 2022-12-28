import { Fragment, useState } from "react";
import Items from "../../Components/Item/Items";
import BaseLayout from "../../Components/Layouts/BaseLayout";
import ShoppingList from "../../Components/ShoppingList/ShoppingList";
import availableItems from "../../Data/availableItems";
import selectedList from "../../Data/selectedList";

const CreateList = () => {
  const [shoppingList, setShoppingList] = useState(selectedList);

  const handleAddToList = (item) => {
    item = { ...item, quantity: 1 };
    const newItems = shoppingList.items;
    newItems.push(item);
    const newList = { ...shoppingList, items: newItems };
    setShoppingList(newList);
  };

  const handleAdjustQuantity = (id, incr) => {
    let newItems = shoppingList.items;
    newItems = newItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: incr
              ? item.quantity + 1
              : item.quantity - 1 > 0
              ? item.quantity - 1
              : item.quantity,
          }
        : item
    );
    setShoppingList({ ...shoppingList, items: newItems });
  };

  const handleRemoveItem = (id) => {
    let newItems = shoppingList.items;
    newItems = newItems.filter((item) => item.id !== id);
    setShoppingList({ ...shoppingList, items: newItems });
  };

  return (
    <Fragment>
      <BaseLayout>
        <div>
          <h1>CreateList</h1>
          <Items list={availableItems} onAddToList={handleAddToList} />
          <hr />
          <ShoppingList
            items={shoppingList.items}
            onAdjustQuantity={handleAdjustQuantity}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </BaseLayout>
    </Fragment>
  );
};

export default CreateList;
