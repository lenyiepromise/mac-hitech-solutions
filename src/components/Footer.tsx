import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/mac.svg';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white/75 pt-20 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-1.5 object-cover">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src={logo} 
                alt="Mac Hi-Tech Logo" 
                className="w-14 h-14 object-contain brightness-0 invert transition-transform group-hover:scale-105" 
              />
              <div className="leading-[1.1]">
                <strong className="block text-white text-[1.15rem] tracking-tight font-brand-accent mb-0">Mac Hi-Tech</strong>
                <span className="text-[10px] text-white/50 font-bold font-sans uppercase tracking-[0.2em]">Solutions Limited</span>
              </div>
            </Link>
            <p className="text-white/60 text-lg italic mb-6">"Technology That Works."</p>
            <p className="text-sm text-white/50 mb-8 max-w-sm">
              Empowering Nigerian and African businesses with smart, reliable, and scalable technology solutions.
            </p>
            <div className="flex gap-2.5">
              <a href="#" className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center text-white hover:bg-brand-red-hover hover:-translate-y-1 transition-all"><Facebook size={16} /></a>
              <a href="#" className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center text-white hover:bg-brand-red-hover hover:-translate-y-1 transition-all"><Twitter size={16} /></a>
              <a href="#" className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center text-white hover:bg-brand-red-hover hover:-translate-y-1 transition-all"><Linkedin size={16} /></a>
              <a href="#" className="w-9 h-9 bg-brand-red rounded-lg flex items-center justify-center text-white hover:bg-brand-red-hover hover:-translate-y-1 transition-all"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Services</h5>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services#it" className="text-sm hover:text-white hover:pl-1 transition-all">IT Services</Link></li>
              <li><Link to="/services#software" className="text-sm hover:text-white hover:pl-1 transition-all">Software Solutions</Link></li>
              <li><Link to="/services#networking" className="text-sm hover:text-white hover:pl-1 transition-all">Networking & Internet</Link></li>
              <li><Link to="/services#surveillance" className="text-sm hover:text-white hover:pl-1 transition-all">Smart Surveillance</Link></li>
              <li><Link to="/services#procurement" className="text-sm hover:text-white hover:pl-1 transition-all">Tech Procurement</Link></li>
              <li><Link to="/services#consultancy" className="text-sm hover:text-white hover:pl-1 transition-all">ICT Training</Link></li>
              <li><Link to="/services#multimedia" className="text-sm hover:text-white hover:pl-1 transition-all">Multimedia & Prints</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Company</h5>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-sm hover:text-white hover:pl-1 transition-all">About Us</Link></li>
              <li><Link to="/case-studies" className="text-sm hover:text-white hover:pl-1 transition-all">Case Studies</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white hover:pl-1 transition-all">Contact Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white hover:pl-1 transition-all">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h5 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Get in Touch</h5>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-red/20 text-[#ff6b6b] flex items-center justify-center shrink-0 mt-0.5"><MapPin size={14} /></div>
                <p className="text-sm text-white/65 leading-relaxed m-0">Road 8, Ohia Aruma Alakahia,<br/>Port Harcourt, Rivers State, Nigeria</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-red/20 text-[#ff6b6b] flex items-center justify-center shrink-0 mt-0.5"><Phone size={14} /></div>
                <p className="text-sm text-white/65 leading-relaxed m-0"><a href="tel:+2347056641805" className="hover:text-white">+234 705 664 1805</a></p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-red/20 text-[#ff6b6b] flex items-center justify-center shrink-0 mt-0.5"><Mail size={14} /></div>
                <p className="text-sm text-white/65 leading-relaxed m-0"><a href="mailto:info@machitechsolutions.com" className="hover:text-white">info@machitechsolutions.com</a></p>
              </div>
            </div>
          </div>

        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/40">
          <p className="m-0">&copy; {new Date().getFullYear()} Mac Hi-Tech Solutions Limited. All rights reserved.</p>
          <p className="m-0">Powered by Innovation | Built for Africa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
