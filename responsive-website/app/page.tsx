"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowRight, Star, Users, Award, Mail, Phone, MapPin } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
              Creative<span className="text-blue-600">Studio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "services", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 hover:text-blue-600 relative ${
                    activeSection === section ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-2">
              {["home", "about", "services", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize font-medium transition-all duration-200 ${
                    activeSection === section ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                We Create Amazing
                <span className="text-blue-600 block">Digital Experiences</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your ideas into stunning digital solutions with our creative design agency. We specialize in
                web design, branding, and digital marketing.
              </p>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Our Work
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About CreativeStudio</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We are a passionate team of designers and developers dedicated to creating exceptional digital
                  experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our skilled professionals bring years of experience to every project.</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Focus</h3>
                  <p className="text-gray-600">We deliver high-quality solutions that exceed client expectations.</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                  <p className="text-gray-600">
                    Recognized for excellence in design and innovation across the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We offer comprehensive digital solutions to help your business thrive in the digital world.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Web Design",
                    description: "Beautiful, responsive websites that convert visitors into customers.",
                  },
                  {
                    title: "Branding",
                    description: "Complete brand identity solutions that make your business memorable.",
                  },
                  {
                    title: "Digital Marketing",
                    description: "Strategic marketing campaigns that drive growth and engagement.",
                  },
                  {
                    title: "UI/UX Design",
                    description: "User-centered design that creates intuitive and engaging experiences.",
                  },
                  {
                    title: "E-commerce",
                    description: "Powerful online stores that maximize sales and customer satisfaction.",
                  },
                  {
                    title: "Mobile Apps",
                    description: "Native and cross-platform mobile applications for iOS and Android.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Explore some of our recent projects and see how we've helped businesses achieve their goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={`/placeholder.svg?height=300&width=400&query=modern website design project ${item}`}
                      alt={`Portfolio project ${item}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold">Project {item}</h3>
                        <p className="text-sm opacity-90">Web Design & Development</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Ready to start your next project? Let's discuss how we can help bring your vision to life.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-blue-400 mr-4" size={24} />
                      <span>hello@creativestudio.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-blue-400 mr-4" size={24} />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-blue-400 mr-4" size={24} />
                      <span>123 Design Street, Creative City, CC 12345</span>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Creative<span className="text-blue-400">Studio</span>
            </div>
            <p className="text-gray-400">
              © 2024 CreativeStudio. All rights reserved. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
