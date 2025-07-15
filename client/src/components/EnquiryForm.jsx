import React, { useState } from "react";
import { X, Mail, CheckCircle } from "lucide-react";
import axios from "axios";

export default function EnquiryModal({ showModal, setShowModal }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    courseType: [],
    stream: "",
    year: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleCourseType = (value) => {
    setFormData((prev) => {
      const current = new Set(prev.courseType);
      current.has(value) ? current.delete(value) : current.add(value);
      return { ...prev, courseType: Array.from(current) };
    });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      console.log("Server response:", response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowSuccess(false);
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-6 sm:py-12 overflow-y-auto">
      <div className="relative bg-gradient-to-br from-[#faf5ff] via-[#f3e8ff] to-white rounded-2xl w-full max-w-2xl shadow-xl transition-all max-h-screen overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setShowModal(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="px-6 py-8">
          {!showSuccess ? (
            <>
              <h2 className="text-2xl font-bold text-center text-purple-700 mb-1">
                Apply for 2026 Admission Support
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Fill the form below to speak with an expert counselor within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Current Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Course Type</label>
                  <div className="flex flex-col sm:flex-row gap-4 mt-2 text-gray-500">
                    <label className="flex items-center gap-2 ">
                      <input
                        type="checkbox"
                        checked={formData.courseType.includes("MBBS Abroad")}
                        onChange={() => toggleCourseType("MBBS Abroad")}
                      />
                      <span>MBBS Abroad</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.courseType.includes("Indian College Admission")}
                        onChange={() => toggleCourseType("Indian College Admission")}
                      />
                      <span>Indian College Admission</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Interested Stream
                    </label>
                    <select
                      name="stream"
                      value={formData.stream}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="" disabled>Select a stream</option>
                      <option value="Medical">Medical</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">12th Completion Year</label>
                    <input
                      type="text"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message / Questions</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full mt-4 flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 rounded-md transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z" />
                    </svg>
                  ) : (
                    <Mail className="w-5 h-5" />
                  )}
                  {loading ? "Submitting..." : "Submit & Get a Call Back"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="mx-auto text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Thank you!
              </h3>
              <p className="text-gray-700 mb-6">
                Your enquiry has been received. Our counselor will contact you soon.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                OK
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
