export default function Button({
  textSize = 1,
  fill = true,
  children,
  py = 0.25,
}) {
  return fill ? (
    <button
      style={{
        fontSize: `${textSize}rem`,
        paddingTop: `${py}em`,
        paddingBottom: `${py}em`,
      }}
      className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 rounded-sm"
    >
      {children}
    </button>
  ) : (
    <button
      style={{
        fontSize: `${textSize}rem`,
        paddingTop: `${py}em`,
        paddingBottom: `${py}em`,
      }}
      className="border-2 border-pink-500 px-4 rounded-sm"
    >
      {children}
    </button>
  );
}
