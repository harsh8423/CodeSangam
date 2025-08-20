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
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Connect</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Email</li>
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