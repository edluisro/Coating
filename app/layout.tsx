import type { Metadata } from "next";
import { PageLoader } from "@/components/ui/PageLoader";
import { Poppins } from "next/font/google";
import "@/styles/tokens.css";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://tempserver.fastansweragency.com/electro";
const siteTitle = "Florida ElectroStatic";
const siteDescription =
  "Professional on-site electrostatic painting services for commercial and industrial metal restoration across South Florida.";
const navbarLogoUrl =
  "https://res.cloudinary.com/wqsitnyu/image/upload/v1785449990/ChatGPT_Image_30_jul_2026__06_12_13_p.m.-removebg-preview_t2r0pe.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  icons: {
    icon: navbarLogoUrl,
    shortcut: navbarLogoUrl,
    apple: navbarLogoUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className={poppins.className}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
