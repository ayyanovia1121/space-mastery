import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins  = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
 })
export const metadata: Metadata = {
  title: "Clouvia- Built to Keep & Ready to Access",
  description:
    "Clouvia lets you save, manage, and find your files fast — all in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
