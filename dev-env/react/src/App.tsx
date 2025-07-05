import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <span className="mb-8">{number}</span>
      <div className="flex gap-2">
        <button
          aria-label="increase button"
          className="w-10 h-10 border-2 border-white cursor-pointer select-none"
          onClick={() => setNumber((prev) => prev + 1)}
        >
          +
        </button>
        <button
          aria-label="decrease button"
          className="w-10 h-10 border-2 border-white cursor-pointer select-none"
          onClick={() => setNumber((prev) => prev - 1)}
        >
          -
        </button>
      </div>
    </section>
  );
}

export default App;
