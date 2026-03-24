import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Server, Code, Wifi, 
  Camera, Box, Presentation, Palette, Menu, X, ArrowRight
} from 'lucide-react';
import logo from '../assets/mac.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-brand-blue bg-brand-grey font-bold' : 'text-brand-dark hover:text-brand-blue hover:bg-brand-grey';
  };

  const navItemClass = "px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300";

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-card-hover' : 'shadow-card/50'}`}>
        <div className="max-w-[1200px] mx-auto px-6 h-[76px] flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 shrink-0 group" aria-label="Mac Hi-Tech Solutions Home">
            <img src={logo} alt="Mac Hi-Tech Logo" className="w-[68px] h-[68px] object-contain transition-transform group-hover:scale-105" />
            <div className="leading-[1.1]">
              <strong className="block text-brand-blue text-[1.15rem] tracking-tight font-brand-accent mb-0">Mac Hi-Tech</strong>
              <span className="text-[10px] text-brand-muted font-bold font-sans uppercase tracking-[0.2em]">Solutions Limited</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/" className={`${navItemClass} ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`${navItemClass} ${isActive('/about')}`}>About Us</Link>
            
            {/* Dropdown */}
            <div className="relative group">
              <button 
                className={`${navItemClass} flex items-center gap-1 cursor-pointer text-brand-dark hover:text-brand-blue hover:bg-brand-grey ${location.pathname.includes('/services') ? 'text-brand-blue font-bold' : ''}`}
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-dropdown border border-white/50 p-6 w-[540px] grid grid-cols-2 gap-3 relative">
                  
                  <Link to="/services#it" className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-grey/80 text-brand-dark hover:text-brand-blue transition-all group/item border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all shadow-sm">
                      <Server size={18} />
                    </div>
                    <span className="text-[15px] font-bold">IT Services</span>
                  </Link>
                  <Link to="/services#software" className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-grey/80 text-brand-dark hover:text-brand-blue transition-all group/item border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all shadow-sm">
                      <Code size={18} />
                    </div>
                    <span className="text-[15px] font-bold">Software Solutions</span>
                  </Link>
                  <Link to="/services#networking" className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-grey/80 text-brand-dark hover:text-brand-blue transition-all group/item border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all shadow-sm">
                      <Wifi size={18} />
                    </div>
                    <span className="text-[15px] font-bold">Networking & Internet</span>
                  </Link>
                  <Link to="/services#surveillance" className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-grey/80 text-brand-dark hover:text-brand-blue transition-all group/item border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all shadow-sm">
                      <Camera size={18} />
                    </div>
                    <span className="text-[15px] font-bold">Smart Surveillance</span>
                  </Link>
                  <Link to="/services#procurement" className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-grey/80 text-brand-dark hover:text-brand-blue transition-all group/item border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all shadow-sm">
                      <Box size={18} />
                    </div>
                    <span className="text-[15px] font-bold">Tech Procurement</span>
                  </Link>
                  <Link to="/services#consultancy" className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-grey/80 text-brand-dark hover:text-brand-blue transition-all group/item border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all shadow-sm">
                      <Presentation size={18} />
                    </div>
                    <span className="text-[15px] font-bold">ICT Training</span>
                  </Link>
                  <Link to="/services#multimedia" className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-grey/80 text-brand-dark hover:text-brand-blue transition-all group/item border border-transparent hover:border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-red group-hover/item:text-white transition-all shadow-sm">
                      <Palette size={18} />
                    </div>
                    <span className="text-[15px] font-bold">Multimedia & Prints</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/case-studies" className={`${navItemClass} ${isActive('/case-studies')}`}>Case Studies</Link>
            <Link to="/contact" className={`${navItemClass} ${isActive('/contact')}`}>Contact Us</Link>
          </nav>

          <div className="hidden md:block shrink-0">
            <Link to="/contact" className="btn-dark py-2.5 px-6 text-sm">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>

          <button 
            className="md:hidden text-brand-blue p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)} aria-label="Mac Hi-Tech Solutions Home">
            <img src={logo} alt="Mac Hi-Tech Logo" className="w-14 h-14 object-contain transition-transform group-hover:scale-105" />
            <div className="leading-[1.1]">
              <strong className="block text-brand-blue text-[1.1rem] font-brand-accent tracking-tight mb-0">Mac Hi-Tech</strong>
              <span className="text-[9px] text-brand-muted font-bold font-sans uppercase tracking-[0.2em] block">Solutions Limited</span>
            </div>
          </Link>
          <button 
            className="w-10 h-10 bg-brand-grey rounded-full flex items-center justify-center text-brand-blue"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Mobile Menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
          <Link to="/" className="p-4 rounded-xl font-bold border-b border-gray-50 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="p-4 rounded-xl font-bold border-b border-gray-50 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          
          <div className="p-4">
            <div className="font-bold text-brand-blue mb-3">Our Services</div>
            <div className="pl-4 flex flex-col gap-3 border-l-2 border-brand-grey">
              <Link to="/services#it" className="text-sm font-medium text-brand-muted hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>IT Services</Link>
              <Link to="/services#software" className="text-sm font-medium text-brand-muted hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Software Solutions</Link>
              <Link to="/services#networking" className="text-sm font-medium text-brand-muted hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Networking & Internet</Link>
              <Link to="/services#surveillance" className="text-sm font-medium text-brand-muted hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Smart Surveillance</Link>
              <Link to="/services#procurement" className="text-sm font-medium text-brand-muted hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Tech Procurement</Link>
              <Link to="/services#consultancy" className="text-sm font-medium text-brand-muted hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>ICT Training</Link>
              <Link to="/services#multimedia" className="text-sm font-medium text-brand-muted hover:text-brand-blue" onClick={() => setMobileMenuOpen(false)}>Multimedia & Prints</Link>
            </div>
          </div>
          
          <Link to="/case-studies" className="p-4 rounded-xl font-bold border-b border-gray-50 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
          <Link to="/contact" className="p-4 rounded-xl font-bold flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
        
        <div className="p-6 border-t border-gray-100">
          <Link to="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;