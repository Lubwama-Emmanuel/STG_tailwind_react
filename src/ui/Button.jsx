export default function Button({ children }) {
  return (
    <button className="hidden bg-amber-400 px-4 py-2.5 uppercase sm:inline-block ">
      {children}
    </button>
  );
}
