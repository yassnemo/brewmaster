import { Award, Users, Leaf, Heart } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We source only the finest beans from sustainable farms worldwide",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Building connections one cup at a time in our welcoming space",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "Committed to ethical practices and environmental responsibility",
  },
  {
    icon: Heart,
    title: "Crafted with Love",
    description: "Every drink is prepared with passion and attention to detail",
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-amber-900 lg:text-4xl">
                Our Story Begins with Passion
              </h2>
              <p className="text-base md:text-lg text-amber-800 leading-relaxed">
                Founded in 2018, Brew & Bean started as a dream to create more than just a coffee shop. We envisioned a
                warm, welcoming space where the community could gather, connect, and experience exceptional coffee
                crafted with care.
              </p>
              <p className="text-amber-700 leading-relaxed">
                From our carefully curated bean selection to our skilled baristas who treat each cup as a work of art,
                we're committed to delivering an experience that goes beyond great coffee. We're about creating moments,
                fostering relationships, and being a cornerstone of our community.
              </p>
            </div>

            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-amber-200/50 hover:bg-white/80 transition-all duration-300 animate-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
                    <value.icon className="h-4 w-4 md:h-5 md:w-5 text-amber-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-amber-900 text-sm md:text-base">{value.title}</h3>
                    <p className="text-xs md:text-sm text-amber-700 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="/artisan-coffee-roasting.png"
                alt="Coffee roasting process showing artisan attention to detail with coffee beans being carefully roasted"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px]"
              />

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-amber-200">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-amber-600">6+</p>
                  <p className="text-xs md:text-sm text-amber-800 font-medium">Years of Excellence</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-amber-200">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-amber-600">15k+</p>
                  <p className="text-xs md:text-sm text-amber-800 font-medium">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
