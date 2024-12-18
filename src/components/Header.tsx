import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logos/jp-logo.svg";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0  z-10 ${
        isScrolled && "bg-blue-700/60 backdrop-blur-sm"
      }`}
    >
      <div className="lg:container py-6 px-4 sm:px-6 flex items-center justify-between mx-auto">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Janessa Perry logo"
              className={`${
                isScrolled && "md:w-12 md:h-8"
              } w-12 h-8 md:w-20 md:h-14 transition-all ease-in-out`}
            />
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
      </div>
    </header>
  );
}

export default Header;
