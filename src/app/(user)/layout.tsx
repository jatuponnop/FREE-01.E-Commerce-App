import Footer from "@/components/user/footer/Footer";
import Header from "@/components/user/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-Commerce Application",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
