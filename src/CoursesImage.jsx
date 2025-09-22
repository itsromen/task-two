export default function CoursesImage() {
  return (
    <div className=" justify-self-center p-1.5 m-1.5 rounded-[125px] border-3 border-pink-500 border-dashed grid grid-rows-2 grid-cols-2">
      <span className="relative 2xl:w-90 2xl:h-90 w-36 h-40 min-[360px]:w-38 min-[360px]:h-38 sm:w-48 sm:h-48 xl:w-54 xl:h-54 bg-[#d66fa6] rounded-br-[125px] rounded-tl-[125px] overflow-hidden">
        <img
          src="./purplewoman.png"
          alt="Woman wearing purple clothes"
          className="absolute bottom-0 h-[90%] object-cover"
        />
      </span>
      <span className="relative 2xl:w-90 2xl:h-90 min-[360px]:w-38 min-[360px]:h-38 sm:w-48 sm:h-48 xl:w-54 xl:h-54 bg-purple-500 rounded-bl-[125px] rounded-tr-[125px] overflow-hidden">
        <img
          src="./purplewoman.png"
          alt="Woman wearing purple clothes"
          className="absolute bottom-0 h-[90%] object-cover"
        />
      </span>
      <span className="relative 2xl:w-90 2xl:h-90 min-[360px]:w-38 min-[360px]:h-38 sm:w-48 sm:h-48 xl:w-54 xl:h-54 bg-purple-500 rounded-bl-[125px] rounded-tr-[125px] overflow-hidden">
        <img
          src="./purplewoman.png"
          alt="Woman wearing purple clothes"
          className="absolute bottom-0 h-[90%] object-cover"
        />
      </span>
      <span className="relative 2xl:w-90 2xl:h-90 min-[360px]:w-38 min-[360px]:h-38 sm:w-48 sm:h-48 xl:w-54 xl:h-54 bg-[#d66fa6] rounded-br-[125px] rounded-tl-[125px] overflow-hidden">
        <img
          src="./purplewoman.png"
          alt="Woman wearing purple clothes"
          className="absolute bottom-0 h-[90%] object-cover"
        />
      </span>
    </div>
  );
}
