export default function CoursesImage() {
  return (
    <div className="max-sm:h-4/5 max-sm:w-9/10 xl:h-full justify-self-center p-1.5 rounded-[125px] border-3 border-pink-500 border-dashed grid grid-rows-2 grid-cols-2">
      <span className="relative lg:w-48 lg:h-48 xl:w-54 xl:h-54 bg-[#d66fa6] rounded-br-[125px] rounded-tl-[125px] overflow-hidden">
        <img
          src="./purplewoman.png"
          alt="Woman wearing purple clothes"
          className="absolute bottom-0 h-[90%] object-cover"
        />
      </span>
      <span className="relative lg:w-48 lg:h-48 xl:w-54 xl:h-54 bg-purple-500 rounded-bl-[125px] rounded-tr-[125px] overflow-hidden">
        <img
          src="./purplewoman.png"
          alt="Woman wearing purple clothes"
          className="absolute bottom-0 h-[90%] object-cover"
        />
      </span>
      <span className="relative lg:w-48 lg:h-48 xl:w-54 xl:h-54 bg-purple-500 rounded-bl-[125px] rounded-tr-[125px] overflow-hidden">
        <img
          src="./purplewoman.png"
          alt="Woman wearing purple clothes"
          className="absolute bottom-0 h-[90%] object-cover"
        />
      </span>
      <span className="relative lg:w-48 lg:h-48 xl:w-54 xl:h-54 bg-[#d66fa6] rounded-br-[125px] rounded-tl-[125px] overflow-hidden">
        <img
          src="./purplewoman.png"
          alt="Woman wearing purple clothes"
          className="absolute bottom-0 h-[90%] object-cover"
        />
      </span>
    </div>
  );
}
