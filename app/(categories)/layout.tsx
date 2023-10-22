import "../globals.css";
import NavTwo from "@/components/nav/NavTwo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Bar (vertical) */}
        <NavTwo/>
        <main className="absolute top-1/2 inset-x-[2%] sm:right-0 sm:top-[20%] sm:left-[10%] md:top-[15%] lg:top-[10%] ">
          {children}
        </main>
      </body>
    </html>
  );
}
