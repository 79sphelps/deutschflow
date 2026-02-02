import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <section style={{ marginBottom: "2rem" }}>{children}</section>;
}
