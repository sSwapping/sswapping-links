import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type { Viewport } from "next";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sSwapping | Links",
  description:
    "All my social links in one spot! Follow along for updates, fun content, and more across my favorite platforms.",
  openGraph: {
    siteName: "sSwapping's Social Links",
    url: "https://links.sswapping.dev/",
  },
  twitter: {
    title: "sSwapping's Social Links",
  },
  creator: "sSwapping / Jeffrey Dohmen",
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
