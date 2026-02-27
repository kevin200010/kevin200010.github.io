import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/blogs", label: "Blogs" },
  { to: "/linkedin", label: "LinkedIn" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="mb-20 flex items-center justify-between py-6 relative">
      <div className="flex flex-shrink-0 items-center gap-6">
        <img src={logo} alt="Kevin Patel Logo" className="h-12 w-auto" />
        <div className="hidden md:flex gap-6 text-lg">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors hover:text-purple-400 ${
                location.pathname === to
                  ? "text-purple-400 border-b border-purple-400"
                  : "text-neutral-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/connect-kevin-patel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-purple-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kevin200010"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-purple-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.kaggle.com/kevinpatel12345"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-purple-400 transition-colors"
          >
            <SiKaggle />
          </a>
        </div>

        <button
          className="md:hidden ml-4 text-2xl text-neutral-300 hover:text-purple-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-xl border border-neutral-800 bg-neutral-950 p-4 flex flex-col gap-4 md:hidden shadow-xl">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`text-lg transition-colors hover:text-purple-400 ${
                location.pathname === to ? "text-purple-400" : "text-neutral-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
