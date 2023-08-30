import Button from "../ui/Button";
import Links from "../ui/Links";

export default function Header({ clicked, setClicked }) {
  return (
    <header className="flex items-center justify-between bg-transparent px-5 py-4 shadow-md ">
      <div>
        <img src="logo_2.webp" alt="simba_talents_logo" className="" />
      </div>
      <div>
        <Links styles={"hidden items-center justify-between text-xl sm:flex"} />
      </div>
      <Button>{"get in Touch"}</Button>

      {clicked ? (
        <div onClick={() => setClicked((value) => !value)}>
          <h2 className="text-5xl uppercase text-stone-700">x</h2>
        </div>
      ) : (
        <div
          className="sm:hidden"
          onClick={() => setClicked((value) => !value)}
        >
          <div className="mb-1 h-1 w-8 bg-stone-700"></div>
          <div className="mb-1 h-1 w-8 bg-stone-700"></div>
          <div className="mb-1 h-1 w-8 bg-stone-700"></div>
          <div className="h-1 w-8 bg-stone-700"></div>
        </div>
      )}
    </header>
  );
}
