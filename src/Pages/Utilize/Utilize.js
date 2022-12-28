import { Fragment } from "react";
import BaseLayout from "../../Components/Layouts/BaseLayout";
import availableItems from "../../Data/availableItems";
import Items from "../../Components/Item/Items";

const Utilize = () => {
  return (
    <Fragment>
      <BaseLayout>
        <div>
          <h1>Utilize</h1>
          <Items list={availableItems} />
        </div>
      </BaseLayout>
    </Fragment>
  );
};
export default Utilize;
