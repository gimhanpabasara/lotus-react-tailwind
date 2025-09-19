import { useState } from "react";
import emailjs from "emailjs-com";
import GetQuoteButton from "./GetQuoteButton";
import DownloadButton from "./DownloadButton";

// ✅ Reusable Send Button Component
function SendButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-green-900 hover:bg-green-800 text-white font-semibold py-2 px-10 rounded relative overflow-hidden"
    >
      Send
      <span className="absolute right-0 top-0 h-full w-6 bg-gray-400 skew-x-12"></span>
    </button>
  );
}

export default function GetAQuote() {
  const [formData, setFormData] = useState({
    interest: "",
    model: "",
    state: "",
    dealer: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // ✅ Dropdown Data
  const interests = ["Trooper", "Trooper 1", "Trooper 2"];
  const models = ["Model X", "Model Y", "Model Z", "Model Alpha"];
  const states = [
    "New South Wales",
    "Victoria",
    "Queensland",
    "Western Australia",
    "South Australia",
    "Tasmania",
    "Australian Capital Territory",
    "Northern Territory",
  ];
  const dealers = ["Dealer One", "Dealer Two", "Dealer Three"];

  // ✅ Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.interest) newErrors.interest = "Please select your interest";
    if (!formData.model) newErrors.model = "Please select a model";
    if (!formData.state) newErrors.state = "Please select your state";
    if (!formData.dealer) newErrors.dealer = "Please select a dealer";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Send Email (stub for backend or EmailJS integration)
    const handleSendEmail = async () => {
    if (!validate()) return;

    try {
        const result = await emailjs.send(
        "your_service_id",   // 🔹 from EmailJS dashboard
        "your_template_id",  // 🔹 from EmailJS dashboard
        {
            interest: formData.interest,
            model: formData.model,
            state: formData.state,
            dealer: formData.dealer,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message,
        },
        "your_public_key" // 🔹 from EmailJS
        );

        console.log(result.text);
        setStatus(" Your quote request has been sent successfully!");
    } catch (error) {
        console.error("Email sending failed:", error);
        setStatus(" Failed to send. Please try again later.");
    }
  };

  return (
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
            className="w-full h-60 object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">Get A Quote</h3>
          <p className="text-gray-600 mt-2">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="mt-4">
            {/* Replace with your actual button or form logic */}
            {/* <GetQuoteButton /> */}
            <SendButton onClick={handleSendEmail} />
            {status && <div className="mt-2 text-green-700">{status}</div>}
          </div>
        </div>

        {/* Card 2 */}
        <div className="text-left">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Download Brochure"
            className="w-full h-60 object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">Download Brochure</h3>
          <p className="text-gray-600 mt-2">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="mt-4">
            {/* <DownloadButton /> */}
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-10 rounded">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
