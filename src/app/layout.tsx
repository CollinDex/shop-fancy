import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const os = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Fancy",
  description: "All you want and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={os.className}>{children}</body>
    </html>
  );
}
