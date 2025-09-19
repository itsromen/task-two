import Benefits from "./Benefits";
import CoursesImage from "./CoursesImage";
import Search from "./Search";

export default function SearchCourses() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center gap-6 pt-12">
        <h1 className="text-3xl font-semibold">Search Courses</h1>
        <Search />
      </div>
      <div className="mt-12 grid grid-cols-2 justify-items-start items-center">
        <CoursesImage />
        <Benefits />
      </div>
    </div>
  );
}
