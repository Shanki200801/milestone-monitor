import "../../globals.css";
import NavOne from "./NavOne";
import NavTwo from "@/components/nav/NavTwo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bars (horizontal & vertical) */}
        <NavOne/>
        <NavTwo/>
        <main className="absolute inset-x-[2%] sm:right-0 sm:left-[10%] top-[10%]">
          {children}
        </main>
      </body>
    </html>
  );
}
