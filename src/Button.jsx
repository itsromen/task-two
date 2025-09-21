export default function Button({
  textSize = 1,
  fill = true,
  children,
  py = 0.25,
  styles = "",
  clickEvent = null,
}) {
  return fill ? (
    <button
      onClick={clickEvent}
      style={{
        fontSize: `${textSize}rem`,
        paddingTop: `${py}em`,
        paddingBottom: `${py}em`,
      }}
      className={`cursor-pointer bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 rounded-sm ${styles}`}
    >
      {children}
    </button>
  ) : (
    <button
      onClick={clickEvent}
      style={{
        fontSize: `${textSize}rem`,
        paddingTop: `${py}em`,
        paddingBottom: `${py}em`,
      }}
      className="cursor-pointer border-2 border-pink-500 px-4 rounded-sm"
    >
      {children}
    </button>
  );
}
