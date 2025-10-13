import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Perfect Tidy Level Guides & Solutions – Play Online Free",
  description: "Perfect Tidy puzzle game guide with over 110+ level walkthroughs and expert tips. Master colorful hexagon sorting challenges efficiently.",
  alternates: {
    canonical: "https://www.perfecttidyhub.com", // 这里替换为你真实的网址
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
