import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>

        {/* Contact Info */}
        <div className="mb-8 text-lg text-gray-700">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:vinayvaghani571@gmail.com"
              className="text-blue-600 hover:underline"
            >
              yourname@example.com
            </a>
          </p>
          <p>
            📱 Mobile:{" "}
            <a href="Mo.:+919727081506" className="text-blue-600 hover:underline">
              +91 1234567890
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
