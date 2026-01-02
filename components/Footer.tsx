import React from 'react';
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-widest uppercase">HillMan Media</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
            <a href="mailto:suyashmishra730@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} /> suyashmishra730@gmail.com
            </a>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} /> (+91) 63073 91072
            </div>
            <a href="https://instagram.com/Suyashmishra_7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
              <Instagram size={16} /> @Suyashmishra_7
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600 border-t border-white/5 pt-8">
          © 2024 HillMan Media. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};