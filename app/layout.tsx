import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "../components/site";
import { profile } from "../content";
import { siteUrl } from "../site-url";
import "./globals.css";

const title = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: title, template: `%s | ${profile.name}` },
  description: profile.description,
  authors: [{ name: profile.name }],
  openGraph: { title, description: profile.description, type: "website", siteName: profile.name },
  twitter: { card: "summary_large_image" },
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
