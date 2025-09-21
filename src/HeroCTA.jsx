import Button from "./Button";

export default function HeroCTA() {
  return (
    <div className="pt-8 self-center flex flex-col gap-8 text-center sm:text-left">
      <h1 className="text-black/75 font-bold lg:w-[90%] xl:w-full text-[2.5rem] sm:text-[3.5rem] leading-none">
        Develop your skills in a new and unique way
      </h1>
      <p className="text-black/75 text-[1.05rem]">
        Explore a transformative approach to skill development on our online
        learning platform. Uncover a new realm of learning experiences and
        elevate your expertise in unique ways
      </p>
      <div className="flex items-center gap-16">
        <Button py={0.5}>Enroll Now</Button>
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block rounded-full border-2 border-pink-500 p-1 bg-white">
            <span className="flex items-center pl-[2px] justify-center w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <img
                src="./play-button-arrowhead.png"
                alt="Play"
                className="w-3 h-3 invert"
              />
            </span>
          </span>

          <span className="text-black/80 underline">What's Etech?</span>
        </a>
      </div>
    </div>
  );
}
