export default function InstructorImage() {
  return (
    <div className="h-full grid items-center justify-items-center">
      <span className="border-4 border-dashed rounded-b-full p-1.5 pb-0 border-pink-500">
        <span className="inline-block h-[30rem] w-96 relative rounded-b-full bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden">
          <img
            src="./purplewoman.png"
            alt="Instructor Picture"
            className="h-[100%] absolute bottom-0 object-cover"
          />
        </span>
      </span>
    </div>
  );
}
