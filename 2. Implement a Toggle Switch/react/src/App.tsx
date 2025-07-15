import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <span>{isClicked ? "클릭됨" : "클릭해보세요"}</span>

      <button
        className="cursor-pointer border-2 border-white rounded-md p-2 mt-4"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        클릭
      </button>
    </section>
  );
}

export default App;
