import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Support = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value.trim();
    const mobile = form.current.user_mobile.value.trim();

    const emailRegex = /^\S+@\S+\.\S+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(email)) {
      setErrorMsg("❌ Please enter a valid email address.");
      return;
    }

    if (!mobileRegex.test(mobile)) {
      setErrorMsg("❌ Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setErrorMsg("");
    setIsLoading(true);

    form.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_aztije9", // Your service ID
        "template_b9m45un", // Your template ID
        form.current,
        "gAdau_gAMszN0t71t" // Your public key
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("❌ Something went wrong. Please try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="py-12 flex justify-center items-center px-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center text-sm text-slate-800 w-full max-w-lg"
      >
        <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
          Contact Us
        </p>
        <h1 className="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
        <p className="text-gray-500 pb-10 text-center">
          Or reach us at{" "}
          <a
            href="mailto:team.digitalidentity@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            team.digitalidentity@gmail.com
          </a>
        </p>

        {errorMsg && (
          <div className="text-red-500 text-sm mb-4 text-center w-full">
            {errorMsg}
          </div>
        )}

        <div className="w-full">
          {/* Full Name */}
          <label className="font-medium">Full Name</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full">
            <input
              type="text"
              name="user_name"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <label className="font-medium">Email Address</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full">
            <input
              type="email"
              name="user_email"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Mobile Number */}
          <label className="font-medium">Mobile Number</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full">
            <input
              type="tel"
              name="user_mobile"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your mobile number"
              required
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // only digits
              }}
            />
          </div>

          {/* Message */}
          <label className="font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full mt-2 p-2 border border-slate-300 rounded-lg resize-none outline-none"
            placeholder="Enter your message"
            required
          ></textarea>

          {/* Hidden Timestamp */}
          <input type="hidden" name="time" />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`flex items-center justify-center gap-1 mt-5 ${
              isLoading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            } text-white py-2.5 w-full rounded-full transition`}
          >
            {isLoading ? "Sending..." : "Submit Form"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Support;
