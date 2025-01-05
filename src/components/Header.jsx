import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>My Payroll System</h2>

      <nav>
        <ul>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="contact"
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
