import Button from "./Button";
import InstructorImage from "./InstructorImage";
import Perks from "./Perks";

export default function InstructorPerks() {
  return (
    <section className="items-center md:h-screen md:grid md:grid-cols-2 flex flex-col py-10 px-6 md:px-0 md:py-0 text-black/80">
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 2xl:w-2/5 relative md:left-24 2xl:left-50">
        <div className="min-sm:max-md:text-center flex flex-col gap-2">
          <h2 className="md:text-3xl text-xl 2xl:text-4xl font-semibold">
            If You Are A Certified Teacher Then{" "}
            <span className="text-purple-500/80">Become An Instructor</span>
          </h2>
          <p className="text-sm md:text-base 2xl:text-lg">
            Unlock the opportunity to inspire and educate by joining our team of
            instructors. If you're a certified teacher, elevate your impact and
            share your expertise with learners worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="md:text-3xl text-xl 2xl:text-4xl font-semibold">
            Enjoy Many Perks
          </h2>
          <Perks />
        </div>
        <span className="md:self-start">
          <Button py={0.5}>Become an Instructor</Button>
        </span>
      </div>
      <InstructorImage />
    </section>
  );
}
