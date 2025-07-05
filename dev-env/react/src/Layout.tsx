import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen bg-[#151B23] text-[#F3F4F6]">
      {children}
    </div>
  );
}
