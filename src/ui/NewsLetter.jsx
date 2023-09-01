import Button from "./Button";

export default function NewsLetter() {
  return (
    <section
      style={{
        backgroundImage: `url(Email.png)`,
      }}
      className="bg-contain bg-fixed bg-left bg-no-repeat text-center sm:py-10"
    >
      <div>
        <h2 className="mb-2 bg-clip-text text-2xl font-semibold uppercase hover:cursor-pointer hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-800 hover:text-transparent">
          Subscribe for our newsletter!
        </h2>
        <p className="mb-10">
          Sign up for our latest news, products and offers.
        </p>
        <form className="">
          <input
            type="text"
            placeholder="Enter your email address"
            className="mr-5 rounded-full border border-amber-400 px-5 py-2 focus:outline-none focus:ring focus:ring-amber-500 focus:ring-offset-2 sm:w-96 sm:focus:w-1/2"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
