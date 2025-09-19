export default function Button({
  textSize = 1,
  fill = true,
  children,
  py = 0.25,
}) {
  return (
    <>
      {fill ? (
        <button
          className={`text-[${textSize}rem] bg-gradient-to-br from-purple-500 to-pink-500 text-white px-[1em] py-[${py}em] rounded-sm`}
        >
          {children}
        </button>
      ) : (
        <button
          className={`text-[${textSize}rem] border-2 border-pink-500 px-[1em] py-[${py}em] rounded-sm`}
        >
          {children}
        </button>
      )}
    </>
  );
}
