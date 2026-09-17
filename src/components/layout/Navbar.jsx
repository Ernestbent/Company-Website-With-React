import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.jpeg";
import searchIcon from "../../assets/search.png";

const navigationItems = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <header className="h-[90px] w-full border-b-[8px] border-[#171a21] bg-white">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-[60px]">
        <Link
          to="/"
          aria-label="AutoZone home"
          className="inline-flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="AutoZone"
            className="h-[78px] w-[120px] object-fill"
          />
        </Link>

        <nav
          className="hidden shrink-0 items-center gap-2 md:inline-flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
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
          ))}
        </nav>

        <div className="inline-flex shrink-0 items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-neutral-200"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-search"));
            }}
          >
            <img src={searchIcon} alt="" className="h-[18px] w-[18px]" />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
