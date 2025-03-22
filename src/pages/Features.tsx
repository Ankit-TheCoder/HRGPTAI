import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 'job-description',
    title: 'Job Description & KRA Generator',
    description: 'Our AI creates detailed job descriptions and Key Responsibility Areas based on your requirements.',
    icon: '📝',
    details: [
      'Save hours of manual writing with AI-generated job descriptions',
      'Ensure consistency across all job postings',
      'Include industry-specific skills and requirements automatically',
      'Generate KRAs that align with your company goals',
    ],
  },
  {
    id: 'resume-screening',
    title: 'Resume Screening AI',
    description: 'Automatically filter and rank candidates based on skills, experience, and job fit.',
    icon: '📄',
    details: [
      'Analyze hundreds of resumes in minutes',
      'Identify top candidates with skill-matching algorithms',
      'Reduce bias in the screening process',
      'Track candidate qualifications with detailed scoring',
    ],
  },
  {
    id: 'chatbot',
    title: 'Pre-Screening AI Chatbot',
    description: 'Conduct real-time interviews and assess candidates before the human interview stage.',
    icon: '💬',
    details: [
      'Ask job-specific questions that evaluate technical knowledge',
      'Assess communication skills and problem-solving abilities',
      'Available 24/7 for candidate convenience',
      'Generate comprehensive interview reports',
    ],
  },
  {
    id: 'testing',
    title: 'Psychoanalytical Testing',
    description: 'Evaluate emotional intelligence, leadership skills, and cultural fit.',
    icon: '🧠',
    details: [
      'Assess personality traits relevant to specific roles',
      'Evaluate cultural fit with your organization',
      'Identify leadership and growth potential',
      'Generate detailed reports with actionable insights',
    ],
  },
  {
    id: 'offers',
    title: 'Offer Letter Automation',
    description: 'Generate professional offer letters instantly based on selected candidates.',
    icon: '📨',
    details: [
      'Create customized offer letters with all relevant details',
      'Maintain consistent branding across all communications',
      'Track offer acceptance and follow-ups',
      'Integrate with your HRIS system for seamless onboarding',
    ],
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <>
      <Helmet>
        <title>Features - HRGPTAI</title>
        <meta name="description" content="Explore HRGPTAI's AI-powered recruitment features." />
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
              Our Features
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our AI-powered tools can transform your recruitment process from job posting to offer letter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white dark:bg-dark">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Feature Tabs */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                {features.map((feature) => (
                  <motion.button
                    key={feature.id}
                    className={`w-full px-6 py-4 text-left flex items-center gap-4 transition-colors ${
                      activeFeature === feature.id 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-gray-50 dark:hover:bg-dark-700 text-gray-900 dark:text-white'
                    }`}
                    onClick={() => setActiveFeature(feature.id)}
                    whileHover={{ x: activeFeature === feature.id ? 0 : 5 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Feature Details */}
            <div className="lg:w-2/3">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`bg-white dark:bg-dark-800 rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-700 ${
                    activeFeature === feature.id ? 'block' : 'hidden'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">{feature.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{feature.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">{feature.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {feature.details.map((detail, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start text-gray-700 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <span className="text-primary mr-2">✓</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/signup" className="btn-primary inline-block">
                    Try This Feature
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-dark-700 py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to transform your hiring?</h2>
                <p className="text-white/80">Get started with a free trial today.</p>
              </div>
              <Link to="/signup" className="btn bg-white text-primary hover:bg-gray-100">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features; 