export default function Perks() {
  // max-[390px]:
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 font-medium max-md:text-xs 2xl:text-lg">
      <ul className="max-md:grid grid-rows-4">
        <li className="flex gap-2 items-center">
          <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-purple-500"></span>
          Global Impact
        </li>
        <li className="flex gap-2 items-center">
          <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-purple-500"></span>
          Flexible Schedule
        </li>
        <li className="flex gap-2 items-center">
          <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-purple-500"></span>
          Innovative Teaching Tools
        </li>
        <li className="flex gap-2 items-center">
          <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-purple-500"></span>
          Recognition And Reputation
        </li>
      </ul>
      <ul className="max-md:grid grid-rows-4 gap-4">
        <li className="flex gap-2 items-center">
          <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-purple-500"></span>
          Creative Freedom
        </li>
        <li className="flex gap-2 items-center">
          <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-purple-500"></span>
          Monetize Your Expertise
        </li>
        <li className="flex gap-2 items-center">
          <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-purple-500"></span>
          Professional Development
        </li>
        <li className="flex gap-2 items-center">
          <span className="shrink-0 inline-block w-2 h-2 rounded-full bg-purple-500"></span>
          Networking Opportunities
        </li>
      </ul>
    </div>
  );
}
