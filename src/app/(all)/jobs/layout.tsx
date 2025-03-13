import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Jobs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
