import { motion } from 'framer-motion'

const Portfolio = () => {
    const challenges = [
      {
        title: "The Manual Process Monster",
        problem:
          "Many organizations spend countless hours on repetitive tasks that could easily be automated. Valuable human creativity often gets trapped in mindless workflows.",
        solution:
          "At Code Sangam, we design AI-powered automation tools that transform hours of work into minutes, empowering teams to focus on innovation and growth.",
        tech: ["Python", "OpenAI API", "LangChain", "RAG Systems", "MLOps"],
        icon: "🧠",
        color: "from-purple-600 to-pink-600",
      },
      {
        title: "The Collaboration Chaos",
        problem:
          "Building the right teams and connecting the right people for projects often feels like searching for a needle in a haystack, leading to wasted potential and missed opportunities.",
        solution:
          "We create platforms that seamlessly connect creators, developers, and innovators — turning fragmented efforts into collaborative success stories.",
        tech: ["React", "Node.js", "WebRTC", "Real-time DB", "Social APIs"],
        icon: "👥",
        color: "from-blue-600 to-purple-600",
      },
      {
        title: "The Time Trap",
        problem:
          "Professionals often struggle to find the right projects and clients on freelancing platforms, wasting valuable time scrolling and refreshing feeds while missing relevant opportunities.",
        solution:
          "Our team engineered a Telegram bot that delivers instant, personalized project opportunities as soon as they’re published — eliminating wasted time and accelerating results.",
        tech: ["Python", "APIs & Web Scraping", "Automation", "Telegram Bot API"],
        icon: "⏰",
        color: "from-green-600 to-blue-600",
      },
      {
        title: "The Innovation Gap",
        problem:
          "For many, stock trading feels boring, complex, and time-consuming. Frustration and financial pressure often discourage people from learning and engaging with markets.",
        solution:
          "We built a gamified trading platform that makes learning strategies engaging and rewarding, turning financial education into an interactive, motivating experience.",
        tech: ["React Native", "WebSockets", "Real-time APIs", "Data Integration"],
        icon: "🚀",
        color: "from-orange-600 to-red-600",
      },
    ];
  

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            The Challenges That Drive Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Instead of listing skills, let us show you the problems we love solving and the tools we use as our weapons.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${challenge.color} rounded-xl flex items-center justify-center text-2xl mr-4`}>
                  {challenge.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{challenge.title}</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{challenge.problem}</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-lg p-4">
                  <p className="text-gray-800 text-sm sm:text-base font-medium">{challenge.solution}</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-800 font-medium mb-3 text-sm sm:text-base">Our weapons of choice:</p>
                <div className="flex flex-wrap gap-2">
                  {challenge.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio 