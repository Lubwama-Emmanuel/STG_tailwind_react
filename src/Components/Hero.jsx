// import heroImage from "../../public/lion-simba-scaled.jpg";

import Button from "../ui/Button";

// const heroImage = "lion-simba.jpg";

export default function Hero() {
  return (
    <section
      style={{
        clipPath: "polygon(0 0%, 100% 0%, 100% 85%, 0% 100%)",
      }}
      className="w-full bg-gradient-to-b  from-amber-100  to-stone-100 pb-5 sm:pb-10"
    >
      <div className="m-auto py-10 text-center sm:w-3/4 sm:py-20">
        <h2 className="mb-5 text-2xl font-bold uppercase sm:mb-10 sm:mt-20 sm:text-6xl">
          looking to{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text text-transparent">
            tap{" "}
          </span>
          into<br></br> the{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text text-transparent">
            african talent{" "}
          </span>
          pool?
        </h2>
        <p className="m-auto mb-5 sm:mb-16 sm:w-3/4">
          Simba Talents is comprised of the top graduates of the finest
          universities in Africa are carefully selected through a rigorous
          hiring process. They are highly skilled and trained to provide quality
          services
        </p>
        <div>
          <Button>Lets talk</Button>
        </div>

        <h3 className="mb-2 sm:mb-4 sm:mt-20">Trusted by companies like</h3>
        <div className="flex items-center justify-center space-x-4 text-center">
          <div className="w-10 sm:w-20">
            <img src="/companies/marsbased-logo.png" alt="company 1" />
          </div>
          <div className="w-10 sm:w-20">
            <img src="/companies/vib-logo.png" alt="company 1" />
          </div>
          <div className="w-10 sm:w-20">
            <img src="/companies/wefox-logo.png" alt="company 1" />
          </div>
          <div className="w-10 sm:w-20">
            <img src="/companies/flaixfm-logo.png" alt="company 1" />
          </div>
        </div>
      </div>
    </section>
  );
}
