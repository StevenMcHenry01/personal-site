import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Steven McHenry",
  description: "Steven McHenry's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Nav />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
