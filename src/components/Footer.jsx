import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"></div>
              <span className="text-xl font-bold">Code Sangam</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              AI-powered solutions and full-stack development that drive business growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>AI Solutions</li>
              <li>Full Stack Development</li>
              <li>End-to-End Development</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Work</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Connect</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="https://www.linkedin.com/in/code-sangam/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/codesangam.tech/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://x.com/CodeSangam_tech" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="mailto:codesangam.tech@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 Code Sangam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 