import { useState } from "react";
import Button from "./Button";

export default function NavBar({ onLogout, onNavigate }) {
  function handleSignout() {
    localStorage.clear();
    onLogout(false);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative sm:flex w-[90%] sm:w-[80%] justify-between items-center mt-5 sm:mt-6">
      <h2 className="font-bold text-3xl">Etech.</h2>
      <ul className="hidden lg:flex gap-8">
        <li>
          <span className="mr-2">Courses</span>
          <img
            src="./down-arrow.png"
            alt="Arrow Pointing Down"
            width="12px"
            className="inline"
          />
        </li>
        <li>
          <span className="mr-2">Teachers</span>
          <img
            src="./down-arrow.png"
            alt="Arrow Pointing Down"
            width="12px"
            className="inline"
          />
        </li>
        <li>
          <span className="mr-2">Offers</span>
          <img
            src="./down-arrow.png"
            alt="Arrow Pointing Down"
            width="12px"
            className="inline"
          />
        </li>
        <li>Contact</li>
      </ul>
      <div className="hidden lg:flex gap-4">
        <Button clickEvent={handleSignout} fill={false}>
          Sign Out
        </Button>
        <span className="flex" onClick={() => onNavigate("products")}>
          <Button>Products</Button>
        </span>
      </div>
      <button
        className="lg:hidden absolute top-0 right-0"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <img src="lines.svg" alt="Navbar" className="w-6" />
      </button>

      <div
        className={`z-1 fixed inset-0 bg-black/20 transition-opacity duration-300
              ${
                isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-dvh w-[175px] bg-white p-4 shadow-lg
                transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="grid grid-rows-6 gap-2 justify-items-center">
            <li>
              <span className="mr-2">Courses</span>
              <img
                src="./down-arrow.png"
                alt="Arrow Down"
                width="12px"
                className="inline"
              />
            </li>
            <li>
              <span className="mr-2">Teachers</span>
              <img
                src="./down-arrow.png"
                alt="Arrow Down"
                width="12px"
                className="inline"
              />
            </li>
            <li>
              <span className="mr-2">Offers</span>
              <img
                src="./down-arrow.png"
                alt="Arrow Down"
                width="12px"
                className="inline"
              />
            </li>
            <li>Contact</li>
            <li className="self-stretch">
              <Button clickEvent={handleSignout} fill={false}>
                Sign Out
              </Button>
            </li>
            <li className="self-stretch">
              <Button clickEvent={() => onNavigate("products")}>
                Products
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
