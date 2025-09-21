import Benefits from "./Benefits";
import CoursesImage from "./CoursesImage";
import Search from "./Search";

export default function SearchCourses() {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-6 pt-12">
        <h1 className="text-3xl font-semibold">Search Courses</h1>
        <Search />
      </div>
      <div className="mb-8 lg:mt-6 xl:mt-12 grid max-sm:grid-rows-2 sm:grid-cols-2 justify-items-start items-center">
        <CoursesImage />
        <Benefits />
      </div>
    </div>
  );
}
