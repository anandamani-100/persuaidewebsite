import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.persuaide.ai")
  ),
  title: "Persuaide",
  description: "Persuasive campaigns in seconds",
  openGraph: {
    title: "Persuaide",
    description: "Persuasive campaigns in seconds",
    url: "/",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Persuaide - Persuasive campaigns in seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persuaide",
    description: "Persuasive campaigns in seconds",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/svg.png" type="image/png" />
        <link rel="shortcut icon" href="/svg.png" />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
