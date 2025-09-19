export default function BenefitCard({
  logo,
  heading,
  text,
  width = 6,
  color = "purple-500",
}) {
  return (
    <div className="flex items-center lg:gap-4 xl:gap-8">
      <span
        className={`self-start flex items-center justify-center lg:w-10 xl:w-14 lg:h-10 xl:h-14 rounded-full bg-${color}`}
      >
        <img src={logo} alt={heading} className={`invert w-${width} h-auto`} />
      </span>
      <div className="w-[45ch] flex flex-col gap-1">
        <h1 className="font-bold lg:text-lg xl:text-xl">{heading}</h1>
        <p className="leading-5 lg:text-sm">{text}</p>
      </div>
    </div>
  );
}
