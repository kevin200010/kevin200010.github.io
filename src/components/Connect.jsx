import { useState } from "react";
import { motion } from "framer-motion";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    // Replace with your email API endpoint
    const apiEndpoint = "https://your-email-api-endpoint.com/send";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Let's Connect
      </motion.h2>
      <div className="flex flex-wrap lg:flex-nowrap gap-8 px-4 lg:px-20">
        {/* Left: Contact Details */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 space-y-6"
        >
          <h3 className="text-2xl text-neutral-200 font-semibold">Contact Information</h3>
    
          <div className="text-neutral-200">
            <p className="font-semibold">Email:</p>
            <a
              href="mailto:khushineema5@gmail.com"
              className="text-purple-400 hover:underline"
            >
              khushineema5@gmail.com
            </a>
          </div>
          <div className="text-neutral-200">
            <p className="font-semibold">Phone:</p>
            <a
              href="tel:+12016878959"
              className="text-purple-400 hover:underline"
            >
              +1 201-687-8959
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-neutral-400 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-neutral-800 text-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-neutral-800 text-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-neutral-800 text-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-neutral-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </div>
            {status && (
              <p
                className={`text-center mt-4 ${
                  status.includes("successfully") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;
