export default function BenefitCard({
  logo,
  heading,
  text,
  width = 6,
  color = "purple-500",
}) {
  return (
    <div className="flex items-center gap-8">
      <span
        className={`self-start flex items-center justify-center w-14 h-14 rounded-full bg-${color}`}
      >
        <img src={logo} alt={heading} className={`invert w-${width} h-auto`} />
      </span>
      <div className="w-[45ch] flex flex-col gap-1">
        <h1 className="font-bold text-xl">{heading}</h1>
        <p className="leading-5">{text}</p>
      </div>
    </div>
  );
}
