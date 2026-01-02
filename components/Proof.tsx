import React from 'react';

// Mock Data for Testimonials (Text & Image)
const testimonials = [
  // Text: User Specific
  { type: "text", content: "In just a couple of months, we hit 6k followers and generated over 58 Lakh (5.8M) views.", author: "@Viral_Growth", color: "bg-blue-500/10 border-blue-500/20" },
  { type: "text", content: "Pulled in 40M+ organic views on Instagram in just 45 days. Absolutely insanity.", author: "@TopCreator", color: "bg-green-500/10 border-green-500/20" },

  // All User Images
  { type: "image", src: "/testimonials/0000.png", author: "Analytics", color: "" },
  { type: "image", src: "/testimonials/0909.png", author: "Wins", color: "" },
  { type: "image", src: "/testimonials/11122222.png", author: "Growth", color: "" },
  { type: "image", src: "/testimonials/1212.png", author: "Engagement", color: "" },
  { type: "image", src: "/testimonials/12344.png", author: "Dashboard", color: "" },

  // Text: Professional Fillers
  { type: "text", content: "Content that actually converts. My DM's haven't stopped since we started.", author: "@Coach_Mike", color: "bg-purple-500/10 border-purple-500/20" },
  { type: "text", content: "The visual storytelling is next level. Saved me hours of editing time.", author: "@Sarah_Creates", color: "bg-orange-500/10 border-orange-500/20" },

  // More Images
  { type: "image", src: "/testimonials/1313.png", author: "Reach", color: "" },
  { type: "image", src: "/testimonials/4444.png", author: "Performance", color: "" },
  { type: "image", src: "/testimonials/5678.png", author: "Scale", color: "" },
  { type: "image", src: "/testimonials/WhatsApp Image 2025-08-22 at 12.11.43 PM (2)_LI (1).jpg", author: "Chat", color: "" },
  { type: "image", src: "/testimonials/WhatsApp Image 2025-08-22 at 12.11.43 PM (2)_LI.jpg", author: "Feedback", color: "" },

  // Text: More Fillers
  { type: "text", content: "Viral engineering at its finest. Suyash knows exactly what hooks the audience.", author: "@Tech_Insider", color: "bg-cyan-500/10 border-cyan-500/20" },
  { type: "text", content: "Best investment for my personal brand this year.", author: "@Founder_Daily", color: "bg-red-500/10 border-red-500/20" },

  // Remaining Images
  { type: "image", src: "/testimonials/WhatsApp Image 2025-08-22 at 12.11.43 PM (3)_LI (1).jpg", author: "Results", color: "" },
  { type: "image", src: "/testimonials/WhatsApp Image 2025-08-22 at 12.11.43 PM (3)_LI.jpg", author: "Proof", color: "" },
  { type: "image", src: "/testimonials/WhatsApp_Image_2025-05-05_at_10.04.50_AM.jpg", author: "Views", color: "" },
  { type: "image", src: "/testimonials/WhatsApp_Image_2025-05-05_at_10.04.50_AM_(1).jpg", author: "Stats", color: "" },
  { type: "image", src: "/testimonials/WhatsApp_Image_2025-05-05_at_10.04.51_AM.jpg", author: "Graph", color: "" },
  { type: "image", src: "/testimonials/WhatsApp_Image_2025-05-05_at_11.37.34_AM.jpg", author: "Trending", color: "" },
  { type: "image", src: "/testimonials/WhatsApp_Image_2025-05-05_at_11.37.35_AM.jpg", author: "Viral", color: "" },
  { type: "image", src: "/testimonials/WhatsApp_Image_2025-07-09_at_4.21.36_PM.jpg", author: "Growth", color: "" },
  { type: "image", src: "/testimonials/WhatsApp_Image_2025-07-09_at_4.21.37_PM_(1).jpg", author: "Data", color: "" },
  { type: "image", src: "/testimonials/WhatsApp_Image_2025-07-09_at_4.21.56_PM.jpg", author: "Success", color: "" },
];

// Duplicate data to ensure seamless loop
const columnData = [...testimonials, ...testimonials, ...testimonials];

const TestimonialCard = ({ item }: { item: any }) => (
  // Added conditional logic: remove border/padding/background for images
  <div className={`mb-4 break-inside-avoid rounded-xl backdrop-blur-sm ${item.type === 'text' ? `border p-4 ${item.color} bg-neutral-900/50` : 'border-none p-0 bg-transparent'}`}>
    {item.type === 'text' ? (
      <>
        <p className="text-sm text-gray-300 mb-2 leading-relaxed">"{item.content}"</p>
        <div className="text-xs font-bold text-white/50">{item.author}</div>
      </>
    ) : (
      <div className="relative rounded-lg overflow-hidden">
        <img src={item.src} alt={item.author} className="w-full h-auto block opacity-100 transition-opacity" />
      </div>
    )}
  </div>
);

export const Proof = () => {
  return (
    <section id="proof" className="relative py-24 bg-surface overflow-hidden">

      {/* Header */}
      <div className="text-center mb-12 relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">They Trust The Process</h2>
        <p className="text-gray-400">Creators, Brands, and Agencies scaling with video.</p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative h-[800px] overflow-hidden mask-linear-gradient">

        {/* Gradients to fade out top/bottom */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-surface to-transparent z-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent z-20 pointer-events-none"></div>

        {/* Global Animation Styles */}
        <style>{`
          @keyframes scroll-up-slow {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-up { 
            animation: scroll-up-slow 60s linear infinite; /* Mobile: Slower */
          }
          @media (min-width: 768px) {
            .animate-scroll-up { 
              animation-duration: 30s; /* Desktop: Faster */
            }
          }
          .animate-scroll-up:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Masonry Layout Wrapper */}
        <div className="animate-scroll-up w-full max-w-7xl mx-auto px-4">
          {/* FIRST COPY */}
          <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4 pb-4">
            {testimonials.map((item, i) => <TestimonialCard key={`orig-${i}`} item={item} />)}
          </div>
          {/* DUPLICATE COPY FOR LOOP */}
          <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {testimonials.map((item, i) => <TestimonialCard key={`dup-${i}`} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};