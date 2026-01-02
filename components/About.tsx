import React from 'react';
import { Video, Award, Users } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                        <Video className="w-4 h-4" />
                        <span>The Story</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                        More Than Just An Editor.
                    </h2>

                    <div className="prose prose-lg prose-invert mx-auto text-gray-400">
                        <p className="text-xl leading-relaxed mb-6">
                            "Hi, I’m <span className="text-white font-semibold">Suyash</span>. I don’t just cut video; I build audiences."
                        </p>

                        <p className="mb-6">
                            With deep experience in growing personal brands across Instagram and YouTube,
                            I understand the <span className="text-blue-400">psychology behind why people click, watch, and share</span>.
                            Over the years, I've helped professionals scale their presence by framing viral content strategies
                            tailored specifically to their niche.
                        </p>

                        <p className="text-white font-medium">
                            My goal is simple: To turn your viewers into a loyal community.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-12 max-w-lg mx-auto">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                            <div className="text-white font-semibold">Strategic Editing</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                            <div className="text-white font-semibold">Audience Building</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
