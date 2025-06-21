import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Custom Portfolio Design",
    desc: "Tailored portfolios that match your style, goals, and profession.",
    icon: "🎨",
  },
  {
    title: "Mobile & SEO Optimized",
    desc: "Fast, responsive, and discoverable on search engines like Google.",
    icon: "📱",
  },
  {
    title: "One-Click Sharing",
    desc: "Share via link, QR code, or digital card in seconds.",
    icon: "🔗",
  },
  { title: "Coming Soon" },
  { title: "Coming Soon" },
  { title: "Coming Soon" },
  { title: "Coming Soon" },
  { title: "Coming Soon" },
];

const cardVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: (i) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}       // starting
      animate={{ opacity: 1, y: 0 }}        // after mount
      exit={{ opacity: 0, y: -20 }}         // on unmount
      transition={{ duration: 0.4 }}        // smooth transition
    >
    <section className="min-h-screen bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Key Features We Offer
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-4">{item.icon || "🚧"}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.desc || "Feature coming soon..."}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
   </motion.div>
  );
};

export default Features;
