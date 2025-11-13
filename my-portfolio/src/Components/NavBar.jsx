import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import "../../src/index.css";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Desktop Menu */}
      {!isMobile && (
        <nav className="navbarDark flex items-center justify-between p-4 relative z-50">
          <h2>VB Portfolio</h2>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}



{isMobile && (
  <nav className="navbarOpen ">
    {!isMenuOpen && <h2>VB Portfolio</h2>}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-2 text-foreground z-50"
      aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
    >
      {isMenuOpen ? "" : <Menu size={30} />}
    </button>
  </nav>
)}


{isMobile && isMenuOpen && (
  <div className="navbarClosed">
    <ul className="space-y-6 text-2xl">
      {navItems.map((item) => (
        <li key={item.name}>
          <a href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};

export default Navbar;
