import { Link } from "react-router-dom";

const Nav = ({ to, text }) => {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default Nav;
