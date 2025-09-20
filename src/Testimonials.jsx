import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="h-[80vh] text-white/80 flex flex-col items-center justify-center gap-16">
      <div className="text-center w-[40%]">
        <h2 className="text-3xl font-semibold text-white/90">
          Student's Testimonials
        </h2>
        <p>
          Here's what our studnets have to say about their transformative
          learning experience: Real stories, real growth. Discover firsthand the
          impact our courses have had on their lives.
        </p>
      </div>
      <div className="flex gap-8">
        <TestimonialCard
          name="Alex Rodriguez"
          pic="./profile-pic1.jpg"
          rating={5}
          role="Web Developer"
          description="Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!"
        />
        <TestimonialCard
          name="Emily Chen"
          pic="./profile-pic2.jpg"
          rating={5}
          role="UI/UX Designer"
          description="Exceptional courses! The practical insights and flexible learning structure have been instrumental in my professional growth."
        />
        <TestimonialCard
          name="James Johnson"
          pic="./profile-pic3.jpg"
          rating={5}
          role="Web Developer"
          description="Highly recommend! The personalized feedback and real-world application in the courses have elevated my understanding..."
        />
      </div>
      <div className="flex items-center gap-4">
        <img
          src="./down-arrow.png"
          alt="Arrow pointing left"
          className="w-4 h-4 rotate-90 invert"
        />
        <p>01/15</p>
        <img
          src="./down-arrow.png"
          alt="Arrow pointing left"
          className="w-4 h-4 -rotate-90 invert"
        />
      </div>
    </section>
  );
}
