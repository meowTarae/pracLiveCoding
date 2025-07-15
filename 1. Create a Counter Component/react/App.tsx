import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [number, setNumber] = useState<number>(0);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <span className="mb-8">{number}</span>
      <div className="flex gap-2">
        <Counter sign="+" ariaLabel="increase button" setNumber={setNumber} />
        <Counter sign="-" ariaLabel="decrease button" setNumber={setNumber} />
      </div>
    </section>
  );
}

export default App;
