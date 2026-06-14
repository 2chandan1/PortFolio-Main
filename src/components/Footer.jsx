import React from "react";

function Footer() {
  return (
    <div className="footer-container bg-base-200 mt-10">
      <footer className="footer sm:footer-horizontal text-base-content p-10 max-w-6xl mx-auto">
        <div className="flex justify-between w-full flex-wrap gap-10">
          {/* Engineering Expertise */}
          <nav className="flex flex-col">
            <h6 className="footer-title text-info text-lg mb-3">
              Engineering Expertise
            </h6>

            {[
              "React.js & Next.js",
              "Node.js & Express.js",
              "Laravel & PHP",
              "MongoDB & MySQL",
              "System Design",
              "AI Engineering",
              "RAG Applications",
              "AI Agents",
            ].map((skill, index) => (
              <span key={index} className="mt-2 text-gray-400">
                {skill}
              </span>
            ))}
          </nav>

          {/* Quick Links */}
          <nav className="flex flex-col">
            <h6 className="footer-title text-info text-lg mb-3">Quick Links</h6>

            <a
              href="#about"
              className="mt-2 text-gray-400 hover:text-info transition"
            >
              About Me
            </a>

            <a
              href="#projects"
              className="mt-2 text-gray-400 hover:text-info transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="mt-2 text-gray-400 hover:text-info transition"
            >
              Contact
            </a>
          </nav>

          {/* Professional Profile */}
          <nav className="flex flex-col">
            <h6 className="footer-title text-info text-lg mb-3">
              Professional Profile
            </h6>

            <p className="text-gray-400 mt-2">
              Full Stack Developer & AI Engineer
            </p>

            <p className="text-gray-400 mt-2">
              4+ Years of Professional Experience
            </p>

            <p className="text-gray-400 mt-2">
              SaaS, Enterprise & AI-Powered Applications
            </p>

            <p className="text-gray-400 mt-2">
              Open to Remote, Hybrid & Global Opportunities
            </p>
          </nav>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 py-2">
        React.js • Next.js • Node.js • Laravel • MongoDB • AI Agents • RAG •
        LLMs • Agentic AI
      </div>
      <div className="text-center py-4 border-t border-base-300 text-gray-500 text-sm">
        © {new Date().getFullYear()} Chandan Tiwari | Full Stack Developer • AI
        Engineer • MERN Stack • System Design
      </div>
    </div>
  );
}

export default Footer;
