import React from "react";
import { Code, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";
const SkillsAndExperience = () => {
  const technicalSkills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Data Structures & Algorithms",
    "System Design",
    "REST APIs",
    "Microservices",
    "Database Design",
    "Caching",
    "Performance Optimization",
    "Authentication & Authorization",
    "Git",
    "Docker",
    "CI/CD",
    "AWS",
    "AI-Assisted Development",
  ];

  const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Communication",
    "Team Collaboration",
    "Ownership",
    "Adaptability",
    "Mentoring",
    "Technical Documentation",
  ];
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Cloud Analogy",
      duration: "Jan 2022 – Jun 2025",
      details: [
        "Delivered 15+ web applications using React.js, Node.js, Laravel, and MongoDB.",
        "Integrated 20+ third-party APIs including Stripe, PayPal, and DocuSign.",
        "Improved application performance by 30%+ through API, database, and frontend optimization.",
        "Collaborated with product, QA, and engineering teams to deliver high-impact features and improve overall platform performance.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Bakuun",
      duration: "Jul 2025 – Present",
      details: [
        "Building enterprise travel solutions serving 2,000+ customers across 100+ countries.",
        "Reduced API response times by up to 40% through backend optimization and scalable architecture.",
        "Designing high-performance REST APIs, databases, and system components for large-scale operations.",
        "Collaborated with cross-functional teams in Agile environments, consistently delivering features on schedule with high code quality standards.",
      ],
    },
  ];

  return (
    <div className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-8" data-aos="fade-up">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          My Skills & Experience
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Focused on Java Backend Development & Enterprise Applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Skills Card */}
          <div className=" bg-white/5 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2 flex items-center gap-2">
              <Code className="text-primary w-6 h-6" /> Technical Expertise
            </h3>

            <div className="flex flex-wrap gap-3 mb-10">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-base-100 border border-gray-500 hover:scale-105 hover:bg-primary hover:text-white transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2 flex items-center gap-2">
              <Users className="text-primary w-6 h-6" /> Professional Strengths
            </h3>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-base-100 border border-gray-500 hover:scale-105 hover:bg-primary hover:text-white transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-accent w-6 h-6" />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>

            <div className="space-y-8 mt-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative border-l-2 border-primary/50 pl-5"
                >
                  <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary"></span>
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <p className="text-sm text-gray-400">
                    {exp.company} – {exp.duration}
                  </p>
                  <ul className="list-disc ml-5 mt-3 text-gray-300 space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;
