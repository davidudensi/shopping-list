import navs from "../../Data/BaseNavs";
import Navbar from "../Navs/Navbar";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar navs={navs} />
      {children}
    </div>
  );
};
export default BaseLayout;
