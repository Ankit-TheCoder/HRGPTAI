import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎯',
    title: 'Smart Matching',
    description: 'AI-powered algorithm matches candidates with the perfect roles based on skills, experience, and culture fit.',
  },
  {
    icon: '🤖',
    title: 'AI Interviews',
    description: 'Conduct automated initial interviews with natural language processing to screen candidates efficiently.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Get real-time insights into your hiring process with detailed analytics and reporting.',
  },
  {
    icon: '🔍',
    title: 'Resume Parsing',
    description: 'Automatically extract and analyze key information from resumes with high accuracy.',
  },
  {
    icon: '📱',
    title: 'Mobile-First',
    description: 'Access your recruitment platform anywhere, anytime with our responsive mobile app.',
  },
  {
    icon: '🔒',
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security and compliance with GDPR, CCPA, and other regulations.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Powerful Features for Modern Recruitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Everything you need to streamline your hiring process and find the best talent.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <span className="text-sm font-medium">Want to learn more?</span>
            <span className="text-xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 