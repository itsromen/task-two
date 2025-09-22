import Button from "./Button";

export default function NavBar({ onLogout, onNavigate }) {
  function handleSignout() {
    localStorage.clear();
    onLogout(false);
  }

  return (
    <nav className="sm:flex w-[90%] sm:w-[80%] justify-between items-center mt-3 sm:mt-6">
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
      <div className="hidden sm:flex gap-4">
        <Button clickEvent={handleSignout} fill={false}>
          Sign Out
        </Button>
        <span className="flex" onClick={() => onNavigate("products")}>
          <Button>Products</Button>
        </span>
      </div>
    </nav>
  );
}
