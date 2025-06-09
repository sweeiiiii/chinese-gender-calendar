"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Baby, Heart, Star, Globe } from "lucide-react"

const genderChart = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 18岁
  [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1], // 19岁
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], // 20岁
  [0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1], // 21岁
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1], // 22岁
  [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1], // 23岁
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 24岁
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1], // 25岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1], // 26岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0], // 27岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1], // 28岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 29岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // 30岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 31岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // 32岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 33岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // 34岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 35岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // 36岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 37岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // 38岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 39岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // 40岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 41岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // 42岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 43岁
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // 44岁
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], // 45岁
]

const months = [
  { zh: "一月", en: "January" },
  { zh: "二月", en: "February" },
  { zh: "三月", en: "March" },
  { zh: "四月", en: "April" },
  { zh: "五月", en: "May" },
  { zh: "六月", en: "June" },
  { zh: "七月", en: "July" },
  { zh: "八月", en: "August" },
  { zh: "九月", en: "September" },
  { zh: "十月", en: "October" },
  { zh: "十一月", en: "November" },
  { zh: "十二月", en: "December" },
]

export function ChineseGenderCalendar() {
  const [language, setLanguage] = useState<"zh" | "en">("zh")
  const [motherAge, setMotherAge] = useState<string>("")
  const [conceptionMonth, setConceptionMonth] = useState<string>("")
  const [prediction, setPrediction] = useState<string>("")

  const handlePrediction = () => {
    const age = Number.parseInt(motherAge)
    const month = Number.parseInt(conceptionMonth)

    if (age >= 18 && age <= 45 && month >= 1 && month <= 12) {
      const result = genderChart[age - 18][month - 1]
      const gender = result === 1 ? (language === "zh" ? "男孩" : "Boy") : language === "zh" ? "女孩" : "Girl"
      setPrediction(gender)
    }
  }

  const t = {
    zh: {
      title: "中国生男生女预测表 2025",
      subtitle: "传统农历性别预测工具",
      description:
        "基于中国传统农历计算的生男生女预测表，根据母亲的农历年龄和受孕月份来预测宝宝性别。此预测表仅供娱乐参考，不具有科学依据。",
      howToUse: "使用方法",
      step1: "1. 计算母亲的农历年龄（实际年龄+1岁）",
      step2: "2. 确定受孕的农历月份",
      step3: "3. 在预测表中找到对应的交叉点",
      step4: "4. 查看预测结果",
      calculator: "快速计算器",
      motherAge: "母亲农历年龄",
      conceptionMonth: "受孕农历月份",
      predict: "开始预测",
      result: "预测结果",
      chart: "完整预测表",
      ageRange: "年龄",
      boy: "男孩",
      girl: "女孩",
      disclaimer: "免责声明",
      disclaimerText:
        "此预测表基于中国传统民俗文化，仅供娱乐参考。宝宝的性别由生物学因素决定，与预测表无关。请以医学检查结果为准。",
      features: "功能特点",
      feature1: "传统农历计算",
      feature2: "简单易用界面",
      feature3: "中英文双语",
      feature4: "免费使用",
      seoTitle: "2025年最准确的中国生男生女预测表 - 免费在线计算器",
      seoDescription:
        "使用传统中国生男生女预测表，根据农历年龄和受孕月份预测宝宝性别。提供完整预测图表和在线计算器，支持中英文，完全免费使用。",
    },
    en: {
      title: "Chinese Gender Calendar 2025",
      subtitle: "Traditional Lunar Gender Prediction Tool",
      description:
        "Based on traditional Chinese lunar calendar calculations, this gender prediction chart uses the mother's lunar age and conception month to predict baby gender. This chart is for entertainment purposes only and has no scientific basis.",
      howToUse: "How to Use",
      step1: "1. Calculate mother's lunar age (actual age + 1 year)",
      step2: "2. Determine the lunar month of conception",
      step3: "3. Find the corresponding intersection in the prediction chart",
      step4: "4. View the prediction result",
      calculator: "Quick Calculator",
      motherAge: "Mother's Lunar Age",
      conceptionMonth: "Conception Lunar Month",
      predict: "Predict",
      result: "Prediction Result",
      chart: "Complete Prediction Chart",
      ageRange: "Age",
      boy: "Boy",
      girl: "Girl",
      disclaimer: "Disclaimer",
      disclaimerText:
        "This prediction chart is based on traditional Chinese folk culture and is for entertainment purposes only. Baby gender is determined by biological factors and is unrelated to prediction charts. Please rely on medical examination results.",
      features: "Features",
      feature1: "Traditional Lunar Calculation",
      feature2: "User-friendly Interface",
      feature3: "Bilingual Support",
      feature4: "Free to Use",
      seoTitle: "Most Accurate Chinese Gender Calendar 2025 - Free Online Calculator",
      seoDescription:
        "Use the traditional Chinese gender prediction chart to predict baby gender based on lunar age and conception month. Complete prediction chart and online calculator, bilingual support, completely free.",
    },
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center gap-4 mb-4">
          <Button
            variant={language === "zh" ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage("zh")}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            中文
          </Button>
          <Button
            variant={language === "en" ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage("en")}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            English
          </Button>
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          {t[language].title}
        </h1>
        <p className="text-xl text-muted-foreground">{t[language].subtitle}</p>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t[language].description}</p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Calendar, text: t[language].feature1 },
          { icon: Baby, text: t[language].feature2 },
          { icon: Globe, text: t[language].feature3 },
          { icon: Heart, text: t[language].feature4 },
        ].map((feature, index) => (
          <Card key={index} className="text-center p-4">
            <feature.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">{feature.text}</p>
          </Card>
        ))}
      </div>

      {/* Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            {t[language].calculator}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">{t[language].motherAge}</Label>
              <Input
                id="age"
                type="number"
                min="18"
                max="45"
                value={motherAge}
                onChange={(e) => setMotherAge(e.target.value)}
                placeholder="18-45"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="month">{t[language].conceptionMonth}</Label>
              <Select value={conceptionMonth} onValueChange={setConceptionMonth}>
                <SelectTrigger>
                  <SelectValue placeholder={language === "zh" ? "选择月份" : "Select month"} />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, index) => (
                    <SelectItem key={index} value={(index + 1).toString()}>
                      {month[language]} ({index + 1})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={handlePrediction} className="w-full" size="lg">
            {t[language].predict}
          </Button>
          {prediction && (
            <div className="text-center p-4 bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg">
              <p className="text-lg font-semibold">{t[language].result}:</p>
              <Badge variant="secondary" className="text-2xl p-2 mt-2">
                {prediction}
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card>
        <CardHeader>
          <CardTitle>{t[language].howToUse}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p>{t[language].step1}</p>
            <p>{t[language].step2}</p>
            <p>{t[language].step3}</p>
            <p>{t[language].step4}</p>
          </div>
        </CardContent>
      </Card>

      {/* Complete Chart */}
      <Card>
        <CardHeader>
          <CardTitle>{t[language].chart}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-sm font-medium">{t[language].ageRange}</th>
                  {months.map((month, index) => (
                    <th key={index} className="border border-gray-300 p-2 text-xs">
                      {month[language]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {genderChart.map((row, ageIndex) => (
                  <tr key={ageIndex}>
                    <td className="border border-gray-300 p-2 text-center font-medium bg-gray-50">{18 + ageIndex}</td>
                    {row.map((cell, monthIndex) => (
                      <td
                        key={monthIndex}
                        className={`border border-gray-300 p-2 text-center text-xs font-medium ${
                          cell === 1 ? "bg-blue-100 text-blue-800" : "bg-pink-100 text-pink-800"
                        }`}
                      >
                        {cell === 1 ? t[language].boy : t[language].girl}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-yellow-800">{t[language].disclaimer}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-700">{t[language].disclaimerText}</p>
        </CardContent>
      </Card>

      {/* SEO Content */}
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">
          {language === "zh" ? "关于中国生男生女预测表" : "About Chinese Gender Calendar"}
        </h2>
        <div className="text-muted-foreground space-y-4">
          {language === "zh" ? (
            <>
              <p>
                中国生男生女预测表，又称清宫表，是一种传统的民俗预测方法。据传起源于清朝宫廷，用于预测皇室后代的性别。这个预测表基于中国农历计算，结合母亲的农历年龄和受孕的农历月份来进行预测。
              </p>
              <p>
                虽然这个预测表在民间广为流传，但需要强调的是，它仅仅是一种传统文化的体现，没有科学依据。现代医学已经证明，胎儿的性别是由父亲的精子中携带的性染色体决定的，与母亲的年龄和受孕时间无关。
              </p>
              <p>
                我们提供这个在线工具，主要是为了让大家了解和体验中国传统文化。如果您想知道宝宝的真实性别，请咨询专业医生并进行相关的医学检查。
              </p>
            </>
          ) : (
            <>
              <p>
                The Chinese Gender Calendar, also known as the Qing Palace Chart, is a traditional folk prediction
                method. It is said to have originated from the Qing Dynasty palace and was used to predict the gender of
                royal descendants. This prediction chart is based on the Chinese lunar calendar, combining the mother's
                lunar age and the lunar month of conception for prediction.
              </p>
              <p>
                Although this prediction chart is widely circulated among the people, it should be emphasized that it is
                merely a manifestation of traditional culture and has no scientific basis. Modern medicine has proven
                that fetal gender is determined by the sex chromosomes carried in the father's sperm and is unrelated to
                the mother's age and conception time.
              </p>
              <p>
                We provide this online tool mainly to help people understand and experience traditional Chinese culture.
                If you want to know the real gender of your baby, please consult a professional doctor and undergo
                relevant medical examinations.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
