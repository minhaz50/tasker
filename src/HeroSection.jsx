import Frame from "./assets/taking-notes-scaled.jpg";

export default function HeroSection() {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center md:grid-cols-2">
          <div className="flex justify-center  md:order-2">
            <img
              className="rounded-xl animate-updown "
              src={Frame}
              width={426}
              height={10}
              alt="frame"
            />
          </div>
          <div>
            <h1 className="text-8xl font-bold animate-bounce text-yellow-500 tracking-wider italic ">
              Tasker
            </h1>
            <p className="text-lg mt-6 my-2 opacity-60  tracking-wider ">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
