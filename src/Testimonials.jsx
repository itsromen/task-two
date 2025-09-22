import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    name: "Alex Rodriguez",
    pic: "./profile-pic1.jpg",
    rating: 5,
    role: "Web Developer",
    description:
      "Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!",
  },
  {
    name: "Emily Chen",
    pic: "./profile-pic2.jpg",
    rating: 5,
    role: "UI/UX Designer",
    description:
      "Exceptional courses! The practical insights and flexible learning structure have been instrumental in my professional growth.",
  },
  {
    name: "James Johnson",
    pic: "./profile-pic3.jpg",
    rating: 5,
    role: "Web Developer",
    description:
      "Highly recommend! The personalized feedback and real-world application in the courses have elevated my understanding...",
  },
  {
    name: "Sarah Parker",
    pic: "./profile-pic4.jpg",
    rating: 5,
    role: "Frontend Developer",
    description: "Loved the course content and hands-on projects!",
  },
  {
    name: "Michael Brown",
    pic: "./profile-pic5.jpg",
    rating: 5,
    role: "Data Analyst",
    description: "Clear explanations and practical examples. Very helpful!",
  },
  {
    name: "Linda Green",
    pic: "./profile-pic1.jpg",
    rating: 5,
    role: "Backend Developer",
    description: "Great platform to grow my skills quickly.",
  },
  {
    name: "Sarah Parker",
    pic: "./profile-pic4.jpg",
    rating: 5,
    role: "Frontend Developer",
    description: "Loved the course content and hands-on projects!",
  },
  {
    name: "Michael Brown",
    pic: "./profile-pic5.jpg",
    rating: 5,
    role: "Data Analyst",
    description: "Clear explanations and practical examples. Very helpful!",
  },
  {
    name: "Linda Green",
    pic: "./profile-pic1.jpg",
    rating: 5,
    role: "Backend Developer",
    description: "Great platform to grow my skills quickly.",
  },
  {
    name: "Sarah Parker",
    pic: "./profile-pic4.jpg",
    rating: 5,
    role: "Frontend Developer",
    description: "Loved the course content and hands-on projects!",
  },
  {
    name: "Michael Brown",
    pic: "./profile-pic5.jpg",
    rating: 5,
    role: "Data Analyst",
    description: "Clear explanations and practical examples. Very helpful!",
  },
  {
    name: "Linda Green",
    pic: "./profile-pic1.jpg",
    rating: 5,
    role: "Backend Developer",
    description: "Great platform to grow my skills quickly.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.ceil(testimonialsData.length / itemsPerPage) - 1;

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));

  return (
    <section className="max-lg:py-16 lg:h-[80vh] max-sm:py-12 text-white/80 flex flex-col items-center justify-center gap-16">
      <div className="text-center sm:w-[40%]">
        <h2 className="text-3xl font-semibold text-white/90">
          Student's Testimonials
        </h2>
        <p className="max-sm:text-xs px-2">
          Here's what our students have to say about their transformative
          learning experience: Real stories, real growth. Discover firsthand the
          impact our courses have had on their lives.
        </p>
      </div>

      <div className="relative w-3/5 overflow-hidden">
        <div
          className="flex transition-transform duration-300 items-stretch"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2 flex flex-col h-full"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <img
          src="./down-arrow.png"
          alt="Previous"
          className="w-4 h-4 rotate-90 invert cursor-pointer"
          onClick={handlePrev}
        />
        <p>
          {index + 1}/{maxIndex + 1}
        </p>
        <img
          src="./down-arrow.png"
          alt="Next"
          className="w-4 h-4 -rotate-90 invert cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </section>
  );
}
