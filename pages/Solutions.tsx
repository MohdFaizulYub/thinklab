
import React, { useState } from 'react';
import { Briefcase, ShieldCheck, Users, Users2, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectShowcasePopup = () => {
  const projects = [
    { title: "Property Development", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { title: "Solar Systems", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800" },
    { title: "Waste-to-Energy", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" },
    { title: "Sports Complex", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800" },
    { title: "Prefabricated Tiny Home", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none hidden lg:flex">
      {/* Subtle Backdrop */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-500"></div>
      
      {/* Centered Sharp Panel */}
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-300 overflow-hidden rounded-none pointer-events-auto">
        <div className="flex items-center justify-between p-8 bg-white border-b border-slate-100">
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-[0.4em]">Strategic Portfolio Management</h4>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-1 bg-slate-200 p-1">
          {projects.map((p, idx) => (
            <div 
              key={idx} 
              className={`relative group/proj overflow-hidden bg-slate-100 rounded-none ${idx === 4 ? 'col-span-2 h-72' : 'h-52'}`}
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover/proj:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/10 to-transparent opacity-90 group-hover/proj:opacity-80 transition-opacity flex items-end p-10">
                <div>
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">Managed Asset</span>
                  <span className="text-white text-xl font-bold uppercase tracking-[0.2em]">{p.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Solutions: React.FC = () => {
  const [showProjectShowcase, setShowProjectShowcase] = useState(false);

  const solutions = [
    {
      icon: <Users2 className="w-8 h-8 text-blue-600" />,
      title: "Customized Corporate Training",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      features: [
        "Executive Development Programs",
        "Leadership & Managerial Excellence",
        "Soft Skills & Self-Management"
      ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "HSE Competency",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
      features: [
        "Safety Leadership Frameworks",
        "Risk Assessment Mastery",
        "Environmental Compliance Auditing"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Event Management",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      features: [
        "Corporate Events",
        "Conferences & Exhibitions",
        "Team Building Programs",
        "Sports & Carnivals"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Consulting Services",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
      features: [
        "PR & Branding",
        "ESG Consulting",
        "Project Management"
      ]
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section with Background Image */}
      <div className="relative bg-slate-950 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Skyscrapers" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Strategic Corporate Solutions</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Thinklab provides executive-level consultancy and training to help organizations navigate industrial shifts, safety requirements, and competency evolution with precision.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {solutions.map((s, i) => (
            <div key={i} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 overflow-visible flex flex-col relative">
              {/* Card Image Wrapper */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur shadow-lg rounded-2xl text-blue-600">
                  {s.icon}
                </div>
              </div>

              <div className="p-10 pt-4 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{s.title}</h3>
                <ul className="space-y-4 mb-6">
                  {s.features.map((f, j) => {
                    const isProjectManagement = f === "Project Management" && s.title === "Consulting Services";
                    return (
                      <li 
                        key={j} 
                        className={`flex items-center text-slate-600 relative ${isProjectManagement ? 'cursor-help' : ''}`}
                        onMouseEnter={() => isProjectManagement && setShowProjectShowcase(true)}
                        onMouseLeave={() => isProjectManagement && setShowProjectShowcase(false)}
                      >
                        <Zap size={16} className={`mr-3 shrink-0 ${isProjectManagement ? 'text-blue-600 animate-pulse' : 'text-blue-500'}`} /> 
                        <span className={`text-sm font-medium ${isProjectManagement ? 'text-blue-700 border-b border-dashed border-blue-200 pb-0.5' : ''}`}>
                          {f}
                        </span>
                        {isProjectManagement && (
                          <ExternalLink size={12} className="ml-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                        {isProjectManagement && showProjectShowcase && <ProjectShowcasePopup />}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic CTA */}
        <div className="mt-24 p-12 bg-blue-600 rounded-[2.5rem] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-600/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-110 duration-700"></div>
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4">Request Your Strategic Roadmap</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Unlock a comprehensive blueprint for organizational excellence. Our multidisciplinary team integrates training, HSE, and ESG consulting to build a future-proof workforce strategy for your enterprise.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold hover:bg-blue-50 transition-all whitespace-nowrap shadow-xl relative z-10 flex items-center gap-2 group/btn"
          >
            Connect with an Expert <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
