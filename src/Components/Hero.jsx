// import heroImage from "../../public/lion-simba-scaled.jpg";

import Button from "../ui/Button";

// const heroImage = "lion-simba.jpg";

export default function Hero() {
  return (
    <div className="m-auto space-y-8 py-10 text-center sm:mt-10 sm:w-3/4 sm:py-20">
      <h2 className="  text-2xl font-semibold uppercase sm:text-5xl">
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
      <p className="m-auto sm:w-3/4">
        Simba Talents is comprised of the top graduates of the finest
        universities in Africa are carefully selected through a rigorous hiring
        process. They are highly skilled and trained to provide quality services
      </p>
      <div>
        <Button>Lets talk</Button>
      </div>

      <h3>Trusted by companies like</h3>
    </div>
  );
}
