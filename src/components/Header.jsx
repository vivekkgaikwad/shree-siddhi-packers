import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      {/* LOGO + BRAND */}
      <div className="logo">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Shree Siddhi Home Packers & Movers"
          />
        </Link>
      </div>

      {/* NAVIGATION */}
      <nav className="header-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/services">
          Services
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
