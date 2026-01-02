import React from 'react';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { AmbientGlow, GridBackground } from './ui/BackgroundEffects';

export const Hero = () => {
   return (
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
         <GridBackground />
         <AmbientGlow />

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-center md:items-start">
               {/* Availability Badge */}
               <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-green-400 hover:bg-white/10 transition-colors cursor-default">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                     <span>Accepting New Clients</span>
                  </div>
               </div>

               {/* Hook / Headline */}
               <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Stop Posting Content<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                     That Gets Ignored.
                  </span>
               </h1>

               {/* Promise / Subhead */}
               <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  I help personal brands and creators <span className="text-white font-medium">5x their reach</span> with viral short-form videos and high-retention motion design.
               </p>

               {/* CTA Buttons */}
               <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                     Start Your Growth
                  </Button>
                  <Button variant="secondary" size="lg" icon={<PlayCircle className="w-4 h-4" />}>
                     View Selected Work
                  </Button>
               </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="flex-1 w-full max-w-md md:max-w-none relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
               <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
                  {/* 
                  REPLACE THIS SRC WITH YOUR IMAGE URL
                  Example: src="/my-photo.jpg" 
                */}
                  <img
                     src="/suyash.jpg"
                     alt="Suyash Mishra"
                     className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>

               {/* Decorative Elements around image */}
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl -z-10"></div>
               <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl -z-10"></div>
            </div>

         </div>
      </section>
   );
};