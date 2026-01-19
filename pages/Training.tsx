import React, { useState } from 'react';
import { Clock, Layers, Laptop, Shield, UserCheck, Microscope, Zap } from 'lucide-react';

const Training: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const trainingGroundItems = [
    {
      title: "Industry-Specific Training",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      description: "Bespoke curricula meticulously aligned with current industrial standards, technical requirements, and emerging sector-specific shifts."
    },
    {
      title: "Immersive Learning",
      image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800",
      description: "Interactive, engagement-focused environments that simulate real-world corporate and industrial scenarios for superior knowledge retention."
    },
    {
      title: "Hands-On Practice",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
      description: "Practical, lab-based sessions focusing on immediate skill acquisition through direct application and expert-guided demonstrations."
    }
  ];

  const categories = ['All', 'Technology', 'Safety & Health', 'Management', 'Operational'];
  
  const programs = [
    { 
      title: "Digital Leadership for Executives", 
      cat: "Technology", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description: "A strategic overview of emerging technologies and digital workflows for decision-makers and C-suite leadership."
    },
    { 
      title: "Occupational Safety & Health (OSH) Basics", 
      cat: "Safety & Health", 
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      description: "Foundational safety principles ensuring compliance with regional OSH regulations and workforce protection."
    },
    { 
      title: "HSE Audit & Compliance Specialist", 
      cat: "Safety & Health", 
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
      description: "Advanced methodology for conducting internal and external HSE audits within high-stakes industrial environments."
    },
    { 
      title: "Advanced ERP Implementation", 
      cat: "Operational", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "End-to-end technical training for modernizing enterprise resource planning and digital operational workflows."
    },
    { 
      title: "HAZMAT Handling & Safety", 
      cat: "Safety & Health", 
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800",
      description: "Specialized containment and protocol training for hazardous materials as per international chemical safety standards."
    },
    { 
      title: "Crisis Management in Public Relations", 
      cat: "Management", 
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      description: "Strategic communication frameworks for navigating corporate reputational risks and high-pressure media scenarios."
    },
    { 
      title: "Emergency Response Leadership", 
      cat: "Operational", 
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      description: "Command and control training for first responders and site managers during industrial emergencies and critical failures."
    },
    { 
      title: "Data-Driven Supply Chain Logistics", 
      cat: "Technology", 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      description: "Integrating predictive analytics and high-performance computing to optimize global supply chains and distribution networks."
    },
  ];

  const filtered = activeTab === 'All' ? programs : programs.filter(p => p.cat === activeTab);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Training & Programs</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            World-class instruction powered by industry veterans and specialized development frameworks.
          </p>
        </div>
      </div>

      {/* Training Ground Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Ground</h2>
          <p className="text-slate-600">Our physical and virtual environments are engineered for professional transformation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingGroundItems.map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Catalog */}
      <section className="mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Course Catalog</h2>
            <p className="text-slate-600 mb-10">Select a category to explore our professional development pathways.</p>
            
            {/* Centered, Non-Scrolling Tabs */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100/50 border border-slate-200 rounded-2xl max-w-fit mx-auto">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveTab(c)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === c 
                      ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">
                      {p.cat}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <p className="text-slate-500 font-medium">No programs found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Tailored Training CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a custom training framework?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10">
              We design specialized internal training systems for enterprise clients, including proprietary curriculum development and internal LMS integration.
            </p>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
              Consult with an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;