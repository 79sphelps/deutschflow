import { getUserFromSession } from "@/lib/auth";
import { redirect } from "next/navigation";
// import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { User } from "@/hooks/useUser";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: User = await getUserFromSession() as unknown as User;

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
