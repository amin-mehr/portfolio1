import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "امین",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir bg-gray-900 text-white antialiased">{children}</body>
    </html>
  );
}
