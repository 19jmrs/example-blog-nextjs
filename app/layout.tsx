import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { NavigationHeader } from "@/components/navigation-header";
import { Footer } from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "A blog example using nextjs",
  keywords: ["Nextjs", "React"],
  authors: [
    {
      name: "Jorge Sá",
      url: "twitter.com/jorgesa_1",
    },
  ],
  creator: "19jmrs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased font-sans",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
