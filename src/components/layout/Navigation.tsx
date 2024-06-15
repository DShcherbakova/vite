import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Counter</NavLink>
        </li>
        <li>
          <NavLink to="/library">Library</NavLink>
        </li>
        <li>
          <NavLink to="/sandwich">Sandwich</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;