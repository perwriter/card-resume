"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // Use plain string for status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-2 relative inline-block">
          Contact
          <div className="absolute -right-48 top-1/2 w-40 h-1 bg-orange-500"></div>
        </h1>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-orange-50 rounded-3xl p-8">
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-4">Phone:</h2>
              <div className="space-y-2">
                <p>+254715990719</p>
                <p>+254735005251</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-8">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-4">Email:</h2>
              <p>perwriters@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 rounded-3xl p-8">
        <p className="text-lg mb-8">
          I am always open to discussing{" "}
          <span className="font-bold">new projects</span>,{" "}
          <span className="font-bold">opportunities in tech world</span>,{" "}
          <span className="font-bold">partnerships</span> and more so{" "}
          <span className="font-bold">mentorship</span>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-bold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`
              px-8 py-3 rounded-full border-2 border-orange-500 
              transition-all duration-200
              ${
                status === "loading"
                  ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                  : "hover:bg-orange-500 hover:text-white"
              }
            `}
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-green-600">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
