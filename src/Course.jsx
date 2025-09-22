export default function Course({
  image,
  category,
  title,
  rating,
  classes,
  students,
  cost,
  lecturer,
  lecturerPic,
}) {
  const book = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="20"
      height="20"
      fill="none"
      stroke="purple"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M32 12c-2 0-4-2-8-2H8c-2 0-4 2-4 4v36c0-2 2-4 4-4h16c4 0 6 2 8 2m0-36c2 0 4-2 8-2h16c2 0 4 2 4 4v36c0-2-2-4-4-4H40c-4 0-6 2-8 2" />
      <line x1="32" y1="12" x2="32" y2="52" />
    </svg>
  );

  const user = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="20"
      height="20"
      fill="none"
      stroke="purple"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="32" cy="20" r="12" />
      <path d="M12 54c0-10.5 9-18 20-18s20 7.5 20 18" />
    </svg>
  );

  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="16"
      height="16"
      fill="white"
    >
      <polygon points="25,2 31,18 48,18 34,29 39,46 25,36 11,46 16,29 2,18 19,18" />
    </svg>
  );

  return (
    <div className="bg-white p-2 rounded-2xl">
      <img
        src={image}
        alt={title}
        className="w-64 h-36 xl:w-72 xl:h-48 object-cover rounded-xl"
      />
      <div className="border-b border-gray-500/90 pb-4">
        <div className="flex py-4 justify-between items-center">
          <span className="text-black/90 text-sm bg-purple-500/30 px-3 rounded-sm flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-500"></span>
            {category}
          </span>
          <span className="flex items-center py-1 gap-2 bg-purple-500 px-3 rounded-lg text-sm">
            {star} {rating.toFixed(1)}
          </span>
        </div>
        <h2 className="font-bold text-black w-1/2">{title}</h2>
        <div className="flex gap-8 mt-4">
          <span className="text-black/90 flex gap-2 items-center text-sm">
            {book} {classes} classes
          </span>
          <span className="text-black/90 flex gap-2 items-center text-sm">
            {user} {students} students
          </span>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <span className="text-black/90 text-lg font-bold">
          ${cost.toFixed(2)}
        </span>
        <div className="flex items-center gap-2">
          <img
            src={lecturerPic}
            alt={`${lecturer} Profile Picture`}
            className="w-6 h-6 object-cover rounded-full"
          />
          <span className="text-purple-500 font-medium">{lecturer}</span>
        </div>
      </div>
    </div>
  );
}
