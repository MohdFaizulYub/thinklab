
import React from 'react';
import { Target, Eye, Shield, Star, Handshake, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const coreValues = [
    { 
      name: "Integrity", 
      icon: <Shield size={24} />, 
      desc: "Upholding the highest standards of professional ethics and transparency in all our engagements." 
    },
    { 
      name: "Excellence", 
      icon: <Star size={24} />, 
      desc: "Commitment to delivering superior quality training and consultancy that yields measurable results." 
    },
    { 
      name: "Collaboration", 
      icon: <Handshake size={24} />, 
      desc: "Building strong, strategic partnerships to foster a robust and interconnected talent ecosystem." 
    },
    { 
      name: "Empowerment", 
      icon: <TrendingUp size={24} />, 
      desc: "Equipping professionals with the autonomy and skills needed to lead and succeed in their fields." 
    }
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Thinklab</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary hub dedicated to training, consultancy, and competency development in Malaysia and beyond.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-32">
        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch items-start">
          <div className="space-y-12 flex flex-col justify-center">
            {/* Mission */}
            <div className="flex gap-6 group">
              <div className="shrink-0 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-110">
                <Target size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To become a leading regional hub for multidisciplinary training, consultancy, and competence development.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-6 group">
              <div className="shrink-0 w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/20 transition-transform group-hover:scale-110">
                <Eye size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
                <ul className="space-y-4">
                  {[
                    "Deliver high-quality, industry-aligned programs",
                    "Equip professionals with future-ready skills",
                    "Strengthen Malaysia talent ecosystem",
                    "Foster global partnerships"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 text-lg">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[2.5rem] -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
              alt="Thinklab Corporate Environment" 
              className="relative rounded-3xl shadow-2xl w-full h-64 lg:h-full object-cover" 
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-600">10+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
                  Years of Industry<br/>Excellence
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-slate-900 text-white rounded-[3rem] py-12 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="text-center mb-16 px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Core Values</h2>
            <p className="text-slate-400 mb-6">Our core values define every consulting engagement and training session.</p>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative z-10 px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.name}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
