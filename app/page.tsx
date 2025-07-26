"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"
import {
  Hammer,
  Wrench,
  Zap,
  Home,
  MessageCircle,
  Shield,
  Camera,
  BarChart3,
  MapPin,
  Star,
  Users,
  CheckCircle,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
}

export default function LandingPage() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.dir = language === "darija" ? "rtl" : "ltr"
  }, [language])

  if (!mounted) {
    return <div className="min-h-screen bg-background animate-pulse" />
  } 

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/logo.jpeg" alt="Tlob M3allem Logo" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold">Tlob M3allem</span>
            </motion.div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="about" className="py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("heroTitle")}
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t("heroSubtitle")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                  {t("getStarted")}
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src="/logo.jpeg?height=500&width=600"
                alt="Customer and artisan connecting"
                className="w-full max-w-lg rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("howItWorks")}</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">{t("howItWorksSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Home, title: t("step1Title"), desc: t("step1Desc") },
              { icon: Users, title: t("step2Title"), desc: t("step2Desc") },
              { icon: CheckCircle, title: t("step3Title"), desc: t("step3Desc") },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
 
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="h-10 w-10 text-orange-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-foreground/80">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("builtForEveryone")}</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">{t("builtForEveryoneSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="p-8 h-full">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
   
                    transition={{ duration: 0.5 }}
                  >
                    <Home className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <CardTitle className="text-2xl">{t("forCustomers")}</CardTitle>
                  <CardDescription className="text-lg text-foreground/80">{t("forCustomersDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[t("postServiceRequests"), t("compareOffers"), t("rateReview")].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center justify-between w-full"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span>{item}</span>
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} {...scaleOnHover}>
              <Card className="p-8 h-full">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
   
                    transition={{ duration: 0.5 }}
                  >
                    <Hammer className="h-8 w-8 text-orange-600" />
                  </motion.div>
                  <CardTitle className="text-2xl">{t("forArtisans")}</CardTitle>
                  <CardDescription className="text-lg text-foreground/80">{t("forArtisansDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[t("createProfile"), t("browseJobs"), t("sendQuotes")].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center justify-between w-full"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span>{item}</span>
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("ourServices")}</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">{t("ourServicesSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Zap, title: t("electrician"), desc: t("electricianDesc"), color: "orange" },
              { icon: Wrench, title: t("plumber"), desc: t("plumberDesc"), color: "blue" },
              { icon: Hammer, title: t("carpenter"), desc: t("carpenterDesc"), color: "orange" },
              { icon: Home, title: t("mason"), desc: t("masonDesc"), color: "blue" },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow h-full">
                  <motion.div
                    className={`bg-${service.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
   
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/80">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className={cn(
              "mb-16",
              language === 'darija' ? 'text-right' : 'text-center'
            )} 
            {...fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("keyFeatures")}</h2>
            <p className={cn(
              "text-xl text-foreground/80 max-w-2xl mx-auto",
              language === 'darija' ? 'mr-auto' : 'mx-auto'
            )}>
              {t("keyFeaturesSubtitle")}
            </p>
          </motion.div>

          <motion.div
            className={cn(
              "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
              language === 'darija' ? 'text-right' : 'text-left'
            )}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: MessageCircle, title: t("realTimeChat"), desc: t("realTimeChatDesc") },
              { icon: Shield, title: t("secureProfiles"), desc: t("secureProfilesDesc") },
              { icon: Camera, title: t("photoUpload"), desc: t("photoUploadDesc") },
              { icon: BarChart3, title: t("dashboard"), desc: t("dashboardDesc") },
              { icon: MapPin, title: t("mapView"), desc: t("mapViewDesc") },
              { icon: Star, title: t("ratingSystem"), desc: t("ratingSystemDesc") },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-start",
                  language === 'darija' ? 'flex-row-reverse' : 'space-x-4'
                )}
                variants={fadeInUp}
                whileHover={{ x: language === 'darija' ? -10 : 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={cn(
                    "p-3 rounded-lg flex-shrink-0",
                    language === 'darija' ? 'ml-4' : 'mr-4',
                    "bg-orange-100"
                  )}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </motion.div>
                <div className={cn(
                  language === 'darija' ? 'text-right' : 'text-left',
                  "w-full"
                )}>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Early Access Signup Section */}
      <section id="contact" className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-2xl mx-auto text-center" {...fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("joinBeta")}</h2>
            <p className="text-xl mb-8 opacity-90">{t("joinBetaSubtitle")}</p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-background text-foreground">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                      <Label htmlFor="name">{t("fullName")}</Label>
                      <Input id="name" placeholder={t("enterName")} required />
                    </motion.div>
                    <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                      <Label htmlFor="email">{t("emailAddress")}</Label>
                      <Input id="email" type="email" placeholder={t("enterEmail")} required />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">{t("iAm")}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t("selectRole")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer">{t("customer")}</SelectItem>
                        <SelectItem value="artisan">{t("artisan")}</SelectItem>
                        <SelectItem value="both">{t("both")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" size="lg" className="w-full">
                      {t("joinWaitlist")}
                    </Button>
                  </motion.div>

                  <p className="text-sm text-muted-foreground">{t("termsText")}</p>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-muted py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="footer"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className={cn(
                "flex items-center",
                language === 'darija' ? 'flex-row-reverse' : 'space-x-2'
              )}>
                <img src="/logo.jpeg" alt="Tlob M3allem Logo" className="h-8 w-8 object-contain" />
                <span className={cn("text-lg font-bold", language === 'darija' ? 'mr-2' : '')}>Tlob M3allem</span>
              </div>
              <p className="text-foreground/80 mt-4">{t("footerDesc")}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="font-semibold mb-4">{t("quickLinks")}</h3>
              <ul className="space-y-3">
                {[
                  { text: t("aboutUs"), href: "#about" },
                  { text: t("howItWorks"), href: "#how-it-works" },
                  { text: t("ourServices"), href: "#services" },
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: language === 'darija' ? -5 : 5 }}
                  >
                    <a href={link.href} className="hover:text-primary transition-colors flex items-center">
                      {language === 'darija' && <span className="ml-1">←</span>}
                      <span>{link.text}</span>
                      {language !== 'darija' && <span className="ml-1">→</span>}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="font-semibold mb-4">{t("support")}</h3>
              <ul className="space-y-3">
                {[
                  { text: t("faq"), href: "#how-it-works" },
                  { text: t("contactUs"), href: "#contact" },
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: language === 'darija' ? -5 : 5 }}
                  >
                    <a href={link.href} className="hover:text-primary transition-colors flex items-center">
                      {language === 'darija' && <span className="ml-1">←</span>}
                      <span>{link.text}</span>
                      {language !== 'darija' && <span className="ml-1">→</span>}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="font-semibold mb-4">{t("contact")}</h3>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center justify-between w-full"
                  whileHover={{ x: language === 'darija' ? -5 : 5 }}
                >
                  <span>hello@Tlobm3allem.com</span>
                  <Mail className="h-4 w-4" />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between w-full"
                  whileHover={{ x: language === 'darija' ? -5 : 5 }}
                >
                  <span>+212 628-721159</span>
                  <Phone className="h-4 w-4" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t mt-8 pt-8 text-center text-foreground/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>{t("copyright")}</p>
            <p className="text-sm mt-2">{t("disclaimer")}</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
