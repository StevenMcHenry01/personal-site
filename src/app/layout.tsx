import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
