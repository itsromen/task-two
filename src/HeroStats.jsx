export default function HeroStats() {
  return (
    <div className="text-black/75 flex items-center justify-center relative w-full h-full">
      <span className="inline-block border-dashed rounded-full border-4 border-pink-500 p-1 bg-white">
        <span className="h-64 w-64 sm:h-86 sm:w-86 flex rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></span>
      </span>
      <img
        src="./purplewoman.png"
        alt="Woman wearing purple clothes"
        className="absolute h-full object-cover"
      />
      <div className="max-sm:scale-75 -left-10 top-19 absolute min-[450px]:max-[560px]:-left-1 min-[450px]:max-[560px]:top-17 min-[560px]:max-[924px]:top-24 min-[560px]:max-[924px]:left-8 min-[924px]:-left-8 min-[924px]:top-42 xl:left-10 xl:top-42 flex items-center gap-4 rounded-lg py-1 px-4 bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
          <img
            src="./arrows.png "
            alt="Arrow"
            className="w-6 invert -rotate-30"
          />
        </span>
        <div className="flex flex-col -space-y-1">
          <h2 className="text-center font-bold text-lg sm:text-xl text-purple-500">
            50+
          </h2>
          <p className="max-sm:text-xs">Online Courses</p>
        </div>
      </div>
      <div className="max-sm:scale-75 absolute min-[450px]:max-[560px]:-right-2 min-[560px]:max-[924px]:right-12 max-sm:-right-10 min-[924px]:-right-8 xl:right-8 xl:top-50 flex flex-col items-center gap-2 rounded-lg py-2 sm:py-4 px-6 sm:px-8 bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col -space-y-1">
          <h2 className="text-center font-bold text-lg sm:text-xl text-purple-500">
            10k+
          </h2>
          <p>Online Students</p>
        </div>
        <div className="flex -space-x-3">
          <img
            src="./profile-pic1.jpg"
            alt="Profile Picture"
            className="w-8 h-8 object-cover rounded-full"
          />
          <img
            src="./profile-pic2.jpg"
            alt="Profile Picture"
            className="w-8 h-8 object-cover rounded-full"
          />
          <img
            src="./profile-pic3.jpg"
            alt="Profile Picture"
            className="w-8 h-8 object-cover rounded-full"
          />
          <img
            src="./profile-pic4.jpg"
            alt="Profile Picture"
            className="w-8 h-8 object-cover rounded-full"
          />
          <img
            src="./profile-pic5.jpg"
            alt="Profile Picture"
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>
      </div>
      <div className="max-sm:scale-75 absolute max-sm:-left-8 max-sm:bottom-8 min-[560px]:max-[924px]:left-16 min-[560px]:max-[924px]:bottom-8 min-[924px]:left-2 xl:left-20 bottom-20 flex flex-col items-center gap-3 rounded-lg py-3 px-4 bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
        <div className="flex gap-4">
          <img
            src="./profile-pic3.jpg"
            alt="Profile Picture"
            className="w-8 h-8 object-cover rounded-full"
          />
          <div>
            <h2 className="text-sm text-center font-bold text-purple-500">
              UI Design Class
            </h2>
            <p className="text-xs">Today at 02:00 Pm</p>
          </div>
        </div>
        <button className="ml-7 text-sm bg-purple-500 text-white py-1 sm:py-2 px-2 sm:px-4 rounded-sm transition-colors hover:bg-purple-600">
          Join now
        </button>
      </div>
    </div>
  );
}
