import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import deliveryTruck from "../../assets/delivery-truck.png";
import logo from "../../assets/Logo.jpeg";
import whatsappIcon from "../../assets/whatsapp.png";

const navigationItems = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="relative h-8 w-full overflow-hidden bg-[#171a21]">
        <img
          src={deliveryTruck}
          alt=""
          aria-hidden="true"
          className="delivery-truck-drive absolute bottom-0 h-8 w-8 object-contain"
        />
      </div>

      <header className="h-[90px] w-full border-b-[8px] border-[#171a21] bg-white shadow-sm">
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-3 sm:px-8 lg:px-[60px]">
        <Link
          to="/"
          aria-label="AutoZone home"
          className="inline-flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="AutoZone"
            className="h-[62px] w-[78px] object-fill sm:h-[78px] sm:w-[120px]"
          />
        </Link>

        <nav
          className="hidden shrink-0 items-center md:inline-flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `inline-flex h-[82px] items-center px-4 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "text-brand"
                      : "text-[#1e1e1e] hover:text-brand"
                  }`
                }
              >
                {item.label}
              </NavLink>

              {index < navigationItems.length - 1 && (
                <span
                  className="h-4 w-px bg-[#3d2d1d]/25"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </nav>

        <div className="inline-flex shrink-0 items-center gap-1 sm:gap-5">
          <a
            href="https://wa.me/256755829642?text=Hello"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Autozone Professional on WhatsApp"
            className="flex h-9 items-center justify-center gap-1 text-[11px] font-medium text-[#1e1e1e] transition-colors hover:text-[#25a852] sm:gap-2 sm:text-sm"
          >
            <span>Talk to Us</span>
            <img
              src={whatsappIcon}
              alt=""
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </a>

        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand/35 text-brand transition-colors hover:bg-brand/10 md:hidden sm:h-10 sm:w-10"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-[#3d2d1d]/15 bg-white px-5 py-3 shadow-md md:hidden"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-11 items-center border-b border-[#3d2d1d]/10 text-[15px] font-medium transition-colors last:border-b-0 ${
                    isActive ? "text-brand" : "text-[#1e1e1e] hover:text-brand"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}

export default Navbar;
