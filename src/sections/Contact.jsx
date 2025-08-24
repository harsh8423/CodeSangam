import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    requirements: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const projectTypes = [
    'AI Chatbot Development',
    'Full-Stack Web Application',
    'Mobile App Development',
    'AI/ML Solution',
    'RAG System Implementation',
    'Custom Dashboard',
    'API Development',
    'Other'
  ]

  const timelineOptions = [
    '1-2 months',
    '2-4 months',
    '4-6 months',
    '6-12 months',
    '12+ months'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleQuoteSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        project_type: formData.projectType,
        requirements: formData.requirements,
        timeline: formData.timeline || 'Not specified',
        to_name: 'Code Sangam Team',
        message: `
New Quote Request from ${formData.name}

Company: ${formData.company || 'Not specified'}
Email: ${formData.email}
Project Type: ${formData.projectType}
Timeline: ${formData.timeline || 'Not specified'}

Requirements:
${formData.requirements}

Please respond within 24 hours with a detailed quote.
        `
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId, // Replace with your EmailJS service ID
        templateId, // Replace with your EmailJS template ID
        templateParams,
        publicKey // Replace with your EmailJS public key
      )

      if (result.status === 200) {
        setIsSubmitting(false)
        setSubmitted(true)
        
        // Reset form after showing success
        setTimeout(() => {
          setSubmitted(false)
          setShowQuoteForm(false)
          setFormData({
            name: '',
            email: '',
            company: '',
            projectType: '',
            requirements: '',
            timeline: ''
          })
        }, 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setError('Failed to send message. Please try again or contact us directly.')
    }
  }

  const openCalendly = () => {
    // Open Calendly in a new window
    window.open('https://calendly.com/harsh857498/30min', '_blank')
  }

  const getRoughEstimate = () => {
    const { projectType, timeline } = formData
    
    if (!projectType || !timeline) return 'Please fill all fields for an estimate'
    
    // Simple estimation logic (you can make this more sophisticated)
    let basePrice = 0
    let multiplier = 1
    
    switch (projectType) {
      case 'AI Chatbot Development':
        basePrice = 8000
        break
      case 'Full-Stack Web Application':
        basePrice = 15000
        break
      case 'Mobile App Development':
        basePrice = 20000
        break
      case 'AI/ML Solution':
        basePrice = 25000
        break
      case 'RAG System Implementation':
        basePrice = 18000
        break
      case 'Custom Dashboard':
        basePrice = 12000
        break
      case 'API Development':
        basePrice = 8000
        break
      default:
        basePrice = 15000
    }
    
    // Timeline adjustment
    if (timeline.includes('1-2 months')) multiplier *= 1.2
    else if (timeline.includes('2-4 months')) multiplier *= 1
    else if (timeline.includes('4-6 months')) multiplier *= 0.9
    else if (timeline.includes('6-12 months')) multiplier *= 0.8
    else multiplier *= 0.7
    
    const estimate = Math.round(basePrice * multiplier)
    
    return `$${estimate.toLocaleString()} - $${Math.round(estimate * 1.3).toLocaleString()}`
  }

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden"
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
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Transform
            </span>
            {' '}Your Business? ��
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-comic leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Choose your preferred way to get started. We're here to help you bring your vision to life! ✨
          </motion.p>
        </motion.div>
        
        {/* Contact Options */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Get a Free Quote */}
          <motion.div
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              💰
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 font-bubble">Get a Free Quote</h3>
            <p className="text-gray-600 mb-6 font-comic text-lg">
              Perfect for quick estimates without committing to a call. Fill out our form and get a tailored quote within 24 hours.
            </p>
            <motion.button
              onClick={() => setShowQuoteForm(true)}
              className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-bubble hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">📋 Get Quote</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Schedule a Call */}
          <motion.div
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              📅
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 font-bubble">Schedule a Call</h3>
            <p className="text-gray-600 mb-6 font-comic text-lg">
              Prefer a personalized discussion? Book a free consultation call with our team to discuss your project in detail.
            </p>
            <motion.button
              onClick={openCalendly}
              className="bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-bubble hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">📞 Book Call</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Additional Contact Info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 font-comic text-lg mb-4">
            Or reach out directly: <span className="font-bubble text-purple-600">codesangam.tech@gmail.com</span>
          </p>
          <p className="text-gray-500 font-comic">
            We typically respond within 2-4 hours during business hours! 🕐
          </p>
        </motion.div>
      </div>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-3xl p-6 lg:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
          >
            {!submitted ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 font-bubble">Get Your Free Quote</h3>
                  <button
                    onClick={() => setShowQuoteForm(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    X
                  </button>
                </div>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <p className="text-red-600 font-comic">{error}</p>
                  </div>
                )}
                
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 font-comic">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent font-comic"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 font-comic">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent font-comic"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 font-comic">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent font-comic"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 font-comic">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent font-comic"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 font-comic">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent font-comic"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map(timeline => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 font-comic">Project Requirements *</label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent font-comic"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                    />
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-bubble text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Quote'}
                    </motion.button>
                    
                    <button
                      type="button"
                      onClick={() => setShowQuoteForm(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-comic hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  ✅
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-bubble">Thank You! 🎉</h3>
                
                {formData.projectType && formData.timeline ? (
                  <div className="bg-purple-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-purple-800 mb-2 font-bubble">Rough Estimate:</h4>
                    <p className="text-2xl font-bold text-purple-600 font-bubble">
                      {getRoughEstimate()}
                    </p>
                    <p className="text-sm text-purple-600 mt-2 font-comic">
                      *This is a rough estimate based on your inputs
                    </p>
                  </div>
                ) : null}
                
                <p className="text-gray-600 font-comic text-lg">
                  Our team will review your requirements and get back to you with a detailed, tailored quote within 24 hours!
                </p>
                
                <button
                  onClick={() => setShowQuoteForm(false)}
                  className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-xl font-bubble hover:bg-purple-700"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Contact