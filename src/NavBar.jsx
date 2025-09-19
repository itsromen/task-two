import Button from "./Button";

export default function NavBar() {
  return (
    <nav className="hidden sm:flex w-[80%] justify-between items-center mt-6">
      <h2 className="font-bold text-3xl">Etech.</h2>
      <ul className="flex gap-8">
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
      <div className="flex gap-4">
        <Button fill={false}>Sign In</Button>
        <Button>Free Trial</Button>
      </div>
    </nav>
  );
}
