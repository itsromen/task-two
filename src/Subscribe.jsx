export default function Subscribe() {
  return (
    <section className="h-[60vh] bg-white flex items-center justify-center rounded-tl-[8em] rounded-br-[8em]">
      <div className="py-8 lg:px-20 xl:px-36 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-center flex flex-col items-center">
        <div className="text-white/90 w-2/3">
          <h2 className="text-3xl font-semibold">Get In Touch</h2>
          <p>
            Subscribe to us to get in touch and enjoy discounts, promos, and
            much more!
          </p>
        </div>
        <form className="flex gap-4 pt-8 w-full justify-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            className="bg-white p-3 px-6 w-full rounded-xl"
          />
          <button className="bg-white p-3 px-6 rounded-xl font-bold">
            <span className="text-xl bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Subscribe
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
