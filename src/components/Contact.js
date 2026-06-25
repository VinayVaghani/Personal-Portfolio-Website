import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle, FaUser } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [messageText, setMessageText] = useState("");
  const characterLimit = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/mwvyeybn", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });
      
      if (response.ok) {
        setStatus("success");
        setMessageText("");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-[#111827] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contact Me</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white dark:bg-[#1a2332] p-8 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/20 border border-slate-200/50 dark:border-[#2d3a4f] transition-colors duration-300">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                Let's Discuss Your Ideas
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you have a project idea, want to collaborate on open-source, discuss coding problems, or just say hello, my inbox is always open. I will do my best to respond within 24 hours!
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-[#2d3a4f]">
              {/* Email Link */}
              <a
                href="mailto:vinayvaghani571@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-100 dark:border-[#2d3a4f] hover:border-blue-500/35 dark:hover:border-blue-400/40 transition duration-300 group"
              >
                <div className="p-3 bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">Email Me</p>
                  <p className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200">vinayvaghani571@gmail.com</p>
                </div>
              </a>

              {/* Mobile Link */}
              <a
                href="tel:+919727081506"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#111827] border border-slate-100 dark:border-[#2d3a4f] hover:border-blue-500/35 dark:hover:border-blue-400/40 transition duration-300 group"
              >
                <div className="p-3 bg-indigo-50 dark:bg-violet-500/15 text-indigo-600 dark:text-violet-400 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                  <FaPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">Call / WhatsApp</p>
                  <p className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200">+91 97270 81506</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Polished Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[400px]">
            {status === "success" ? (
              /* Success Card State */
              <div className="bg-white dark:bg-[#1a2332] rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/20 p-8 border border-slate-200/50 dark:border-[#2d3a4f] text-center space-y-6 flex flex-col items-center justify-center h-full transition-all duration-500 animate-fade-in">
                <div className="text-emerald-500 dark:text-emerald-400 animate-bounce">
                  <FaCheckCircle size={64} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="max-w-md text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Thank you for reaching out. Your message has been successfully transmitted via Formspree, and I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("")}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all duration-300 font-semibold text-sm transform hover:-translate-y-0.5"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Interactive Form State */
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-[#1a2332] rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/20 p-8 border border-slate-200/50 dark:border-[#2d3a4f] space-y-6 transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Name Input */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                      <FaUser size={14} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full pl-10 pr-4 py-3.5 bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#2d3a4f] focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/15 rounded-xl outline-none transition duration-300 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                      <FaEnvelope size={14} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full pl-10 pr-4 py-3.5 bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#2d3a4f] focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/15 rounded-xl outline-none transition duration-300 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      required
                      maxLength={characterLimit}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-[#2d3a4f] focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/15 rounded-xl outline-none transition duration-300 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base resize-none"
                    ></textarea>
                    {/* Character Counter */}
                    <div className="text-right text-xs text-slate-400 dark:text-slate-500 mt-1">
                      {messageText.length} / {characterLimit} characters
                    </div>
                  </div>
                </div>

                {/* Submit Button & Status */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-semibold text-sm sm:text-base transform hover:-translate-y-0.5"
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        <FaPaperPlane size={14} />
                        Send Message
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 dark:text-red-400 text-sm font-semibold animate-pulse text-center sm:text-left">
                      ✗ Error sending message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;