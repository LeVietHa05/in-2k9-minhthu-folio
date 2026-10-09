import type { Metadata } from "next";
import { Anek_Latin, Actor } from "next/font/google";
import { avilock } from "./font";
import NavBar from "./components/nav";
import "./globals.css";

const anek = Anek_Latin({
  variable: "--font-anek",
  subsets: ["latin"],
});

const actor = Actor({
  variable: "--font-actor",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Minh Thu's Portfolio",
  description: "Minh Thu's Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anek.variable} ${actor.variable} ${avilock.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-24 font-avilock">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
