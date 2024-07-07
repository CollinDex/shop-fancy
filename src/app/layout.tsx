import type { Metadata } from "next";
import { Inter, Roboto, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });
export const popins = Poppins({
  weight: ['400', '500', '700'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the character subsets you want to use
  display: 'swap', // Specify font display strategy
});
export const os = Open_Sans({ subsets: ["latin"] });
export const roboto = Roboto({
  weight: ['400', '500', '700'], // Specify the weights you want to use
  subsets: ['latin'], // Specify the character subsets you want to use
  display: 'swap', // Specify font display strategy
});

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
