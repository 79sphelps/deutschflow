import { ReactNode } from "react";

export default function Headings({ children }: { children: ReactNode }) {
  return (
    <section className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-6">
      {children}
    </section>
  );
}
