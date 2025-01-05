import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>My Payroll System</h2>

      <nav>
        <ul>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="about">
            About
          </Link>
          <Link className="link" to="contact">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
