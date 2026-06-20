import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vision Studio Photography",
  description: "Professional Photography Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <Navbar />

        <main className="pt-20">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}