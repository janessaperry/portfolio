import { NavLink, Link } from "react-router";
import logo from "../assets/logos/jp-logo.svg";

function Header() {
  return (
    <header className="w-full md:container py-4 px-4 sm:px-6 flex items-center justify-between">
      <div>
        <Link to="/">
          <img src={logo} alt="Janessa Perry logo" className="w-20 h-14" />
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-4 sm:gap-x-6">
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
