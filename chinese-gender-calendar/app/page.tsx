import type { Metadata } from "next"
import { ChineseGenderCalendar } from "@/components/chinese-gender-calendar"

export const metadata: Metadata = {
  title: "Chinese Gender Calendar 2025 | 中国生男生女预测表 - 传统性别预测工具",
  description:
    "Free Chinese Gender Calendar 2025 - Traditional Chinese gender prediction chart to predict baby gender. 免费中国生男生女预测表2025，传统性别预测工具，根据农历年龄和受孕月份预测宝宝性别。",
  keywords:
    "chinese gender calendar, 生男生女预测表, baby gender prediction, 中国性别日历, 传统预测, chinese calendar, gender chart",
  openGraph: {
    title: "Chinese Gender Calendar 2025 | 中国生男生女预测表",
    description:
      "Traditional Chinese gender prediction chart to predict baby gender based on lunar age and conception month.",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
  alternates: {
    canonical: "https://example.com/chinese-gender-calendar",
    languages: {
      "zh-CN": "https://example.com/zh/chinese-gender-calendar",
      "en-US": "https://example.com/en/chinese-gender-calendar",
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <ChineseGenderCalendar />
      </div>
    </main>
  )
}
