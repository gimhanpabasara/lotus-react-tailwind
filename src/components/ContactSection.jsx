import { useState } from "react";

// ✅ Reusable Send Button Component
function SendButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded relative overflow-hidden"
    >
      Send
      <span className="absolute right-0 top-0 h-full w-6 bg-gray-400 skew-x-12"></span>
    </button>
  );
}

export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // ✅ Form Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.contactNumber.match(/^[0-9]{8,15}$/))
      newErrors.contactNumber = "Valid contact number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Send Email Function (Stub - replace with EmailJS or backend API)
  const handleSendEmail = async () => {
    if (!validate()) return;

    try {
      // Example: You can integrate with EmailJS or your backend API here
      // await emailjs.send("service_id", "template_id", formData, "public_key");
      console.log("Email sent to admin:", formData);
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="w-full">
      {/* ---------- Contact Us Section ---------- */}
      <section className="bg-black text-white px-10 py-20 flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-8">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis
          </p>

          {/* Form Fields */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

            <input
              type="text"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

            <input
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="text"
              placeholder="Contact Number*"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({ ...formData, contactNumber: e.target.value })
              }
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">{errors.contactNumber}</p>
            )}

            <textarea
              placeholder="Message*"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <SendButton onClick={handleSendEmail} />
          </form>

          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>

        {/* Right: Contact Details */}
        <div className="w-full md:w-1/3 bg-gray-500 p-6 rounded-lg text-black">
          <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
          <p className="mb-2">📞 +81 234 466 789</p>
          <p className="mb-2">📧 info@sunstar.com.au</p>
          <p>📍 St. Lauren's Rd, P.O. 113, West Adelaide</p>
        </div>
      </section>

      {/* ---------- Map Section ---------- */}
      <section className="bg-gray-200 py-16 px-10 text-center">
        <h2 className="text-xl font-bold mb-2">Find Us on Google</h2>
        <p className="text-gray-600 mb-8">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis
        </p>
        <div className="w-full max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31507789.942886595!2d113.6594496326209!3d-25.027398889949252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ab0b4ffbdfbeec5%3A0xf02a35d78b40a70!2sSouth%20Australia!5e0!3m2!1sen!2sau!4v1694842809871!5m2!1sen!2sau"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>
      
      

    </div>
  );
}
