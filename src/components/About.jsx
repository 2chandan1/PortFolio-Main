import React from "react";

const About = () => {
  return (
    <section className="bg-base-100 px-6 md:px-12 lg:px-24 py-14">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2
          className="text-4xl font-bold mb-6 text-center flex justify-center gap-3 items-center"
          data-aos="fade-up"
        >
          <i className="fa-solid fa-user text-info"></i>
          About Me
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-gray-300 mb-8 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Full Stack Developer • AI Engineer • MERN Stack • Agentic AI • RAG • System Design <br />
          <strong className="text-info">
            Based in India • Open to Remote and Relocation Opportunities
          </strong>
        </p>

        {/* Highlighted Info Box */}
        <div
          className="bg-gradient-to-r from-base-200/70 to-transparent border-l-4 border-info rounded-xl p-6 shadow-md backdrop-blur"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          <p className="text-gray-300 leading-relaxed">
            I am a{" "}
            <span className="text-info font-semibold">
               Full Stack Developer & AI Engineer {" "}
            </span>
             with 4.5+ years of experience building scalable web applications and
  intelligent AI-powered solutions.
   <br />
  <br />

  My expertise includes{" "}{" "}
            <span className="text-info font-semibold">React.js</span>,
  <span className="text-info font-semibold"> Next.js</span>,
  <span className="text-info font-semibold"> Node.js</span>,
  <span className="text-info font-semibold"> MongoDB</span>,
  <span className="text-info font-semibold"> Laravel</span>, and
  <span className="text-info font-semibold"> RESTful APIs</span>.
              
       I also work with modern AI technologies including
  <span className="text-info font-semibold">
    {" "}LLMs, RAG (Retrieval-Augmented Generation), AI Agents,
    Agentic Workflows, LangChain, Vector Databases, MCP, and AI Automation
  </span>
  to build intelligent applications that solve real-world problems.

  <br />
  <br />

  I focus on creating production-ready systems with strong foundations in
  <span className="text-info font-semibold">
    {" "}Clean Architecture, System Design, Scalability,
    Performance Optimization, and Maintainable Code
  </span>.
</p>
        </div>

        {/* Skill Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {[
            {
              title: "Frontend Development",
              desc: "Building responsive and interactive user interfaces using React.js, Next.js, JavaScript, and modern frontend best practices.",
              icon: "fa-solid fa-code",
            },
            {
              title: "Backend Development",
              desc: "Developing scalable backend applications and RESTful APIs using Node.js, Express.js, Laravel, and PHP.",
              icon: "fa-solid fa-server",
            },
            {
              title: "Database Management",
              desc: "Working with MongoDB and MySQL for schema design, optimization, and efficient data management.",
              icon: "fa-solid fa-database",
            },
            {
              title: "API Integration",
              desc: "Integrating third-party services including Stripe, GoCardless, payment gateways, and external APIs.",
              icon: "fa-solid fa-plug",
            },
            {
              title: "System Design",
              desc: "Understanding scalable architectures, application workflows, caching strategies, and performance optimization techniques.",
              icon: "fa-solid fa-sitemap",
            },
           {
              title: "AI Engineering & Agentic AI",
              desc: "Building AI-powered applications using LLMs, RAG, AI Agents, LangChain, MCP, Vector Databases, and workflow automation to create intelligent user experiences.",
              icon: "fa-solid fa-brain",
            },
            {
              title: "Generative AI & LLM Apps",
              desc: "Developing AI chatbots, document Q&A systems, AI assistants, semantic search, and automation workflows using modern Generative AI technologies.",
              icon: "fa-solid fa-robot",
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-base-200 shadow-md hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-info/40"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100}
            >
              <i className={`${item.icon} text-info text-3xl mb-3`}></i>
              <h4 className="text-lg font-semibold mb-1 text-amber-50">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
