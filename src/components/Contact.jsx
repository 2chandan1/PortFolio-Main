import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
const [loading, setLoading] = useState(false);

const sendEmail = async (e) => {
e.preventDefault();
setLoading(true);

try {
  const result = await emailjs.sendForm(
    "service_boriaid",
    "template_bxxjcs2",
    e.target,
    "pZ2qH0dYhxmgIffsx"
  );
console.log(result);
  toast.success("Message sent successfully!");
  e.target.reset();
} catch (error) {
  console.error(error);
  toast.error("Failed to send message.");
} finally {
  setLoading(false);
}

};

return ( <section className="py-20 px-6 bg-base-200" data-aos="fade-up"> <div className="max-w-6xl mx-auto"> <h2 className="text-4xl font-bold text-center mb-12">
Contact Me </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

      {/* Contact Form */}
      <form
        onSubmit={sendEmail}
        className="bg-base-100 rounded-2xl p-8 shadow-xl border border-base-300"
      >
        <h3 className="text-2xl font-semibold mb-6">
          Let's Build Something Great
        </h3>

        <div className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              className="input input-bordered w-full focus:outline-none focus:ring-0 focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="john@example.com"
              className="input input-bordered w-full focus:outline-none focus:ring-0 focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Subject</span>
            </label>

            <input
              type="text"
              name="subject"
              placeholder="Job Opportunity / Collaboration"
              className="input input-bordered w-full focus:outline-none focus:ring-0 focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              className="textarea textarea-bordered w-full focus:outline-none focus:ring-0 focus:border-primary"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Contact Info */}
      <div className="bg-base-100 rounded-2xl p-8 shadow-xl border border-base-300 flex flex-col justify-between">
        <div>
          <div className="badge badge-success gap-2 mb-4">
            Available for Opportunities
          </div>

          <h3 className="text-3xl font-bold mb-4">
            Let's Connect
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Full Stack Engineer with 4+ years of experience building
            scalable web applications using React.js, Node.js,
            MongoDB, Laravel, and modern frontend technologies.
            Open to Full-Time, Remote, Product-Based, and Global
            Engineering Opportunities.
          </p>

          <div className="divider"></div>

          <div className="space-y-4">

            <a
              href="mailto:tiwarichandan936@gmail.com"
              className="flex items-center gap-3 hover:text-primary transition"
            >
              <i className="fa-solid fa-envelope text-lg"></i>
              <span> tiwarichandan936@gmail.com</span>
            </a>

            <a
              href="tel:+919905880522"
              className="flex items-center gap-3 hover:text-primary transition"
            >
              <i className="fa-solid fa-phone text-lg"></i>
              <span>+91 9905880522</span>
            </a>

            <a
              href="https://www.linkedin.com/in/chandan-tiwari9905"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-primary transition"
            >
              <i className="fab fa-linkedin text-lg"></i>
              <span>LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/2chandan1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-primary transition"
            >
              <i className="fab fa-github text-lg"></i>
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-primary w-full"
          >
            Download Resume
          </a>
        </div>
      </div>

    </div>
  </div>
  
</section>


);
};

export default Contact;
