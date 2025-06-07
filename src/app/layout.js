import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: `Anas ${String.fromCharCode(8212)} Portfolio`,
  description:
    "Welcome to Anas' portfolio — a creative developer showcasing clean design, smooth UX, and modern web solutions.",
  keywords: [
    "Anas",
    "Portfolio",
    "Web Developer",
    "Frontend",
    "Next.js",
    "React",
    "UI/UX",
    "أنس",
    "مطور ويب",
  ],
  robots: "index, follow",
  applicationName: "Anas Portfolio",
  mobileWebAppCapable: true, // ✅ الجديد
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Anas — Portfolio",
    description:
      "Welcome to Anas' portfolio — a creative developer showcasing clean design, smooth UX, and modern web solutions.",
    url: "https://a-osta.com",
    siteName: "Anas Portfolio",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas — Portfolio",
    description:
      "Welcome to Anas' portfolio — a creative developer showcasing clean design, smooth UX, and modern web solutions.",
    images: ["/images/og.png"],
    creator: "@anasosta",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Anas Portfolio",
    startupImage: "/images/favicon.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://a-osta.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
