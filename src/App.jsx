import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import InstructorPerks from "./InstructorPerks.jsx";
import PopularCourses from "./PopularCourses.jsx";
import SearchCourses from "./SearchCourses.jsx";
import Subscribe from "./Subscribe.jsx";
import Testimonials from "./Testimonials.jsx";

export default function App() {
  return (
    <>
      <Header />
      <SearchCourses />
      <PopularCourses />
      <InstructorPerks />
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500">
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
