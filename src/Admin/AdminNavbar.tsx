import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Table,
  Layers,
  GalleryHorizontal,
  UserRound,
  ChevronDown
} from "lucide-react";
import logo from "../assets/SFM Logo enhanced.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/dashboard", icon: Home },
    { name: "Contact Table", path: "/contact-table", icon: Table },
    { name: "Collection Table", path: "/collection-table", icon: Layers },
    { name: "Gallery Table", path: "/gallery-table", icon: GalleryHorizontal },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
const handleLogout = () => {
  localStorage.removeItem("isAdminLoggedIn");
  navigate("/login");
};


  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{ backgroundColor: "#850E35" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Admin Panel"
              className="h-34 w-44 object-contain"
            />
            <span className="font-serif text-2xl font-semibold tracking-tight text-white">
              Admin Panel
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors relative
                    ${isActive(link.path) ? "text-yellow-300" : "text-white hover:text-gray-200"}
                  `}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{link.name}</span>

                  {isActive(link.path) && (
                    <span className="absolute -bottom-[20px] left-0 right-0 h-0.5 bg-yellow-300" />
                  )}
                </Link>
              );
            })}

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center space-x-2 text-white hover:text-gray-200"
              >
                <UserRound className="h-5 w-5" />
                <ChevronDown className="h-4 w-4" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 rounded-md shadow-lg bg-white text-black py-2">
                  
                  <Link
                    to="/change-password"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setProfileOpen(false)}
                  >
                    Change Password
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="block text-left w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 text-sm font-medium px-3 py-2 rounded 
                      ${isActive(link.path)
                        ? "bg-white/20 text-yellow-300"
                        : "text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              {/* Profile Options in Mobile */}
              <div className="border-t border-white/20 pt-4">
                <Link
                  to="/change-password"
                  onClick={() => setIsOpen(false)}
                  className="block text-white px-3 py-2 hover:bg-white/10"
                >
                  Change Password
                </Link>
                <button
                  onClick={handleLogout}
                  className="block text-left text-white px-3 py-2 hover:bg-white/10 w-full"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
