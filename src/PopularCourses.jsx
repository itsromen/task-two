import Course from "./Course";

export default function PopularCourses() {
  return (
    <div className="h-screen text-white/90 flex flex-col items-center bg-gradient-to-br from-purple-600 to-pink-400">
      <div className="text-center flex flex-col gap-4 lg:w-[40%] xl:w-[35%]">
        <h2 className="text-4xl font-bold lg:pt-8 xl:pt-12">
          Our Popular Courses
        </h2>
        <p className="leading-6">
          Discover our most sought-after courses, carefully curated to meet the
          demands of today's learners. Dive into engaging content crafted for
          success in every step of your educational journey.
        </p>
      </div>
      <div className="flex gap-8 lg:py-4 xl:py-8">
        <Course
          image="./webdev.jpg"
          category="Web Design"
          title="Web Design & Development"
          rating={4.9}
          classes={25}
          students={185}
          cost={560}
          lecturer="J. Morgan"
          lecturerPic="./profile-pic1.jpg"
        />
        <Course
          image="./wireframing.jpg"
          category="UI/UX Design"
          title="Wireframing & Prototyping"
          rating={5}
          classes={8}
          students={400}
          cost={160}
          lecturer="Jordan Re"
          lecturerPic="./profile-pic2.jpg"
        />
        <Course
          image="./datascience.jpg"
          category="Data Science"
          title="Python For Data Science"
          rating={4.9}
          classes={18}
          students={160}
          cost={432}
          lecturer="Alex Taylor"
          lecturerPic="./profile-pic3.jpg"
        />
      </div>
    </div>
  );
}
