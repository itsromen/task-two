import Button from "./Button";
import InstructorImage from "./InstructorImage";
import Perks from "./Perks";

export default function InstructorPerks() {
  return (
    <section className="h-screen grid grid-cols-2 text-black/80">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-2 w-[29em]">
          <h2 className="text-3xl font-semibold">
            If You Are A Certified Teacher Then{" "}
            <span className="text-purple-500/80">Become An Instructor</span>
          </h2>
          <p>
            Unlock the opportunity to inspire and educate by joining our team of
            instructors. If you're a certified teacher, elevate your impact and
            share your expertise with learners worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-2 pl-8">
          <h2 className="text-3xl font-semibold">Enjoy Many Perks</h2>
          <Perks />
        </div>
        <span className="pr-66">
          <Button py={0.5}>Become an Instructor</Button>
        </span>
      </div>
      <InstructorImage />
    </section>
  );
}
