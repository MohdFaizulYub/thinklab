import React, { useState } from 'react';
import { Camera, Users, Building2, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Highlights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Training', 'Facilities', 'Events'];

  const galleryItems = [
    { 
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200", 
      title: "Main Lecture Hall", 
      category: "Facilities",
      description: "State-of-the-art smart classroom with hybrid learning capabilities."
    },
    { 
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200", 
      title: "Global Leadership Summit", 
      category: "Events",
      description: "Annual gathering of industry experts and corporate partners."
    },
    { 
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200", 
      title: "Technical Engineering Lab", 
      category: "Training",
      description: "Hands-on technical safety training for industrial specialists."
    },
    { 
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200", 
      title: "Executive Boardroom", 
      category: "Facilities",
      description: "High-stakes decision environment for corporate consultancy."
    },
    { 
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200", 
      title: "Team Innovation Cycle", 
      category: "Training",
      description: "Collaborative brainstorming session during the Management program."
    },
    { 
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200", 
      title: "Digital Transformation Hub", 
      category: "Facilities",
      description: "Our dedicated space for emerging technology exploration."
    },
    { 
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200", 
      title: "Networking Gala", 
      category: "Events",
      description: "Post-certification networking event for alumni and partners."
    },
    { 
      url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200", 
      title: "HSE Practical Assessment", 
      category: "Training",
      description: "Live safety drills and emergency response simulations."
    },
    { 
      url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=1200", 
      title: "Breakout Lounge", 
      category: "Facilities",
      description: "Relaxed environment designed for informal knowledge sharing."
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Gallery & Highlights</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            A visual documentation of ThinkLab's commitment to excellence, showcasing our environments, our people, and the impact of our programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeFilter === cat 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm break-inside-avoid"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                   {item.category === 'Training' && <Zap size={14} />}
                   {item.category === 'Facilities' && <Building2 size={14} />}
                   {item.category === 'Events' && <Users size={14} />}
                   {item.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-300">
             <Camera className="mx-auto w-12 h-12 text-slate-300 mb-4" />
             <p className="text-slate-500 font-medium">No highlights available for this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}; export default Highlights;