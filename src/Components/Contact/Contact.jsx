import React, { useState } from 'react';
import contact from '../../assets/school_logoo.jpg';

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // Form status for feedback
  const [message, setMessage] = useState(""); // Message input field state
  const [formMessage, setFormMessage] = useState(""); // Submission feedback message

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "cab23759-cf73-477c-bdcc-139e11e4e7ec");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus("success");
        setFormMessage("Message submitted to Upperhill College successfully!");
        setMessage(""); // Clear the message textarea
      } else {
        setFormStatus("error");
        setFormMessage("Submission failed: " + res.message);
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-green-400 min-h-screen fade-in-bg">
      {/* Image Section */}
      <div className="w-full mt-24 md:w-1/2">
        <img src={contact} alt="Contact Us" className="w-full h-full object-cover rounded-lg shadow-lg fade-in-bg" />
      </div>

      {/* Form Section */}
      <div className="w-full mt-28 md:w-1/2 p-6">
      <h1 className="text-3xl font-bold text-blue-800 text-center text-green-700 mb-3">Upperhill College</h1>
        <h1 className="text-2xl font-bold text-blue-800 text-center mb-6 md:text-3xl">Get In Touch With Us</h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          We are ready to receive any reviews, comments, or even questions. Feel free to reach out, and we’ll reply as soon as possible!
        </p>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="block w-full bg-blue-50 p-3 rounded-lg shadow-sm border border-gray-300 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="block w-full bg-blue-50 p-3 rounded-lg shadow-sm border border-gray-300 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Write Your Message Here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              value={message} // Bind to state
              onChange={(e) => setMessage(e.target.value)} // Handle input change
              className="block w-full bg-blue-50 p-3 rounded-lg shadow-sm border border-gray-300 focus:ring focus:ring-blue-200 resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              disabled={formStatus === "sending"}
              type="submit"
              className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition duration-300"
            >
              {formStatus === "sending" ? "Sending..." : "Submit now"}
            </button>
            {formStatus === "success" && <p className="text-blue-700 mt-4">{formMessage}</p>}
            {formStatus === "error" && <p className="text-red-500 mt-4">{formMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
