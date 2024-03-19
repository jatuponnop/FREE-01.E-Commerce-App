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
  return <div>{children}</div>;
}
