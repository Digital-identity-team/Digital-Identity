import React from "react";

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
  {
    title: "Coming Soon",
    // desc: "Showcase your Instagram, GitHub, LinkedIn & more.",
    // icon: "🌐",
  },
  {
    title: "Coming Soon",
    // desc: "Display your past work and client feedback beautifully.",
    // icon: "💼",
  },
  {
    title: "Coming Soon",
    // desc: "Track visits, clicks, and traffic sources in real-time.",
    // icon: "📊",
  },
  {
    title: "Coming Soon",
    // desc: "Get your own .com, .quest, or .xyz domain for branding.",
    // icon: "🌍",
  },
  {
    title: "Coming Soon",
    // desc: "Auto-generate your about section or resume using AI.",
    // icon: "🤖",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        🚀 Key Features We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 shadow hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;