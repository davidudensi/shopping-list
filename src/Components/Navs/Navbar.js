import { Fragment } from "react";
import Nav from "./Nav";

const Navbar = ({ navs }) => {
  return (
    <Fragment>
      <nav>
        {navs.map((n, index) => {
          return <Nav key={index} to={n.to} text={n.text} />;
        })}
      </nav>
    </Fragment>
  );
};

export default Navbar;
