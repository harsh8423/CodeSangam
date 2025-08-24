import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import csLogo from '../assets/cs-logo.jpg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  )
  
  const navbarShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(139, 92, 246, 0)", "0 8px 32px rgba(139, 92, 246, 0.1)"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['About', 'Services', 'Portfolio']

  return (
    <motion.header 
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: navbarBackground,
        boxShadow: navbarShadow
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-30 h-10 lg:w-32 lg:h-12 rounded-2xl overflow-hidden"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={csLogo} 
                alt="Code Sangam Logo" 
                className="w-full h-full "
              />
            </motion.div>
            
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 hover:text-purple-600 transition-colors font-comic text-lg font-medium group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <motion.button
            className="hidden lg:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-bubble text-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          ><a href='#contact'>

            <span className="relative z-10">Contact Us</span>
          </a>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-6 h-0.5 bg-gray-700 rounded-full mb-1"
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-gray-700 rounded-full mb-1"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-gray-700 rounded-full"
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 space-y-4 border-t border-purple-100">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-purple-600 transition-colors font-comic text-lg font-medium py-2 px-4 rounded-lg hover:bg-purple-50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-bubble text-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href='#contact'>
              Contact Us
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header