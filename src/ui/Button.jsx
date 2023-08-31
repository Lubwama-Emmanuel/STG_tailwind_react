export default function Button({ children }) {
  return (
    <button className="hidden rounded-full bg-amber-400 px-4 py-2.5 font-bold uppercase transition-all duration-75 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-800 hover:text-stone-100 sm:inline-block">
      {children}
    </button>
  );
}
