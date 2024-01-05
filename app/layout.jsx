import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Juadeb Gabriel",
  description:
    "Your driving force behind online and app development and unique product design. We specialize in developing highly customized online applications and management tools that increase traffic and corporate visibility. Comprehensive analytics, effective advertising, and social media tactics are all areas of competence for us. Partner with us to elevate your online presence across industries",
  icons: {
    icon: "/assets/svg/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${poppins.className} bg-primary overflow-x-hidden text-white scrollbar-thin scrollbar-thumb-primary_faded scrollbar-track-gray-300 2xl:px-36`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
