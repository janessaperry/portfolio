import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logos/jp-logo.svg";

function Header() {
  return (
    <header className="w-full lg:container py-4 px-4 sm:px-6 flex items-center justify-between">
      <div>
        <Link to="/">
          <img src={logo} alt="Janessa Perry logo" className="w-20 h-14" />
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-4 sm:gap-x-6">
          <li>
            <NavLink
              to="/projects"
              className="lowercase font-heading font-semibold py-1 border-b-2 border-transparent hover:border-b-2 hover:border-seafoam-500"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="lowercase font-heading font-semibold py-1 border-b-2 border-transparent hover:border-b-2 hover:border-seafoam-500"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className="lowercase font-heading font-semibold py-1 border-b-2 border-transparent hover:border-b-2 hover:border-seafoam-500"
            >
              Experience
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
