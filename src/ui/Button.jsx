export default function Button({ children }) {
  return (
    <button className="hidden rounded-full border border-amber-400 bg-gradient-to-r from-amber-950 to-amber-400 bg-clip-text px-4 py-2.5 font-semibold uppercase tracking-wide text-transparent transition-all duration-75 hover:border-amber-600 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-800 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 sm:inline-block">
      {children}
    </button>
  );
}
