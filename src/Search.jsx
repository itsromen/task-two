import Button from "./Button";

export default function Search() {
  return (
    <form className="relative flex w-full justify-center px-4">
      <label className="relative" htmlFor="courses">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 min-[360px]:w-6 min-[360px]:h-6 absolute top-2 left-3"
          fill="#c241c0ff"
          viewBox="0 0 24 24"
        >
          <path d="M10 2a8 8 0 105.293 14.293l5.414 5.414 1.414-1.414-5.414-5.414A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
        </svg>
      </label>
      <input
        className="max-[360px]:text-xs w-full 2xl:max-w-[15%] max-w-[40ch] pl-10 pr-2 py-2 mr-4 rounded-lg"
        type="search"
        name="courses"
        id="courses"
        placeholder="Search for over 50+ courses"
      />
      <Button>Search</Button>
    </form>
  );
}
