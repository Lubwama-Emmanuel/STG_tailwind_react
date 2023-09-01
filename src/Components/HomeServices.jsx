import Button from "../ui/Button";

export default function HomeServices() {
  return (
    <section className="mb-20">
      <h2 className="mb-1 bg-gradient-to-r from-amber-950 to-amber-400 bg-clip-text text-center text-3xl font-semibold text-transparent">
        Curious? This is what we do
      </h2>
      <p className="mb-10 text-center text-xl">
        These are highlighted services that we work on.
      </p>

      <div className="m-auto grid max-w-6xl gap-16 sm:grid-cols-3">
        <Service title={"software development"} svg={"software"} />
        <Service title={"Virtual Assistance"} svg={"virtual"} />
        <Service title={"research"} svg={"research"} />
      </div>
    </section>
  );
}

function Service({ title, svg }) {
  return (
    <div className="space-y-5 rounded-lg px-4 py-3 shadow-xl hover:shadow-2xl">
      <div className="">
        <img src={`${svg}.svg`} alt="vision" className="h-28" />
      </div>
      <h3 className="bg-clip-text font-semibold uppercase hover:cursor-pointer hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-800 hover:text-transparent">
        {title}
      </h3>
      <p className="text-[15px] leading-snug">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam modi
        repudiandae voluptates neque hic veniam nesciunt dolore aliquid totam,
        blanditiis quibusdam.
      </p>
      <Button>Learn more..</Button>
    </div>
  );
}
