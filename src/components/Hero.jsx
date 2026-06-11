import React, { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <div className="custom-gradient hero bg-base-200 min-h-screen flex justify-center items-center px-6">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          {/* Interactive Avatar (mousemove tilt + floating bubbles) */}
          <div
            data-aos="fade-up-left"
            className="avatar-frame"
            ref={(el) => {
              /* placeholder ref for styling only */
            }}
          >
            <InteractiveAvatar />
          </div>

          {/* Text Section */}
          <div data-aos="fade-down-right" className="max-w-xl">
            {/* Badge */}
            <div className="badge badge-soft badge-accent my-4 px-4 py-2 flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-success"></i>
              FULL STACK DEVELOPER
            </div>

            {/* Greeting */}
            <p className="text-amber-50 uppercase tracking-wide">
              Welcome to my professional portfolio
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              I'm <span className="text-info">Chandan Tiwari</span>
            </h1>

            {/* Type Animation */}
            <div className="h-[50px] mb-4">
              <span className="text-success text-3xl md:text-4xl font-semibold">
                <TypeAnimation
                  sequence={[
                    "Full Stack Engineer",
                    2000,
                    "React & Next.js Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "Backend API Developer",
                    2000,
                    "Scalable System Design",
                    2000,
                    "Laravel Developer",
                    2000,
                    "AI-Assisted Developer",
                    2000,
                    "System Design Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>

            {/* Description Box */}
            <div className="bg-base-200/60 border-l-4 border-info rounded-xl p-5 shadow-md backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                I am a{" "}
                <span className="text-info font-medium">
                  Full Stack Developer{" "}
                </span>
                with 4+ years of experience building scalable, high-performance
                web applications using{" "}
                <span className="text-info font-medium">React</span>,
                <span className="text-info font-medium">Node.js</span>, and
                <span className="text-info font-medium"> MongoDB</span>.
                <br />
                <br />I have experience designing and developing
                production-ready solutions with a focus on
                <span className="text-info font-medium">
                  {" "}
                  clean architecture
                </span>
                ,<span className="text-info font-medium"> system design</span>,
                and
                <span className="text-info font-medium">
                  {" "}
                  maintainable code
                </span>
                . I am currently open to{" "}
                <span className="text-info font-medium">
                  full-time Full Stack, Backend, and MERN opportunities
                </span>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a href="/Resume.pdf" download>
                <button className="btn btn-info text-amber-50 rounded-2xl">
                  <i className="fa-solid fa-arrow-down mr-2"></i> Download
                  Resume
                </button>
              </a>

              <a href="#projects">
                <button className="btn btn-outline btn-success rounded-2xl">
                  <i className="fa-solid fa-code mr-2"></i> View Projects
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

function InteractiveAvatar() {
  const frameRef = useRef(null);
  const [imgStyle, setImgStyle] = useState({
    transform:
      "perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0) scale(1)",
  });

  const handleMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const ry = (x / rect.width) * 12; // rotateY
    const rx = (y / rect.height) * 12; // rotateX
    const tx = ry / 2;
    const ty = -rx / 2;
    setImgStyle({
      transform: `perspective(800px) rotateX(${-rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 0) scale(1.03)`,
    });
  };

  const handleLeave = () => {
    setImgStyle({
      transform:
        "perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0) scale(1)",
    });
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleKeyActivate = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToId(id);
    }
  };

  return (
    <div
      ref={frameRef}
      className="interactive-avatar-wrapper"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      aria-hidden={false}
    >
      <img
        src="/photo.png"
        alt="Anmol Tiwari avatar"
        className="avatar-img"
        style={imgStyle}
        loading="lazy"
      />

      <div
        className="bubble bubble-code"
        role="button"
        tabIndex={0}
        aria-label="View projects"
        data-tooltip="Projects"
        onClick={() => scrollToId("projects")}
        onKeyDown={(e) => handleKeyActivate(e, "projects")}
      >
        <i className="fa-solid fa-code"></i>
      </div>

      <div
        className="bubble bubble-db"
        role="button"
        tabIndex={0}
        aria-label="View skills"
        data-tooltip="Skills"
        onClick={() => scrollToId("skills")}
        onKeyDown={(e) => handleKeyActivate(e, "skills")}
      >
        <i className="fa-solid fa-database"></i>
      </div>

      <div
        className="bubble bubble-terminal"
        role="button"
        tabIndex={0}
        aria-label="Contact"
        data-tooltip="Contact"
        onClick={() => scrollToId("contact")}
        onKeyDown={(e) => handleKeyActivate(e, "contact")}
      >
        <i className="fa-solid fa-terminal"></i>
      </div>
    </div>
  );
}
