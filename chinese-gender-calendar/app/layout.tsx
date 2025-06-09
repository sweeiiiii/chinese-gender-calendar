import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Chinese Gender Calendar 2025 | 中国生男生女预测表",
    template: "%s | Chinese Gender Calendar",
  },
  description:
    "Free Chinese Gender Calendar 2025 - Traditional Chinese gender prediction chart. 免费中国生男生女预测表2025，传统性别预测工具。",
  keywords: [
    "chinese gender calendar",
    "生男生女预测表",
    "baby gender prediction",
    "中国性别日历",
    "gender chart",
    "chinese calendar",
  ],
  authors: [{ name: "Chinese Gender Calendar" }],
  creator: "Chinese Gender Calendar",
  publisher: "Chinese Gender Calendar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    url: "https://example.com",
    siteName: "Chinese Gender Calendar",
    title: "Chinese Gender Calendar 2025 | 中国生男生女预测表",
    description:
      "Traditional Chinese gender prediction chart to predict baby gender based on lunar age and conception month.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chinese Gender Calendar 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Gender Calendar 2025 | 中国生男生女预测表",
    description: "Traditional Chinese gender prediction chart to predict baby gender.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://example.com",
    languages: {
      "zh-CN": "https://example.com/zh",
      "en-US": "https://example.com/en",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Chinese Gender Calendar 2025",
              alternateName: "中国生男生女预测表2025",
              description:
                "Traditional Chinese gender prediction chart to predict baby gender based on lunar age and conception month.",
              url: "https://example.com",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              inLanguage: ["zh-CN", "en-US"],
              author: {
                "@type": "Organization",
                name: "Chinese Gender Calendar",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
