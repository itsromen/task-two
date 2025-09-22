import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <div className="justify-self-center min-[924px]:w-9/10 max-sm:px-4 text-black/70 flex flex-col gap-4">
      <h1 className="font-bold max-[380px]:text-xl 2xl:text-4xl text-2xl sm:text-3xl w-[22ch]">
        <span className="text-purple-500/70">Benefits</span> From Our Online
        Learning
      </h1>
      <div className="grid grid-rows-4 max-sm:text-xs sm:flex sm:flex-col gap-4">
        <BenefitCard
          width={8}
          logo="./graduate-hat.png"
          heading="Online Degrees"
          text="Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities."
        />
        <BenefitCard
          color="[#d66fa6]"
          logo="./open-book.png"
          heading="Short Courses"
          text="Ehance your skills with our concise and focused short courses, designed for quick and effective learning."
        />
        <BenefitCard
          logo="./user.png"
          heading="Training From Experts"
          text="Immerse yourself in knowledge with industry experts guiding you through hands-on experience."
        />
        <BenefitCard
          color="[#d66fa6]"
          logo="./play-button-arrowhead.png"
          heading="1.5k+ Video Courses"
          text="Dive into a vast library of over 1.5k video courses covering many subjects, offering a visual learning experience."
        />
      </div>
    </div>
  );
}
