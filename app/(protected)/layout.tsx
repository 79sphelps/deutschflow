import { getUserFromSession } from "@/lib/auth";
import { redirect } from "next/navigation";
// import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserFromSession();

  if (!user) {
    redirect("/signin");
  }

  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
