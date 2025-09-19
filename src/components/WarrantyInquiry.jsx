import { useState } from "react";
import GetQuoteButton from "./GetQuoteButton";
import DownloadButton from "./DownloadButton";
import SubmitButton from "./SubmitButton";
import emailjs from "emailjs-com";

export default function WarrantyInquiry() {
  const [formData, setFormData] = useState({
    contactedDealer: "",
    preferredDealer: "",
    chassisNumber: "",
    state: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const australiaStates = [
    "New South Wales",
    "Victoria",
    "Queensland",
    "South Australia",
    "Western Australia",
    "Tasmania",
    "Northern Territory",
    "Australian Capital Territory",
  ];

  const dealers = ["Sydney Motors", "Melbourne Auto", "Brisbane Dealer", "Adelaide Car Hub"];

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


const handleSubmit = async () => {
  if (!validate()) return;
  setLoading(true);

  try {
    await emailjs.send(
      "your_service_id",   // 🔹 Replace with EmailJS Service ID
      "your_template_id",  // 🔹 Replace with EmailJS Template ID
      formData,
      "your_public_key"    // 🔹 Replace with EmailJS Public Key
    );

    alert("✅ Your inquiry has been sent to admin!");
    setFormData({
      contactedDealer: "",
      preferredDealer: "",
      chassisNumber: "",
      state: "",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.error("Email sending failed:", err);
    alert("Failed to send inquiry. Please try again later.");
  }

  setLoading(false);
};


  return (
    <><section className="bg-gray-900 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
              {/* Left Form */}
              <div>
                  <h2 className="text-2xl font-bold mb-2">Make A Warranty Inquiry</h2>
                  <p className="mb-6 text-gray-300">
                      Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                      vulputate libero et velit interdum, ac aliquet odio mattis
                  </p>

                  {/* Form */}
                  <div className="space-y-5">
                      {/* Contacted Dealer */}
                      <div>
                          <select
                              name="contactedDealer"
                              value={formData.contactedDealer}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gray-500 focus:outline-none p-2"
                          >
                              <option value="">Have you contacted your nearest dealer*</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                          </select>
                          {errors.contactedDealer && (
                              <p className="text-red-400 text-sm">{errors.contactedDealer}</p>
                          )}
                      </div>

                      {/* Preferred Dealer */}
                      <div>
                          <select
                              name="preferredDealer"
                              value={formData.preferredDealer}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gray-500 focus:outline-none p-2"
                          >
                              <option value="">Choose a Preferred Dealer*</option>
                              {dealers.map((d) => (
                                  <option key={d} value={d}>{d}</option>
                              ))}
                          </select>
                          {errors.preferredDealer && (
                              <p className="text-red-400 text-sm">{errors.preferredDealer}</p>
                          )}
                      </div>

                      {/* Chassis Number */}
                      <div>
                          <input
                              type="text"
                              name="chassisNumber"
                              value={formData.chassisNumber}
                              onChange={handleChange}
                              placeholder="Chassis Number*"
                              className="w-full bg-transparent border-b border-gray-500 focus:outline-none p-2" />
                          {errors.chassisNumber && (
                              <p className="text-red-400 text-sm">{errors.chassisNumber}</p>
                          )}
                      </div>

                      {/* State */}
                      <div>
                          <select
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gray-500 focus:outline-none p-2"
                          >
                              <option value="">Your State*</option>
                              {australiaStates.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                              ))}
                          </select>
                          {errors.state && (
                              <p className="text-red-400 text-sm">{errors.state}</p>
                          )}
                      </div>

                      {/* Names */}
                      <div className="grid grid-cols-2 gap-4">
                          <div>
                              <input
                                  type="text"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                  placeholder="First Name*"
                                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none p-2" />
                              {errors.firstName && (
                                  <p className="text-red-400 text-sm">{errors.firstName}</p>
                              )}
                          </div>
                          <div>
                              <input
                                  type="text"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleChange}
                                  placeholder="Last Name*"
                                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none p-2" />
                              {errors.lastName && (
                                  <p className="text-red-400 text-sm">{errors.lastName}</p>
                              )}
                          </div>
                      </div>

                      {/* Email */}
                      <div>
                          <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email*"
                              className="w-full bg-transparent border-b border-gray-500 focus:outline-none p-2" />
                          {errors.email && (
                              <p className="text-red-400 text-sm">{errors.email}</p>
                          )}
                      </div>

                      {/* Message */}
                      <div>
                          <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Message*"
                              rows="3"
                              className="w-full bg-transparent border-b border-gray-500 focus:outline-none p-2" />
                          {errors.message && (
                              <p className="text-red-400 text-sm">{errors.message}</p>
                          )}
                      </div>

                      <SubmitButton onClick={handleSubmit} disabled={loading} />
                  </div>
              </div>

              {/* Right Contact Details */}
              <div className="bg-gray-500 p-6 rounded-md space-y-4">
                  <h3 className="text-lg font-semibold">Contact Details</h3>
                  <p>📞 +81 234 466 789</p>
                  <p>📧 info@sunstar.com.au</p>
                  <p>📍 St. Lauren's Rd, P.O. 113, West Adelaide</p>
              </div>
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
          </section></>
      
      
  );
}
