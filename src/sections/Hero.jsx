import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden pt-20">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
            animate={{
              y: [0, -30, -60, -30, 0],
              x: [0, 15, -10, -20, 0],
              rotate: [0, 180, 360, 180, 0],
              opacity: [1, 0.8, 0.6, 0.8, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Always First on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-1"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="font-cartoon text-3xl sm:text-5xl lg:text-6xl xl:text-7xl block mb-2"
                initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                AI-Powered
              </motion.span>
              
              <motion.span 
                className="font-bubble text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block mb-2"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 80 }}
                whileHover={{ 
                  scale: 1.1, 
                  textShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
                  filter: "brightness(1.2)"
                }}
              >
                Solutions &
              </motion.span>
              
              <motion.span
                className="font-chewy text-3xl sm:text-5xl lg:text-6xl xl:text-7xl block mb-2"
                initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                Full-Stack
              </motion.span>
              
              <motion.span
                className="font-sniglet text-3xl sm:text-5xl lg:text-6xl xl:text-7xl block mb-2"
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                Development
              </motion.span>
              
              <motion.span
                className="font-comic text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 block mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 80 }}
                whileHover={{ 
                  scale: 1.1,
                  filter: "hue-rotate(30deg)"
                }}
              >
                That Drive
              </motion.span>
              
              <motion.span
                className="font-cartoon text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 block"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1.4, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  animation: "wiggle 0.5s ease-in-out"
                }}
              >
                Business Growth! 🚀
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-comic max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileHover={{ scale: 1.02 }}
            >
              At <span className="font-bubble text-purple-600">Code Sangam</span>, we design intelligent software solutions — from chatbots to enterprise applications — helping businesses automate, innovate, and scale. ✨
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-bubble hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">🎯 Book a Free Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button 
                className="border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-bubble hover:bg-purple-600 hover:text-white transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#8b5cf6",
                  backgroundColor: "#8b5cf6",
                  color: "white"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">📁 View Portfolio</span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* AI Chatbot Demo - Always Second on Mobile */}
          <motion.div
            className="relative order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
          >
            <div className="relative z-10">
              <motion.div 
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-purple-200 max-w-sm mx-auto lg:max-w-md"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-white text-xl">🤖</span>
                  </motion.div>
                  <div>
                    <h3 className="font-bubble text-gray-800 text-base">AI Chatbot Demo</h3>
                    <p className="font-comic text-gray-500 text-sm">Powered by Code Sangam</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <motion.div 
                    className="bg-gray-100 p-3 rounded-xl border-l-4 border-purple-400"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <p className="text-gray-700 text-sm font-comic">How can you help my business? 🤔</p>
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-xl ml-4 sm:ml-8 border-l-4 border-pink-400"
                    whileHover={{ scale: 1.02, x: -5 }}
                  >
                    <p className="text-gray-700 text-sm font-comic">I can help automate customer support, analyze data, and create personalized experiences for your customers! 🚀</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg"
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              ⭐
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-lg sm:text-xl shadow-lg"
              animate={{ 
                y: [10, -10, 10],
                rotate: [360, 180, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2, rotate: -360 }}
            >
              💡
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-6 sm:-right-8 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-sm sm:text-lg shadow-lg"
              animate={{ 
                x: [0, 10, 0],
                y: [0, -10, 0],
                rotate: [0, 90, 180]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.3, rotate: 720 }}
            >
              🎯
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 