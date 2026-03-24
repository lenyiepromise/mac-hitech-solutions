import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  label: string;
  bgImage: string;
  breadcrumbs: { label: string; path?: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, label, bgImage, breadcrumbs }) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-blue">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-brand-blue/90" />
      
      {/* Glowing Mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/30 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <span className="inline-block text-sm font-bold tracking-[0.12em] uppercase text-[#ff9a9a] mb-3">
          {label}
        </span>
        <h1 className="text-white mb-4 text-4xl md:text-5xl">{title}</h1>
        
        <div className="flex items-center gap-2 text-sm text-white/60">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white/90">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <ChevronRight size={14} className="text-white/40" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
