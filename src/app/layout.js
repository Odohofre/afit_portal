import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";

export const metadata = {
  title: "Air Force Institute of Technology Portal",
  // viewport: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container h-scree grid grid-cols-4 grid-rows-12 gap-2.5">
          <Header />
          <Aside />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
