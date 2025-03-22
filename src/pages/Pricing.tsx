import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Basic',
    price: 'Free',
    billing: '',
    description: 'Essential AI tools for small businesses',
    features: [
      'Resume Screening (10/month)',
      'Job Description Generator',
      'Email Support',
      '1 User Account',
    ],
    isPopular: false,
    cta: 'Sign Up Free',
    ctaLink: '/signup',
  },
  {
    name: 'Pro',
    price: '$29',
    billing: '/month',
    description: 'Advanced tools for growing companies',
    features: [
      'Resume Screening (100/month)',
      'AI Chatbot Interviews',
      'Psychoanalytical Testing',
      'Job Description Generator',
      'Priority Support',
      '3 User Accounts',
    ],
    isPopular: true,
    cta: 'Start Free Trial',
    ctaLink: '/signup',
  },
  {
    name: 'Enterprise',
    price: '$99',
    billing: '/month',
    description: 'Complete AI suite for large organizations',
    features: [
      'Unlimited Resume Screening',
      'Advanced AI Chatbot Interviews',
      'Comprehensive Psychoanalytical Testing',
      'Offer Letter Automation',
      'Custom Integrations',
      'Dedicated Account Manager',
      'Unlimited User Accounts',
    ],
    isPopular: false,
    cta: 'Contact Sales',
    ctaLink: '/contact',
  },
];

const comparisonData = [
  {
    category: 'Time Savings',
    traditional: '40+ hours per hire',
    hrgptai: '10 hours per hire',
    savings: '75% less time',
  },
  {
    category: 'Cost Per Hire',
    traditional: '$4,000 - $20,000',
    hrgptai: '$1,000 - $5,000',
    savings: '75% cost reduction',
  },
  {
    category: 'Candidate Experience',
    traditional: 'Slow feedback, lengthy process',
    hrgptai: 'Instant feedback, streamlined',
    savings: 'Higher satisfaction',
  },
  {
    category: 'Quality of Hire',
    traditional: 'Subjective evaluation',
    hrgptai: 'Data-driven decisions',
    savings: 'Better fit candidates',
  },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - HRGPTAI</title>
        <meta name="description" content="Explore HRGPTAI's flexible pricing plans for AI-powered recruitment solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-16">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that works best for your recruitment needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg border ${
                  plan.isPopular ? 'border-primary' : 'border-gray-200 dark:border-gray-700'
                } relative bg-white dark:bg-dark-800`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ translateY: -10 }}
              >
                {plan.isPopular && (
                  <div className="bg-primary text-white py-1 px-3 text-sm font-semibold absolute top-0 right-0 rounded-bl-lg">
                    BEST VALUE
                  </div>
                )}
                <div className={`p-6 ${plan.isPopular ? 'bg-primary/5 dark:bg-primary/10' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.billing}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="text-primary mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={plan.ctaLink}
                    className={`block text-center py-3 rounded-lg transition-colors ${
                      plan.isPopular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-gray-50 dark:bg-dark-700">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="title text-gray-900 dark:text-white">HRGPTAI vs. Traditional Hiring</h2>
            <p className="subtitle mx-auto text-gray-600 dark:text-gray-300">
              See how HRGPTAI can save you time and money compared to traditional hiring methods.
            </p>
          </motion.div>

          <motion.div 
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <table className="w-full bg-white dark:bg-dark-800 rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Category</th>
                  <th className="py-4 px-6 text-left">Traditional Hiring</th>
                  <th className="py-4 px-6 text-left">HRGPTAI</th>
                  <th className="py-4 px-6 text-left">Savings</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-dark-700' : 'bg-white dark:bg-dark-800'}>
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">{row.category}</td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">{row.traditional}</td>
                    <td className="py-4 px-6 text-primary font-medium">{row.hrgptai}</td>
                    <td className="py-4 px-6 text-green-600 dark:text-green-400 font-medium">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="title text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Can I switch plans later?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Do you offer custom plans?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, for larger organizations with specific needs, we offer custom enterprise solutions. Contact our sales team for details.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Is there a free trial?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, all paid plans include a 14-day free trial so you can experience the full power of HRGPTAI.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">What payment methods do you accept?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We accept all major credit cards, as well as invoicing for annual Enterprise plans.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Start your free trial today. No credit card required.
            </p>
            <Link to="/signup" className="bg-white text-primary hover:bg-gray-100 btn">
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing; 