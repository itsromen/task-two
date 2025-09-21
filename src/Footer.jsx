export default function Footer({ styles = "" }) {
  return (
    <footer className={`px-32 pt-16 text-white/85 ${styles}`}>
      <div className="grid grid-cols-5 gap-12">
        <div className="grid grid-rows-5">
          <h2 className="lg:text-2xl xl:text-3xl font-semibold">Etech.</h2>
          <p className="lg:text-xs xl:text-sm row-span-3">
            Explore a transformative approach to skill development on our online
            learning platform.
          </p>
          <div className="flex gap-2">
            <a href="#">
              <span className="inline-block bg-white p-1 rounded-full">
                <img
                  src="./facebook-svgrepo-com.svg"
                  alt="Facebook Icon"
                  className="h-4 w-4"
                />
              </span>
            </a>
            <a href="#">
              <span className="inline-block bg-white p-1 rounded-full">
                <img
                  src="./whatsapp-svgrepo-com.svg"
                  alt="Whatsapp Icon"
                  className="h-4 w-4"
                />
              </span>
            </a>
            <a href="#">
              <span className="inline-block bg-white p-1 rounded-full">
                <img
                  src="./twitter-svgrepo-com.svg"
                  alt="Twitter Icon"
                  className="h-4 w-4"
                />
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-rows-5 lg:text-xs xl:text-sm">
          <h3 className="text-lg font-semibold">Company</h3>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Community</a>
          <a href="#">Testimonials</a>
        </div>
        <div className="grid grid-rows-5 lg:text-xs xl:text-sm">
          <h3 className="text-lg font-semibold">Support</h3>
          <a href="#">Help Center</a>
          <a href="#">Tweet @ Us</a>
          <a href="#">Webinars</a>
          <a href="#">Feedback</a>
        </div>
        <div className="grid grid-rows-5 lg:text-xs xl:text-sm">
          <h3 className="text-lg font-semibold">Links</h3>
          <a href="#">Courses</a>
          <a href="#">Become Teacher</a>
          <a href="#">Service</a>
          <a href="#">All in One</a>
        </div>
        <div className="grid grid-rows-5 lg:text-xs xl:text-sm">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>+1(555) 123-4567</p>
          <p>etechinfo@gmail.com</p>
        </div>
      </div>
      <div className="relative py-6 mt-6">
        <div
          className="absolute inset-x-0 top-0 h-1 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6), rgba(255,255,255,0))",
          }}
        ></div>

        <div className="text-center relative lg:text-xs xl:text-sm">
          <p>Copyright &copy; 2023 Etech. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
