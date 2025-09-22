import Button from "./Button";
import InstructorImage from "./InstructorImage";
import Perks from "./Perks";

export default function InstructorPerks() {
  return (
    <section className="sm:h-screen sm:grid sm:grid-cols-2 flex flex-col py-10 px-6 sm:px-0 sm:py-0 text-black/80">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="min-sm:max-md:text-center flex flex-col gap-2 lg:w-[29em]">
          <h2 className="sm:text-3xl text-xl font-semibold">
            If You Are A Certified Teacher Then{" "}
            <span className="text-purple-500/80">Become An Instructor</span>
          </h2>
          <p className="text-sm md:text-base">
            Unlock the opportunity to inspire and educate by joining our team of
            instructors. If you're a certified teacher, elevate your impact and
            share your expertise with learners worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:pl-8">
          <h2 className="md:text-3xl text-xl font-semibold">
            Enjoy Many Perks
          </h2>
          <Perks />
        </div>
        <span className="max-sm:self-center lg:pr-66">
          <Button py={0.5}>Become an Instructor</Button>
        </span>
      </div>
      <InstructorImage />
    </section>
  );
}
