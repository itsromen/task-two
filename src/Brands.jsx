export default function Brands() {
  return (
    <div className="overflow-clip max-[390px]:h-[60px] w-full h-[80px] lg:h-[80px] xl:h-[100px] flex gap-8 justify-center items-center bg-gradient-to-br from-purple-500 to-pink-500">
      <img
        src="./duolingo_logo.png"
        alt="Duolingo Logo"
        className="w-[150px] xl:w-[200px] object-contain object-cover invert opacity-80"
      />
      <img
        src="./magicleap_logo.png"
        alt="Duolingo Logo"
        className="w-[150px] xl:w-[200px] object-contain object-cover invert opacity-80"
      />
      <img
        src="./microsoft_logo.png"
        alt="Duolingo Logo"
        className="w-[150px] xl:w-[200px] object-contain object-cover invert opacity-80"
      />
      <img
        src="./codecov_logo.png"
        alt="Duolingo Logo"
        className="w-[150px] xl:w-[200px] object-contain object-cover opacity-80"
      />
      <img
        src="./usertest_logo.png"
        alt="Duolingo Logo"
        className="w-[150px] xl:w-[200px] object-contain object-cover opacity-80"
      />
    </div>
  );
}
