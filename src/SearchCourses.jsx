import Benefits from "./Benefits";
import CoursesImage from "./CoursesImage";
import Search from "./Search";

export default function SearchCourses() {
  return (
    <div className="xl:h-screen">
      <div className="flex flex-col items-center gap-6 pt-12">
        <h1 className="text-3xl font-semibold">Search Courses</h1>
        <Search />
      </div>
      <div className="min-sm:max-[924px]:gap-4 mb-8 min-[924px]:mt-6 xl:mt-12 grid max-[924px]:grid-rows-2 min-[924px]:grid-cols-2 justify-items-start items-center">
        <CoursesImage />
        <Benefits />
      </div>
    </div>
  );
}
