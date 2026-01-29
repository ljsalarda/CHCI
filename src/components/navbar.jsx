import React from "react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false),
    );
  }, []);

  return (
    <nav className="sticky top-0 z-10 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-semibold text-gray-800">
            CHCI
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 items-center">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Publications
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpenNav(!openNav)}
            aria-label="Toggle navigation"
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {openNav && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Pages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Blocks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Docs
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
