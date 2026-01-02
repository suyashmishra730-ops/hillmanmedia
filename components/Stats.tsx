import React from 'react';
import { TrendingUp, Users, Zap, Activity } from 'lucide-react';

const stats = [
  {
    label: "Views Generated",
    value: "5.8 Million+",
    icon: <TrendingUp className="w-5 h-5 text-blue-400" />
  },
  {
    label: "Followers Gained",
    value: "6,000+",
    sub: "in 60 Days",
    icon: <Users className="w-5 h-5 text-purple-400" />
  },
  {
    label: "Viral Campaigns",
    value: "30+",
    icon: <Zap className="w-5 h-5 text-yellow-400" />
  },
  {
    label: "Engagement Boost",
    value: "100%",
    icon: <Activity className="w-5 h-5 text-green-400" />
  }
];

export const Stats = () => {
  return (
    <section className="bg-surface border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-3 p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label} {stat.sub && <span className="text-gray-500 block text-xs">{stat.sub}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
