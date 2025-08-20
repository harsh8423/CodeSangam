import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "AI Solutions",
      description: "We design AI-powered chatbots that cut customer support costs by 40% and improve engagement.",
      icon: "🤖",
      features: ["Chatbots", "AI Agents", "RAG Systems", "NLP Models"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Full Stack Development",
      description: "We build scalable web apps, mobile apps, and custom dashboards that grow with your business.",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "Custom Dashboards", "API Development"],
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "End-to-End Development",
      description: "From concept to deployment, we handle every aspect of your software project with precision.",
      icon: "🚀",
      features: ["Product Strategy", "UI/UX Design", "Development", "Deployment & Support"],
      color: "from-green-600 to-blue-600"
    }
  ]

  return (
    <section 
      id="services" 
      className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-cartoon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            What We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Do
            </span>
            {' '}✨
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-comic leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We partner with you as your extended tech team, delivering cutting-edge solutions that drive real business results. 
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
              }}
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl lg:text-4xl mb-6 shadow-lg`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 font-bubble"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-base lg:text-lg font-comic">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-gray-700 text-sm lg:text-base font-comic"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                    >
                      <motion.span 
                        className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 flex-shrink-0"
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services