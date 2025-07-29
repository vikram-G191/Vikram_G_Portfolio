import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
// Optional: Install lucide-react or use your own icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close drawer on navigation
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-[2vw] flex justify-between items-center py-4">
        <h1 className="text-xl font-bold text-indigo-700">MyPortfolio</h1>

        {/* Desktop menu */}
        <div>
        <ul className="hidden md:flex space-x-6 font-semibold text-gray-800 text-sm sm:text-base">
          {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="hover:text-indigo-600 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ?  <span className="text-2xl font-bold"><IoCloseCircleOutline size={"7vw"}/></span>:  <span className="text-2xl font-bold"><IoMdMenu size={"7vw"}/></span>}
           
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col px-[5vw] py-4 space-y-4 font-medium text-gray-700">
            {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="hover:text-indigo-600 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
