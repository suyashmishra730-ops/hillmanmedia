import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

export const FloatingCTA = () => {
    return (
        <div className="fixed bottom-8 right-8 z-40 animate-fade-in-up">
            <a
                href="mailto:suyashmishra730@gmail.com" // Or a booking link if provided
                className="group flex items-center gap-3 pl-4 pr-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40 border border-white/10"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    <Calendar className="w-5 h-5 relative z-10" />
                </div>
                <span className="font-semibold tracking-wide">Book a Call</span>
            </a>
        </div>
    );
};
