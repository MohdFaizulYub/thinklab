
import React, { useState } from 'react';
import { Briefcase, ShieldCheck, Users, Users2, Zap, ArrowRight, ExternalLink, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectShowcasePopup = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Import local images dynamically
  const localImagesGlob = import.meta.glob('../assets/Images/popup-images/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' }) as Record<string, string>;

  // Create a helper to get local images
  const getLocalImages = (title: string, count: number = 1): string[] => {
    const images: string[] = [];
    const normalizedTitle = title.toLowerCase().replace(/\s+/g, ' '); // simple normalization

    // Convert glob object to array of values
    const allImages = Object.entries(localImagesGlob).map(([path, url]) => {
      const filename = path.split('/').pop()?.toLowerCase() || '';
      return { filename, url };
    });

    if (count > 1) {
      // Loop to find numbered images, e.g., "prefabricated tiny home 1.jpeg"
      for (let i = 1; i <= count; i++) {
        const match = allImages.find(img => img.filename.includes(`${normalizedTitle} ${i}`));
        if (match) images.push(match.url);
      }
    } else {
      // Find exact or close match
      const match = allImages.find(img => img.filename.includes(normalizedTitle));
      if (match) images.push(match.url);
    }

    return images;
  };

  const tinyHomeLocal = getLocalImages("Prefabricated Tiny Home", 5);

  const projects = [
    { title: "Property Development", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" },
    { title: "Solar Systems", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" },
    { title: "Waste-to-Energy", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200" },
    { title: "Sports Complex", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200" },
    {
      title: "Prefabricated Tiny Home",
      imgs: tinyHomeLocal.length > 0 ? tinyHomeLocal : [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1525113990974-3f4e24eaa397?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1449156003053-c306a0d01f57?auto=format&fit=crop&q=80&w=1000"
      ]
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none hidden lg:flex">
      {/* Subtle Backdrop */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-500"></div>

      {/* Centered Sharp Panel */}
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-300 overflow-hidden rounded-none pointer-events-auto max-h-[90vh] flex flex-col">

        {/* Gallery Lightbox Overlay */}
        {previewImage && (
          <div className="absolute inset-0 z-[110] bg-slate-950 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur">
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Detail Visualization</span>
              <button
                onClick={() => setPreviewImage(null)}
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close Preview</span>
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow flex items-center justify-center p-8 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#020617_100%)]">
              <img
                src={previewImage}
                className="max-h-full max-w-full object-contain shadow-2xl animate-in zoom-in-90 duration-500"
                alt="Project Preview"
              />
            </div>
            <div className="p-4 bg-slate-900/80 border-t border-slate-800 text-center">
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em]">Thinklab Consultancy Portfolio &copy; Technical Showcase</p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between p-8 bg-white border-b border-slate-100 shrink-0">
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-[0.4em]">Strategic Portfolio Management</h4>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-widest">Click images to expand gallery</span>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto bg-slate-200 p-1">
          <div className="grid grid-cols-2 gap-1">
            {projects.map((p, idx) => (
              <div
                key={idx}
                className={`relative group/proj overflow-hidden bg-slate-100 rounded-none cursor-pointer ${idx === 4 ? 'col-span-2 h-[800px]' : 'h-52'}`}
              >
                {idx === 4 && p.imgs ? (
                  /* Vertical Stack for Tiny Home Project */
                  <div className="flex flex-col h-full w-full">
                    {p.imgs.map((url, i) => (
                      <div
                        key={i}
                        className="relative flex-1 overflow-hidden border-b border-slate-900/5 last:border-none group/subitem"
                        onClick={(e) => { e.stopPropagation(); setPreviewImage(url); }}
                      >
                        <img
                          src={url}
                          alt={`${p.title} view ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover/subitem:scale-110"
                        />
                        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover/subitem:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="text-white w-6 h-6" />
                        </div>
                        {i === 0 && (
                          <div className="absolute top-8 left-8 z-10">
                            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">Premium Gallery</span>
                            <span className="text-white text-2xl font-bold uppercase tracking-[0.2em] drop-shadow-lg">{p.title}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-full" onClick={() => p.img && setPreviewImage(p.img)}>
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover/proj:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/proj:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 p-4 rounded-full shadow-xl translate-y-4 group-hover/proj:translate-y-0 transition-transform">
                        <Maximize2 className="text-blue-600 w-5 h-5" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-90 group-hover/proj:opacity-100 transition-opacity flex items-end p-8 pointer-events-none">
                      <div>
                        <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">Managed Asset</span>
                        <span className="text-white text-xl font-bold uppercase tracking-[0.2em]">{p.title}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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
