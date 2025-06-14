import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import ThemeProviderContext from "@/stores/theme";
import Layouts from "@/components/layouts";
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello, I'm Mika Mada",
  metadataBase: new URL("https://hello-madha.vercel.app"),
  description:
    "Welcome to my portfolio! I'm Mika Mada, a Full Stack Developer with a passion for creating innovative web applications. Explore my projects and learn more about my skills.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={geistSans.className}>
        <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <ThemeProviderContext>
          <Suspense>
            <Layouts>{children}</Layouts>
          </Suspense>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
