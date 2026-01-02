import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from './ui/Button';

// Utility to convert Drive links to Preview/Embed links
const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com')) {
        return url.replace('/view', '/preview'); // Basic replacement, works for most share links
    }
    return url;
};

// Placeholders for portfolio items as requested
// USER: Replace videoUrl with your actual Google Drive share links
const portfolioItems = [
    {
        title: "Talking Head",
        color: "from-purple-500/20 to-blue-500/20",
        label: "Educational",
        videoUrl: "https://drive.google.com/file/d/1cRFfOES3p8CEzN4111n7Mg93DY_m0N_e/view"
    },
    {
        title: "Cinematic",
        color: "from-orange-500/20 to-red-500/20",
        label: "Storytelling",
        videoUrl: "https://drive.google.com/file/d/1p7uaE8LJrPietirzuGLI-P0V7ISOZvaX/view"
    },
    {
        title: "Explainer",
        color: "from-green-500/20 to-emerald-500/20",
        label: "Business",
        videoUrl: "https://drive.google.com/file/d/1iHw95HImx5q0p4ZAQVih2FKgn49vA3nX/view"
    },
    {
        title: "Viral Short",
        color: "from-pink-500/20 to-rose-500/20",
        label: "Entertainment",
        videoUrl: "https://drive.google.com/file/d/1E1_gAC8gHH6opI3hk_yepZo511Mfg2aB/view"
    }
];

export const Portfolio = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section id="work" className="py-32 relative bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Recent Motion Work</h2>
                        <p className="text-gray-400 text-lg">A curation of short-form content designed to convert.</p>
                    </div>
                    <Button variant="outline" icon={<Play className="w-4 h-4 fill-current" />}>
                        Watch Showreel
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer"
                            onClick={() => setSelectedVideo(item.videoUrl)}
                        >
                            {/* Video Thumbnail (Iframe in Preview Mode) */}
                            <div className="absolute inset-0 bg-neutral-800">
                                <iframe
                                    src={getEmbedUrl(item.videoUrl)}
                                    className="w-full h-full pointer-events-none select-none"
                                    title={item.title}
                                    tabIndex={-1}
                                    loading="lazy"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                                <span className="text-xs font-mono text-white/70 uppercase tracking-wider mb-1 block">{item.label}</span>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in-up">
                    <button
                        onClick={() => setSelectedVideo(null)}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[101]"
                    >
                        <X size={40} />
                    </button>
                    <div className="w-full max-w-sm md:max-w-md aspect-[9/16] bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl relative">
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <iframe
                            src={getEmbedUrl(selectedVideo)}
                            className="w-full h-full"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            title="Video Player"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};
