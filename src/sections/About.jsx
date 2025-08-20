import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">About Code Sangam</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Born from the idea of merging technology and creativity ('Sangam'), we're a team passionate about building intelligent solutions that solve real business problems.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Backed by years of experience in building scalable AI & full-stack projects, we understand the challenges modern businesses face and how technology can transform their operations.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-gray-600 text-sm sm:text-base">Support</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                  <div className="text-2xl sm:text-3xl mb-2">💻</div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Full-Stack Expertise</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Modern web technologies and scalable architectures</p>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                  <div className="text-2xl sm:text-3xl mb-2">🤖</div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">AI Innovation</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Cutting-edge machine learning and NLP solutions</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                  <div className="text-2xl sm:text-3xl mb-2">🚀</div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Rapid Deployment</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Fast development cycles and continuous delivery</p>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                  <div className="text-2xl sm:text-3xl mb-2">🔒</div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Enterprise Security</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Bank-level security and compliance standards</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About