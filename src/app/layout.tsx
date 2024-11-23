import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Site Code JR",
  description: "Site Code JR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt">
      <body
        className={`antialiased flex flex-col min-h-screen`}
      >
        <NavBar />
        <main className="flex-grow h-max">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
