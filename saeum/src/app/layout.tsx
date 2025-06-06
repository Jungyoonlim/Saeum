import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saeum",
  description: "Welcome to Saeum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
