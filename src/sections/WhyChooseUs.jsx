import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const features = [
    {
      title: "Tailored Solutions",
      description: "We don't use one-size-fits-all templates. Every solution is custom-built for your unique business needs.",
      icon: "🎯"
    },
    {
      title: "Cutting-Edge Tech",
      description: "We leverage the latest AI technologies and modern development stacks to deliver future-proof solutions.",
      icon: "⚡"
    },
    {
      title: "End-to-End Support",
      description: "From idea to launch and beyond, we're with you every step of the way as your extended tech team.",
      icon: "🤝"
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just build software — we build partnerships that drive your success.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 