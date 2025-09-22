export default function TestimonialCard({
  name,
  pic,
  rating,
  role,
  description,
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="bg-white rounded-2xl flex flex-col gap-2 sm:gap-4 p-2 sm:p-4">
      <div className="flex items-center gap-4">
        <img
          src={pic}
          alt={`Picture of ${name}`}
          className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-cover rounded-full border-4 border-purple-500"
        />
        <div>
          <h3 className="text-purple-500/80 font-bold">{name}</h3>
          <p className="text-black/80 text-[0.75rem]">{role}</p>
          <div className="flex">
            {stars.map((filled, idx) =>
              filled ? (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 text-yellow-500"
                >
                  <path d="M12 .587l3.668 7.431L24 9.753l-6 5.845L19.335 24 12 20.202 4.665 24 6 15.598 0 9.753l8.332-1.735L12 .587z" />
                </svg>
              ) : (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3 h-3 text-yellow-500"
                >
                  <path d="M12 .587l3.668 7.431L24 9.753l-6 5.845L19.335 24 12 20.202 4.665 24 6 15.598 0 9.753l8.332-1.735L12 .587z" />
                </svg>
              )
            )}
          </div>
        </div>
      </div>
      <p className="text-black/80 max-[400px]:text-xs w-[35ch] text-xs xl:text-sm">
        {description}
      </p>
    </div>
  );
}
