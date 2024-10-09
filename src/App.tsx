import React from 'react'
import { Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565534384095-5d329610fa16?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mercedes-Benz Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">Stephane Dube</h1>
          <p className="text-2xl mb-8 animate-fade-in-up">Your Mercedes-Benz Specialist</p>
          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 animate-pulse"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Stephane Dube"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg mb-6">
                With over 15 years of experience in the luxury automotive industry, I've dedicated my career to helping clients find their perfect Mercedes-Benz. My passion for these exceptional vehicles and commitment to customer satisfaction have made me a trusted advisor in the world of high-end automobiles.
              </p>
              <p className="text-lg mb-6">
                Whether you're looking for a sleek sedan, a powerful SUV, or a thrilling sports car, I'm here to guide you through every step of the process. From test drives to financing options, I ensure a seamless and enjoyable car-buying experience.
              </p>
              <p className="text-lg">
                Let's work together to find the Mercedes-Benz that perfectly matches your lifestyle and aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 mr-4 text-gray-600" />
                <a href="mailto:stephane.dube@mercedes-benz.com" className="text-xl hover:text-blue-600 transition duration-300">
                  stephane.dube@mymercedes-benz.com
                </a>
              </div>
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 mr-4 text-gray-600" />
                <a href="tel:+15551234567" className="text-xl hover:text-blue-600 transition duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Stephane Dube. All rights reserved.</p>
          <a href="https://odin.fr.to" className="text-blue-400 hover:text-blue-300 transition duration-300 mt-2 inline-block" target="blank_">
            Powered by Odin
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App