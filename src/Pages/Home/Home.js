import { Fragment, useState } from "react";
import Items from "../../Components/Item/Items";
import BaseLayout from "../../Components/Layouts/BaseLayout";
import styles from "./Home.module.scss";
import availableItems from "../../Data/availableItems";
import ShoppingList from "../../Components/ShoppingList/ShoppingList";
import selectedList from "../../Data/selectedList";

const Home = () => {
  const [shoppingList, setShoppingList] = useState(selectedList);
  console.log(shoppingList)

  return (
    <Fragment>
      <BaseLayout>
        <div className={styles.home}>
          <div className={styles.items}>
            <h2>Available Items</h2>
            <Items list={availableItems} />
          </div>
          <div className={styles.list}>
          <h2>Shopping List</h2>
            <ShoppingList items={shoppingList.items} />
          </div>
        </div>
      </BaseLayout>
    </Fragment>
  );
};

export default Home;
