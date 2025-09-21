export default function BenefitCard({
  logo,
  heading,
  text,
  width = 6,
  color = "purple-500",
}) {
  return (
    <div className="max-sm:grid max-sm:grid-cols-[2em_auto] sm:flex sm:items-center gap-4 lg:gap-4 xl:gap-8">
      <span
        className={`self-start flex items-center justify-center max-sm:w-9 max-sm:h-9 lg:w-10 xl:w-14 lg:h-10 xl:h-14 rounded-full bg-${color}`}
      >
        <img src={logo} alt={heading} className={`invert w-4 sm:w-${width} h-auto`} />
      </span>
      <div className="sm:w-[45ch] flex flex-col gap-1">
        <h1 className="font-bold lg:text-lg xl:text-xl">{heading}</h1>
        <p className="leading-5 lg:text-sm">{text}</p>
      </div>
    </div>
  );
}
