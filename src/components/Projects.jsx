import React, { useState } from "react";

const currentCompanyProjects = [
  {
    title: "Bakuun – Product-Based Travel Tech Platform",
    description: `As a Full Stack Developer, I contribute to large-scale travel distribution systems serving 2,000+ business customers across 100+ countries. I build and optimize high-performance applications, scalable REST APIs, and data-intensive workflows while improving platform reliability, performance, and user experience. I leverage AI-assisted development workflows to accelerate delivery, automate repetitive tasks, improve code quality, and enhance engineering productivity.`,

    Front_tech: ["Vue.js", "React.js", "TypeScript", "Tailwind CSS"],

    Back_tech: [
      "Node.js",
      "Express.js",
      "Laravel",
      "REST APIs",
      "System Design",
    ],

    Database: ["MongoDB", "MySQL", "Redis"],

    link: "https://bakuun.com/",
  },
];

const previousCompanyProjects = [
{
title: "NGO - Internal Displacement Monitoring Centre",
description: "Revamped a global humanitarian platform, improving page performance by 35% and SEO visibility by 20% through modern frontend architecture and optimization.",
Front_tech: ["React.js", "TypeScript", "GatsbyJS"],
Back_tech: ["Node.js", "GraphQL"],
Database: ["GraphQL"],
link: "https://www.internal-displacement.org/",
},
{
title: "Global Hiring - Safeguard Global",
description: "Developed scalable frontend solutions that increased organic traffic by 40% and enhanced analytics-driven decision making.",
Front_tech: ["React.js", "TypeScript", "GatsbyJS"],
Back_tech: ["Node.js", "GraphQL"],
Database: ["GraphQL"],
link: "https://safeguardglobal.com/",
},
{
title: "INVOPORT",
description: "Built enterprise workflow automation features integrating e-signature, banking, and AI-powered document processing services.",
Front_tech: ["React.js", "TypeScript", "Tailwind CSS"],
Back_tech: ["Node.js", "Express.js", "REST APIs"],
Database: ["MongoDB", "MySQL"],
link: "https://invoport.com/",
},
{
title: "Mango Semiconductors",
description: "Developed a scalable e-commerce platform with secure payment processing, optimized APIs, and high-performance user experiences.",
Front_tech: ["React.js", "TypeScript", "Tailwind CSS"],
Back_tech: ["Node.js", "Express.js"],
Database: ["MongoDB"],
link: "https://www.mangofy.in/",
},
{
title: "Rapisurv",
description: "Designed backend workflows and automation systems for large-scale tender and project management operations.",
Front_tech: ["React.js"],
Back_tech: ["Node.js", "Express.js", "REST APIs"],
Database: ["MongoDB"],
link: "https://www.rapisurv.com/",
},
{
title: "Luxury Fashion Commerce Platform",
description: "Built customer-facing commerce experiences with authentication, inventory workflows, and business process automation.",
Front_tech: ["React.js", "Next.js", "TypeScript"],
Back_tech: ["Node.js", "REST APIs"],
Database: ["MongoDB"],
link: "https://www.rimpleandharpreet.com/",
},
{
title: "HRMS - Human Resource Management System",
description: "Developed finance and payroll modules supporting salary management, tax calculations, and reimbursement workflows.",
Front_tech: ["React.js", "Next.js", "TypeScript"],
Back_tech: ["Node.js", "Express.js"],
Database: ["MongoDB"],
link: "",
},
{
title: "Healthcare Export Platform",
description: "Enhanced business-critical features, improved performance, and optimized user workflows for a global healthcare platform.",
Front_tech: ["React.js", "Next.js"],
Back_tech: ["Node.js", "REST APIs"],
Database: ["MongoDB"],
link: "https://mcareexports.com/",
},
];


const personalProjects = [];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const renderSection = (title, projects, sectionKey) => (
    <div className="mb-16">
      {" "}
      <h2 className="text-3xl font-bold mb-8 ">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const uniqueKey = `${sectionKey}-${index}`;

          return (
            <div key={uniqueKey}>
              {/* Small Card */}
              <div
                onClick={() =>
                  setOpenIndex(openIndex === uniqueKey ? null : uniqueKey)
                }
                className="group cursor-pointer relative p-6 rounded-2xl 
            bg-gradient-to-br from-[#1b1b1b] to-[#0e0e0e]
            border border-white/10 shadow-xl
            hover:shadow-[0_0_25px_rgba(0,150,250,0.4)]
            hover:border-blue-400/40 hover:scale-[1.03]
            transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>

                <div
                  className={`absolute right-4 top-4 transition ${
                    openIndex === uniqueKey ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </div>
              </div>

              {/* Expanded Card */}
              {openIndex === uniqueKey && (
                <div className="card bg-base-200 shadow-xl p-4 mt-4 border border-white/10">
                  <div className="card-body">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>

                    <p>{project.description}</p>

                    {project.Front_tech?.length > 0 && (
                      <div>
                        <h4 className="mb-2">Frontend</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.Front_tech.map((tech) => (
                            <span
                              key={tech}
                              className="badge badge-warning badge-outline"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.Back_tech?.length > 0 && (
                      <div>
                        <h4 className="mb-2">Backend</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.Back_tech.map((tech) => (
                            <span
                              key={tech}
                              className="badge badge-secondary badge-outline"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.Database?.length > 0 && (
                      <div>
                        <h4 className="mb-2">Database</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.Database.map((db) => (
                            <span
                              key={db}
                              className="badge badge-info badge-outline"
                            >
                              {db}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.link && (
                      <div className="card-actions justify-end">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          View Project
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-3xl font-bold text-center mb-14  bg-clip-text bg-gradient-to-r from-primary to-accent">
          Projects & Work Experience
        </h2>

        {/* Current Company */}
        {renderSection("Bakuun", currentCompanyProjects, "bakuun")}

        {/* Previous Company */}
        {renderSection("Cloud Analogy", previousCompanyProjects, "cloud")}

        {/* Personal Projects */}
        {personalProjects.length > 0 &&
          renderSection("Personal Projects", personalProjects, "personal")}
      </div>
    </section>
  );
};

export default Projects;
