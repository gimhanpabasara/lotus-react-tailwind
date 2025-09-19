import React, { useState } from "react";
import emailjs from "emailjs-com";   // optional if you want email sending
import SubmitButton from "./SubmitButton";

export default function CaravanInquirySection() {
  const [formData, setFormData] = useState({
    chassisNumber: "",
    firstName: "",
    lastName: "",
    postalCode: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const e = {};
    if (!formData.chassisNumber) e.chassisNumber = "Chassis number is required";
    if (!formData.firstName) e.firstName = "First name is required";
    if (!formData.lastName) e.lastName = "Last name is required";
    if (!formData.postalCode) e.postalCode = "Postal code is required";
    if (!formData.email) {
      e.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = "Invalid email format";
    }
    if (!formData.message) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});
    setStatus("Sending...");

    // Optional EmailJS – remove if not needed
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          chassis_number: formData.chassisNumber,
          first_name: formData.firstName,
          last_name: formData.lastName,
          postal_code: formData.postalCode,
          email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("Email sent successfully!");
        setFormData({
          chassisNumber: "",
          firstName: "",
          lastName: "",
          postalCode: "",
          email: "",
          message: "",
        });
      })
      .catch(() => setStatus("Failed to send email. Please try again."));
  };

  return (
      <>
          <section className="bg-[#1a1a1a] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row gap-10 justify-between">
          {/* Left – Form */}
          <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                  Make A Inquiry About <br /> Caravan’s Weight Specifications
              </h2>
              <p className="text-gray-300 mb-8">
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                      <input
                          name="chassisNumber"
                          placeholder="Chassis Number*"
                          value={formData.chassisNumber}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none" />
                      {errors.chassisNumber && (
                          <p className="text-red-500 text-sm">{errors.chassisNumber}</p>
                      )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <input
                              name="firstName"
                              placeholder="First Name*"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none" />
                          {errors.firstName && (
                              <p className="text-red-500 text-sm">{errors.firstName}</p>
                          )}
                      </div>
                      <div>
                          <input
                              name="lastName"
                              placeholder="Last Name*"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none" />
                          {errors.lastName && (
                              <p className="text-red-500 text-sm">{errors.lastName}</p>
                          )}
                      </div>
                  </div>

                  <div>
                      <input
                          name="postalCode"
                          placeholder="Postal Code*"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none" />
                      {errors.postalCode && (
                          <p className="text-red-500 text-sm">{errors.postalCode}</p>
                      )}
                  </div>

                  <div>
                      <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none" />
                      {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                  </div>

                  <div>
                      <textarea
                          name="message"
                          placeholder="Message*"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-gray-400 p-2 focus:outline-none" />
                      {errors.message && (
                          <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                  </div>

                  <SubmitButton onClick={handleSubmit} disabled={loading} />

                  {status && <p className="mt-2 text-sm text-gray-300">{status}</p>}
              </form>
          </div>

          {/* Right – Contact Details */}
          <div className="w-full md:w-1/3 bg-[#8c8a74] p-8 rounded-md space-y-4">
              <h3 className="text-xl font-semibold">Contact Details</h3>
              <p>📞 +81 234 466 789</p>
              <p>📧 info@sunstar.com.au</p>
              <p>📍 St. Lauren's Rd, P.O. 113, West Adelaide</p>
          </div>
      </section>
          
          <section className="py-12 px-6 text-center">
              {/* Heading */}
              <h2 className="text-2xl font-bold mb-6 inline-block relative">
                  ENQUIRES
                  <span className="absolute left-0 bottom-[-6px] h-1 w-full bg-green-700 -skew-x-12"></span>
              </h2>

              {/* Grid Section */}
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">

                  {/* Card 1 */}
                  <div className="text-left">
                      <img
                          src="https://via.placeholder.com/600x300"
                          alt="Get A Quote"
                          className="w-full h-60 object-cover" />
                      <h3 className="text-xl font-semibold mt-4">Get A Quote</h3>
                      <p className="text-gray-600 mt-2">
                          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                          vulputate libero et velit interdum, ac aliquet odio mattis.
                      </p>
                      <div className="mt-4">
                          <GetQuoteButton />
                      </div>
                  </div>

                  {/* Card 2 */}
                  <div className="text-left">
                      <img
                          src="https://via.placeholder.com/600x300"
                          alt="Download Brochure"
                          className="w-full h-60 object-cover" />
                      <h3 className="text-xl font-semibold mt-4">Download Brochure</h3>
                      <p className="text-gray-600 mt-2">
                          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                          vulputate libero et velit interdum, ac aliquet odio mattis.
                      </p>
                      <div className="mt-4">
                          <DownloadButton />
                      </div>
                  </div>
              </div>
          </section>
      </> 
    
      
      
  );
}
