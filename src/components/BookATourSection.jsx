import React, { useState } from "react";

export default function BookATourSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    postalCode: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.contactNumber.trim())
      newErrors.contactNumber = "Contact number is required";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("Sending...");

    try {
      // 👉 Replace '/api/send-email' with your backend email endpoint
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contactNumber: "",
          postalCode: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending email.");
    }
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row gap-10 justify-between">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Book A Tour</h2>
        <p className="text-gray-300 mb-8">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number*"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">{errors.contactNumber}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code*"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm">{errors.postalCode}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message*"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="relative px-6 py-3 bg-green-900 text-white rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
          {status && <p className="mt-2 text-sm text-gray-300">{status}</p>}
        </form>
      </div>

      {/* Right Side - Contact Details */}
      <div className="w-full md:w-1/3 bg-[#8c8a74] p-8 rounded-md space-y-4">
        <h3 className="text-xl font-semibold">Contact Details</h3>
        <p>📞 +81 234 466 789</p>
        <p>📧 info@sunstar.com.au</p>
        <p>📍 St. Lauren's Rd, P.O. 113, West Adelaide</p>
      </div>
    </section>
  );
}
