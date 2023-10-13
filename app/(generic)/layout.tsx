import "../globals.css";
import Image from "next/image";
import logoImg from "../../public/logo.webp";
import sjuLogo from "../../public/sju-logo.webp";
import { Poppins } from "next/font/google";
import Navbar from "@/components/nav/Navbar";

const bodyText = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Milestone Monitor",
  description: "A cataloguing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bars (horizontal and vertical) */}
        <Navbar/>
        <main className="absolute top-1/2 inset-x-[2%] sm:right-0 sm:top-[20%] sm:left-[10%] md:top-[15%] ">
          {children}
        </main>
      </body>
    </html>
  );
}
