const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="w-full bg-[#19192d] text-[#ccccd4]">

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Company Description */}
          <div>
            <p className="max-w-[300px] text-sm leading-6">
              Autozone Professional Ltd is a trusted motorbike spare parts
              supplier in Kampala, Uganda. We supply and sell quality parts
              to retailers and wholesalers, backed by trusted brands and
              reliable delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[1.5px] text-[#ed5929]">
              QUICK LINKS
            </h3>

            <ul className="mt-5 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#ed5929]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xs font-bold tracking-[1.5px] text-[#ed5929]">
              CONTACT INFO
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-6">
              <p>
                Opposite Mbogo Junior College, Mbogo Rd,
                <br />
                Kampala
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+256755829642"
                  className="transition-colors hover:text-[#ed5929]"
                >
                  0755 829642
                </a>
              </p>

              <p>
                Hours: Mon-Sat, Opens 8am - Closes 6pm
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xs font-bold tracking-[1.5px] text-[#ed5929]">
              FOLLOW US
            </h3>

            <div className="mt-5 flex items-center gap-3">

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#ed5929] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#ed5929] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.4c-.5-.1-1.5-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.7v2.6H7v3.5h2.8v9h3.7Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#ed5929] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#ed5929] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M21 6.1c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.6 1A4 4 0 0 0 11 9.2c0 .3 0 .6.1.9-3.3-.2-6.3-1.8-8.3-4.2-.4.6-.6 1.3-.6 2 0 1.4.7 2.6 1.8 3.3-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8A8.1 8.1 0 0 1 2.4 19H1.5a11.5 11.5 0 0 0 6.2 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.7-.6 1.3-1.2 1.8-2Z" />
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">

          <p className="text-xs text-[#9999a5]">
            © 2026 Autozone Professional Ltd. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;