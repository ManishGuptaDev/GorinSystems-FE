import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import RootTemplate from "@/components/templates/RootTemplate";

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({
  subsets: ["latin"], // Specify the subsets you want to include
  weight: ["400", "500", "700"], // Include multiple weights if needed
  display: "swap", // Use 'swap' for better loading performance ${geistMono.variable}
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Landing page",
  description: "Gorin Systems ReactJS Landing page Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <RootTemplate>{children}</RootTemplate>
      </body>
    </html>
  );
}
