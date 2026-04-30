import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/mwvyeybn", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });
      
      if (response.ok) {
        setStatus("✓ Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("✗ Failed to send message");
      }
    } catch (error) {
      setStatus("✗ Error sending message");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>

        <div className="mb-8 text-lg text-gray-700">
          <p>📧 Email: <a href="mailto:vinayvaghani571@gmail.com" className="text-blue-600 hover:underline">vinayvaghani571@gmail.com</a></p>
          <p>📱 Mobile: <a href="tel:+919727081506" className="text-blue-600 hover:underline">+91 9727081506</a></p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full border p-3 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full border p-3 rounded" />
          <textarea name="message" placeholder="Your Message" rows="4" required className="w-full border p-3 rounded"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
        </form>
        
        {status && <p className="mt-4 text-lg font-semibold">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;