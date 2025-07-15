import type { Dispatch, SetStateAction } from "react";

interface CounterProps {
  sign: string;
  ariaLabel: string;
  setNumber: Dispatch<SetStateAction<number>>;
}

export default function Counter({ sign, ariaLabel, setNumber }: CounterProps) {
  return (
    <>
      <button
        aria-label={ariaLabel}
        className="w-10 h-10 border-2 border-white cursor-pointer select-none"
        onClick={() => setNumber((prev) => prev + (sign === "+" ? 1 : -1))}
      >
        {sign}
      </button>
    </>
  );
}
