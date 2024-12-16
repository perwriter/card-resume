import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google"; // Import Playwrite font
import "./globals.css";
import Header from "@/components/Header";
import Side from "@/components/Side";
import Menu from "@/components/Menu";

// Load existing fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load "Playwrite DE VA Guides" font
const playwrite = Playfair_Display({
  variable: "--font-playwrite",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Peter Macharia",
  description: "Portfolio To Also Act as My Resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwrite.variable} antialiased`}
      >
        {/* Header Component */}
        <Header />

        {/* Main Layout */}
        <div className="flex min-h-screen bg-gray-50">
          {/* Left Side Section */}
          <aside className="  rounded-2xl shadow-md p-1">
            <Side />
          </aside>

          {/* Main Content Section */}
          <main className="flex-1  shadow-lg p-2">
            <div className="w-full flex  justify-end">
              <Menu />
            </div>
            <div className="mt-2">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
