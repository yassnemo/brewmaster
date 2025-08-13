import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Coffee Street", "Downtown District", "City, State 12345"],
    action: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-BREW", "(555) 123-2739"],
    action: "Call Now",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 6:00 AM - 8:00 PM", "Sat-Sun: 7:00 AM - 9:00 PM"],
    action: "View Schedule",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@brewandbean.com", "events@brewandbean.com"],
    action: "Send Email",
  },
]

const socialLinks = [
  { icon: Instagram, label: "Follow us on Instagram", href: "#" },
  { icon: Facebook, label: "Like us on Facebook", href: "#" },
  { icon: Twitter, label: "Follow us on Twitter", href: "#" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-white" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold text-amber-900 lg:text-4xl">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-amber-700 max-w-2xl mx-auto">
            We'd love to hear from you. Visit us, call us, or connect with us online.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className="text-center border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4 md:p-6 space-y-4">
                <div className="flex justify-center">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-amber-100">
                    <info.icon className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-amber-900 text-sm md:text-base">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-xs md:text-sm text-amber-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-200 bg-transparent text-xs md:text-sm"
                  aria-label={`${info.action} - ${info.title}`}
                >
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-amber-200">
          <div className="text-center space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-amber-900">Stay Connected</h3>
              <p className="text-amber-700 text-sm md:text-base">
                Follow us for the latest updates, special offers, and coffee inspiration
              </p>
            </div>

            <div className="flex justify-center gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="icon"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-200 hover:scale-110 bg-transparent h-10 w-10 md:h-12 md:w-12"
                  aria-label={social.label}
                  asChild
                >
                  <a href={social.href}>
                    <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                aria-label="Subscribe to our newsletter"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
