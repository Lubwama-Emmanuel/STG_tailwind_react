export default function Vision() {
  return (
    <section className="sm:py-15 m-auto w-4/5 sm:grid sm:grid-cols-[2fr_1fr] sm:gap-10">
      <div>
        <h3 className="mb-4 bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text text-3xl font-semibold text-transparent">
          Our vision
        </h3>
        <p className="pb-5 text-justify text-lg">
          At Simba Talents, we have a unique mission – to empower the unemployed
          and underemployed in Africa by giving them opportunities to showcase
          their skills. Our team is made up of exceptional graduates from top
          universities and offers competitive pricing and high-quality work,
          making it easy for businesses to find the perfect fit for their needs.
          Whether you’re looking for a one-time project or ongoing support,
          we’ve got you covered!
        </p>
      </div>
      <div>
        <img src="vision.svg" alt="vision" />
      </div>
    </section>
  );
}
