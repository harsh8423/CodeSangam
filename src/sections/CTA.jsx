import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-8">
            Let's build something amazing together. Book a free consultation and discover how our AI-powered solutions can drive your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get a Free Quote
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA