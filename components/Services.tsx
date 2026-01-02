import React from 'react';
import { Film, Zap, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const services = [
    {
        title: "Viral Motion Design",
        description: "High-energy editing, kinetic typography, and sound design that hooks viewers from the first second and keeps retention high until the very end.",
        icon: <Film className="w-8 h-8 text-cyan-400" />,
        gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
        border: "group-hover:border-cyan-500/50"
    },
    {
        title: "Content Strategy",
        description: "I don’t guess; I strategize. We analyze your niche to create video concepts proven to perform, ensuring every upload has viral potential.",
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
        border: "group-hover:border-yellow-500/50"
    },
    {
        title: "Personal Brand Growth",
        description: "Complete management of your visual identity on Instagram and YouTube to establish you as an authority in your field.",
        icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
        gradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
        border: "group-hover:border-emerald-500/50"
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-32 bg-black relative border-y border-white/5 overflow-hidden">

            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-md text-blue-300 font-medium mb-8 backdrop-blur-md">
                        <Sparkles className="w-4 h-4" />
                        <span>Premium Production Quality</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">How We Scale Your Brand</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        We combine psychological hooks with world-class motion design to turn passive viewers into raving fans.
                    </p>
                </div>

                {/* 3 Columns Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className={`group relative p-1 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500`}>

                            {/* Inner Card content with own background */}
                            <div className="relative h-full bg-neutral-900/90 backdrop-blur-xl rounded-[22px] p-8 flex flex-col z-10 border border-white/5 transition-colors duration-500 group-hover:bg-neutral-900/80">

                                {/* Icon Container */}
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>

                                <div className="mt-auto">
                                    <button className="flex items-center text-sm font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-widest gap-2">
                                        Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`}></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
