import { Inter } from "next/font/google";
import "./globals.scss";
import { Nav } from "./nav";
const inter = Inter({ subsets: ["latin"], display: "swap" });

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
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
