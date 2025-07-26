"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "fr" ? "darija" : "fr")}
      className="flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      {language === "fr" ? "الدارجة" : "Français"}
    </Button>
  )
}
