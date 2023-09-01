import Button from "../ui/Button";

export default function NewsLetter() {
  return (
    <section
      style={{
        backgroundImage: `url(Email.png)`,
      }}
      className="mb-20 h-48 bg-contain bg-fixed bg-right bg-no-repeat text-center sm:py-10"
    >
      <h2 className="mb-2 bg-clip-text text-2xl font-semibold uppercase hover:cursor-pointer hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-800 hover:text-transparent">
        Subscribe for our newsletter!
      </h2>
      <p>Sign up for our latest news, products and offers.</p>
      <form className="mt-10">
        <input
          type="text"
          placeholder="Enter your email address"
          className="mr-5 rounded-full border border-amber-400 px-5 py-2 focus:outline-none focus:ring focus:ring-amber-500 focus:ring-offset-2 sm:w-96 sm:focus:w-1/2"
        />
        <Button>Subscribe</Button>
      </form>
    </section>
  );
}
