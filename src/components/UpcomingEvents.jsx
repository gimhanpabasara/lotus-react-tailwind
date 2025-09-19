"use client";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <section className="bg-[#111111] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Enquire about</h2>
          <h3 className="text-3xl font-bold mb-6">An Upcoming Show</h3>
          <p className="text-gray-400 mb-10">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Event Name */}
            <div>
              <input
                type="text"
                placeholder="Event Name*"
                {...register("eventName", { required: "Event name is required" })}
                className="w-full bg-transparent border-b border-gray-500 focus:border-green-600 outline-none py-2"
              />
              {errors.eventName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.eventName.message}
                </p>
              )}
            </div>

            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name*"
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full bg-transparent border-b border-gray-500 focus:border-green-600 outline-none py-2"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name*"
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full bg-transparent border-b border-gray-500 focus:border-green-600 outline-none py-2"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email*"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full bg-transparent border-b border-gray-500 focus:border-green-600 outline-none py-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <input
                type="text"
                placeholder="Contact Number*"
                {...register("contactNumber", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{7,15}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                className="w-full bg-transparent border-b border-gray-500 focus:border-green-600 outline-none py-2"
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>

            {/* Postal Code */}
            <div>
              <input
                type="text"
                placeholder="Postal Code*"
                {...register("postalCode", {
                  required: "Postal code is required",
                })}
                className="w-full bg-transparent border-b border-gray-500 focus:border-green-600 outline-none py-2"
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.postalCode.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Message*"
                rows="3"
                {...register("message", { required: "Message is required" })}
                className="w-full bg-transparent border-b border-gray-500 focus:border-green-600 outline-none py-2"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-md"
            >
              Submit
              <span className="absolute -right-4 top-0 h-full w-4 bg-gray-400 skew-x-12"></span>
            </button>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div className="bg-[#8b8b6f] text-white rounded-md p-8 h-fit">
          <h4 className="text-xl font-semibold mb-6">Contact Details</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <span>+81 234 466 789</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-lg">✉️</span>
              <span>info@sunstar.com.au</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <span>
                St. Lauren's Rd,
                <br /> P.O. 113, West Adelaide
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    
      
    
      
      
      
      
  );
}
