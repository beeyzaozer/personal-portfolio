import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/UpperText";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
});

export const metadata = {
  title: "Portfolio",
  description: "Beyza'nın kişisel portfolyosu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-black-400 via-black to-black text-white ${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-70 z-0 pointer-events-none" />

        <div className="absolute top-10 right-2/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse pointer-events-none" />

        <div className="z-10 relative h-[25px] w-full overflow-hidden">
          <Marquee
            items={[
              "HTML5",
              "CSS3",
              "Javascript",
              "React",
              "Redux Toolkit",
              "Next.js",
              "TailwindCss",
              "HTML5",
              "CSS3",
              "Javascript",
              "React",
              "Redux Toolkit",
              "Next.js",
              "TailwindCss",
            ]}
            speed={52}
          />
        </div>
        <Navbar />
        <div className="z-10 relative min-h-[calc(100vh-25px)] px-4">
          {children}
        </div>
      </body>
    </html>
  );
}