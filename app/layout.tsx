import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = host ? new URL(`${protocol}://${host}`) : undefined;
  return {
    metadataBase,
    title: "Sakshi & Tejas | Wedding Invitation",
    description: "Celebrate the wedding of Sakshi and Tejas on 18 December 2026 at Jai Bharat Mangal & Stay, Amravati.",
    openGraph: { title: "Sakshi & Tejas | Wedding Invitation", description: "A celebration of love, family and new beginnings · 18 December 2026", type: "website", images: [{ url: "/og-invitation.svg", width: 1200, height: 630, alt: "Sakshi and Tejas wedding invitation" }] },
    icons: { icon: "/favicon.svg" }
  };
}
export const viewport = { width: "device-width", initialScale: 1, maximumScale: 5 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}


