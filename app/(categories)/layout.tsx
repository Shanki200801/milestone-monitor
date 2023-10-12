import "../globals.css";
import Image from "next/image";
import logoImg from "../../public/logo.webp";
import sjuLogo from "../../public/sju-logo.webp";
import { Poppins } from "next/font/google";
import NavTwo from "@/components/nav/navTwo";

const bodyText = Poppins({
  weight: "400",
  subsets: ["latin"],
});

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
        <NavTwo/>
        <main className="absolute inset-x-[2%] sm:right-0 sm:left-[10%] ">
          {children}
        </main>
      </body>
    </html>
  );
}
