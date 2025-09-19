import Header from "./Header.jsx";
import InstructorPerks from "./InstructorPerks.jsx";
import PopularCourses from "./PopularCourses.jsx";
import SearchCourses from "./SearchCourses.jsx";
import Testimonials from "./Testimonials.jsx";

export default function App() {
  return (
    <>
      <Header />
      <SearchCourses />
      <PopularCourses />
      <InstructorPerks />
      <Testimonials />
    </>
  );
}
