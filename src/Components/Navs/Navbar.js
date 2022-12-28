import { Fragment } from "react";
import Nav from "./Nav";
import styles from "./Navbar.module.scss"

const Navbar = ({ navs }) => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <ul>
          {navs.map((n, index) => {
            return <Nav key={index} to={n.to} text={n.text} />;
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
