import { Inter, Manrope } from "next/font/google";
import Header from "@/app/_components/Header";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Sona Portfolio",
  description: "Personal portfolio by Sona (Va Sona)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} bg-white`}>
        <div className="w-full mx-auto md:p-2">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
