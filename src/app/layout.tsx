import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./_components/Navbar";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

const poppins = Poppins({
  weight: ["700", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <main className="overflow-hidden">
          <Navbar />
          {children}
          <Contact />
          <Footer />
        </main>
      </body>
    </html>
  );
}
