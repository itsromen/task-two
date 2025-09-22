export default function Subscribe() {
  return (
    <section className="w-full max-[460px]:h-[35vh] min-[460px]:max-sm:h-[40vh] h-[60vh] bg-white flex items-center justify-center rounded-tl-[6em] rounded-br-[6em] sm:rounded-tl-[8em] sm:rounded-br-[8em] max-sm:text-xs">
      <div className="w-full max-[460px]:scale-70 min-[460px]:max-[924px]:scale-90 py-6 sm:py-8 px-20 xl:px-36 rounded-4xl sm:rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-center flex flex-col items-center">
        <div className="text-white/90 w-2/3">
          <h2 className="text-2xl sm:text-3xl font-semibold">Get In Touch</h2>
          <p>
            Subscribe to us to get in touch and enjoy discounts, promos, and
            much more!
          </p>
        </div>
        <form className="flex gap-4 pt-4 sm:pt-8 w-full justify-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            className="bg-white p-3 min-[350px]:px-6 sm:w-full rounded-xl"
          />
          <button className="bg-white py-3 px-4 sm:py-3 sm:px-6 rounded-xl font-bold">
            <span className="sm:text-xl bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Subscribe
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
