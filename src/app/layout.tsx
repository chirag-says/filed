import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Field. | Elite Free Fire Guild",
  description: "Field. is an elite Free Fire guild focused on discipline, skill, and dominance. Level 7 MAX guild with 150k+ weekly activity. Join the best.",
  keywords: ["Free Fire", "Guild", "Field", "Esports", "Gaming", "Garena Free Fire", "FF Guild"],
  authors: [{ name: "Field. Guild" }],
  openGraph: {
    title: "Field. | Elite Free Fire Guild",
    description: "Discipline • Skill • Dominance",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
