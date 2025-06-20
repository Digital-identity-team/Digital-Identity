// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_9fal7pp', 'template_steviji', form.current, 'u1fV1KYpEg12-mqJc')
//       .then(
//         (result) => {
//           alert('Message Sent Successfully!');
//           form.current.reset();
//         },
//         (error) => {
//           console.error(error.text);
//           alert('Something went wrong. Try again.');
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
//       <input
//         type="text"
//         name="user_name"
//         placeholder="Your Name"
//         required
//         className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="email"
//         name="user_email"
//         placeholder="Your Email"
//         required
//         className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <textarea
//         name="message"
//         placeholder="Your Message"
//         required
//         className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         rows="5"
//       />
//       <button
//         type="submit"
//         className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
