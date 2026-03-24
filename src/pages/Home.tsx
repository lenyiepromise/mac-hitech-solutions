import { Link } from 'react-router-dom';
import { 
  ArrowRight, Server, Code, Wifi, 
  Camera, Box, Presentation, Palette,
  Award, Layers, Headset, ShieldCheck, TrendingUp, CircleDollarSign, MessageSquare
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <>
      <ScrollReveal animation="fade-in">
        <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-blue">
          {/* ... Hero Content ... */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-blue/90" />
          
          {/* Glowing Red Mesh Gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/40 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-red/30 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
          
          <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
            <div className="max-w-[700px]">
              <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 rounded-full px-4 py-1.5 text-[13px] font-bold text-[#ff9a9a] uppercase tracking-wider mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                Nigeria's Trusted IT Partner
              </div>
              
              <h1 className="text-white mb-5">
                Delivering Technology That Makes Businesses <span className="text-[#ff9a9a]">Stand Out</span>
              </h1>
              
              <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-[600px]">
                Smart Solutions. Reliable Systems. Real Results. — Mac Hi-Tech empowers organizations across Africa with cutting-edge technology that drives growth and efficiency.
              </p>
              
              <div className="flex flex-wrap gap-3.5 mb-16">
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                  <ArrowRight size={20} /> Get Started
                </Link>
                <Link to="/contact#consultation" className="btn-secondary text-lg px-10 py-4 rounded-full">
                  Request a Consultation
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-10 pt-10 border-t border-white/10">
                <div>
                  <strong className="block text-4xl font-black text-white leading-none font-heading">200+</strong>
                  <span className="text-sm text-white/60 mt-2 block font-medium">Projects Delivered</span>
                </div>
                <div className="hidden sm:block w-px bg-white/10"></div>
                <div>
                  <strong className="block text-4xl font-black text-white leading-none font-heading">7+</strong>
                  <span className="text-sm text-white/60 mt-2 block font-medium">Core Services</span>
                </div>
                <div className="hidden sm:block w-px bg-white/10"></div>
                <div>
                  <strong className="block text-4xl font-black text-white leading-none font-heading">10+</strong>
                  <span className="text-sm text-white/60 mt-2 block font-medium">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <section className="section-padding bg-white relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-[450px_1fr] gap-16 items-center">
              
              {/* Team Photo with Glassmorphism Overlap */}
              <div className="relative rounded-2xl overflow-hidden shadow-card hover:-translate-y-1 transition-transform duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop" 
                  alt="Mac Hi-Tech team of dedicated IT professionals collaborating in a modern office" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-brand-blue/80 backdrop-blur-md p-6 rounded-2xl shadow-glow-blue border border-white/20">
                  <h3 className="text-white text-xl font-bold m-0 font-heading">Who We Are</h3>
                  <p className="text-white/80 text-sm mt-2 m-0 leading-relaxed font-sans max-w-[200px]">
                    A team of dedicated IT experts transforming businesses through technology.
                  </p>
                </div>
              </div>
              
              <div>
                <span className="section-label">About Mac Hi-Tech</span>
                <h2 className="mb-6">Mac Hi-Tech Solutions Limited</h2>
                <p className="text-brand-body text-lg mb-6">
                  Mac Hi-Tech Solutions Limited is a professional team of IT experts dedicated to providing comprehensive technology solutions that empower businesses to achieve their goals. We bridge the gap between technology and business success.
                </p>
                <p className="text-brand-body text-lg mb-8">
                  From IT infrastructure and software development to smart surveillance and creative multimedia, we offer a full spectrum of services designed to keep your business ahead in a rapidly evolving digital world.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="inline-flex items-center gap-2 bg-brand-grey border border-gray-100 shadow-sm rounded-full px-5 py-2.5 text-sm font-bold text-brand-blue">
                    <span className="text-brand-red text-lg leading-none">✓</span> Experienced Professionals
                  </span>
                  <span className="inline-flex items-center gap-2 bg-brand-grey border border-gray-100 shadow-sm rounded-full px-5 py-2.5 text-sm font-bold text-brand-blue">
                    <span className="text-brand-red text-lg leading-none">✓</span> End-to-End Solutions
                  </span>
                  <span className="inline-flex items-center gap-2 bg-brand-grey border border-gray-100 shadow-sm rounded-full px-5 py-2.5 text-sm font-bold text-brand-blue">
                    <span className="text-brand-red text-lg leading-none">✓</span> 24/7 Support
                  </span>
                  <span className="inline-flex items-center gap-2 bg-brand-grey border border-gray-100 shadow-sm rounded-full px-5 py-2.5 text-sm font-bold text-brand-blue">
                    <span className="text-brand-red text-lg leading-none">✓</span> Pan-African Reach
                  </span>
                </div>
                
                <Link to="/about" className="btn-dark">
                  Learn More About Us <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        <section className="section-padding bg-brand-grey relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            {/* ... Services Content ... */}
            <div className="text-center mb-14">
              <span className="section-label">What We Do</span>
              <h2>Comprehensive Technology <br className="hidden sm:block"/>Services, Built for Business</h2>
            </div>
            
            <div className="grid lg:grid-cols-[400px_1fr] gap-6 items-stretch">
              
              {/* Left Main (Glassmorphism dark box) */}
              <div className="bg-brand-blue/95 backdrop-blur-xl rounded-2xl p-10 flex flex-col shadow-dropdown border border-brand-blue">
                <h3 className="text-white mb-2 text-3xl font-black font-heading tracking-tight">Our Services</h3>
                <p className="text-white/60 text-[15px] font-medium mb-6">Seven pillars of technology excellence</p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <Link to="/services#it" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-white text-sm font-bold hover:bg-brand-red hover:border-brand-red transition-all duration-300 group">
                    <Server size={18} className="text-[#ff9a9a] group-hover:text-white transition-colors" /> IT Services
                  </Link>
                  <Link to="/services#software" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-white text-sm font-bold hover:bg-brand-red hover:border-brand-red transition-all duration-300 group">
                    <Code size={18} className="text-[#ff9a9a] group-hover:text-white transition-colors" /> Software Solutions
                  </Link>
                  <Link to="/services#networking" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-white text-sm font-bold hover:bg-brand-red hover:border-brand-red transition-all duration-300 group">
                    <Wifi size={18} className="text-[#ff9a9a] group-hover:text-white transition-colors" /> Networking & Internet
                  </Link>
                  <Link to="/services#surveillance" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-white text-sm font-bold hover:bg-brand-red hover:border-brand-red transition-all duration-300 group">
                    <Camera size={18} className="text-[#ff9a9a] group-hover:text-white transition-colors" /> Smart Surveillance
                  </Link>
                  <Link to="/services#procurement" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-white text-sm font-bold hover:bg-brand-red hover:border-brand-red transition-all duration-300 group">
                    <Box size={18} className="text-[#ff9a9a] group-hover:text-white transition-colors" /> Tech Procurement
                  </Link>
                  <Link to="/services#consultancy" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-white text-sm font-bold hover:bg-brand-red hover:border-brand-red transition-all duration-300 group">
                    <Presentation size={18} className="text-[#ff9a9a] group-hover:text-white transition-colors" /> ICT Consultancy
                  </Link>
                  <Link to="/services#multimedia" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-white text-sm font-bold hover:bg-brand-red hover:border-brand-red transition-all duration-300 group">
                    <Palette size={18} className="text-[#ff9a9a] group-hover:text-white transition-colors" /> Multimedia
                  </Link>
                </div>
              </div>
              
              {/* Right Images */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-6">
                {/* Box 1 - IT Infrastructure (Duotone) */}
                <div className="relative rounded-2xl overflow-hidden min-h-[260px] group shadow-card border border-gray-200 transition-all duration-300 hover:border-brand-red hover:-translate-y-1.5">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/95 via-brand-blue/40 to-transparent z-10" />
                  <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                    <span className="inline-block bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider mb-3 px-2 py-1 rounded">Infrastructure & IT</span>
                    <div className="text-white text-2xl font-bold font-heading">Enterprise IT Solutions</div>
                  </div>
                </div>

                {/* Box 2 - Creative Multimedia (Vibrant, Not Duotone) */}
                <div className="relative rounded-2xl overflow-hidden min-h-[260px] group shadow-card border border-gray-200 transition-all duration-300 hover:border-brand-red hover:-translate-y-1.5">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021779]/95 via-[#021779]/40 to-transparent z-10" />
                  <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                    <span className="inline-block bg-[#021779] border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-3 px-2 py-1 rounded">Creative & Branding</span>
                    <div className="text-white text-2xl font-bold font-heading">Multimedia & Prints</div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services" className="btn-dark">
                Explore All Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="slide-up">
        {/* ==================== WHY CHOOSE US ==================== */}
        <section className="section-padding bg-white relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="section-label">Why Mac Hi-Tech</span>
              <h2>The Reasons Businesses <br className="hidden sm:block"/>Trust Us with Their Technology</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 hover:border-brand-red hover:shadow-glow-blue group">
                <div className="w-12 h-12 bg-brand-grey border border-gray-100 rounded-xl flex items-center justify-center text-brand-red mb-6 transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <Award size={24} />
                </div>
                <h4 className="mb-3 text-xl font-heading">Experienced Professionals</h4>
                <p className="text-brand-muted text-[15px] m-0 leading-relaxed text-balance">
                  Our team brings deep expertise across all IT disciplines, ensuring solutions are designed with precision.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 hover:border-brand-red hover:shadow-glow-blue group">
                <div className="w-12 h-12 bg-brand-grey border border-gray-100 rounded-xl flex items-center justify-center text-brand-red mb-6 transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <Layers size={24} />
                </div>
                <h4 className="mb-3 text-xl font-heading">Comprehensive Solutions</h4>
                <p className="text-brand-muted text-[15px] m-0 leading-relaxed text-balance">
                  From infrastructure to branding, we cover the full technology spectrum as one trusted provider.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 hover:border-brand-red hover:shadow-glow-blue group">
                <div className="w-12 h-12 bg-brand-grey border border-gray-100 rounded-xl flex items-center justify-center text-brand-red mb-6 transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <Headset size={24} />
                </div>
                <h4 className="mb-3 text-xl font-heading">Dedicated Support</h4>
                <p className="text-brand-muted text-[15px] m-0 leading-relaxed text-balance">
                  Our ongoing support model ensures your systems remain reliable, updated, and performing optimally.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 hover:border-brand-red hover:shadow-glow-blue group">
                <div className="w-12 h-12 bg-brand-grey border border-gray-100 rounded-xl flex items-center justify-center text-brand-red mb-6 transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="mb-3 text-xl font-heading">Security-First Approach</h4>
                <p className="text-brand-muted text-[15px] m-0 leading-relaxed text-balance">
                  Every solution we build incorporates robust security practices, protecting your assets from threats.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 hover:border-brand-red hover:shadow-glow-blue group">
                <div className="w-12 h-12 bg-brand-grey border border-gray-100 rounded-xl flex items-center justify-center text-brand-red mb-6 transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <TrendingUp size={24} />
                </div>
                <h4 className="mb-3 text-xl font-heading">Results-Driven Focus</h4>
                <p className="text-brand-muted text-[15px] m-0 leading-relaxed text-balance">
                  Every project is aligned to your business goals, delivering measurable ROI and tangible outcomes.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 hover:border-brand-red hover:shadow-glow-blue group">
                <div className="w-12 h-12 bg-brand-grey border border-gray-100 rounded-xl flex items-center justify-center text-brand-red mb-6 transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <CircleDollarSign size={24} />
                </div>
                <h4 className="mb-3 text-xl font-heading">Cost-Effective Value</h4>
                <p className="text-brand-muted text-[15px] m-0 leading-relaxed text-balance">
                  Enterprise-grade solutions optimized for African markets — delivering maximum impact within budget.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal animation="fade-in">
        {/* ==================== CTA BANNER ==================== */}
        <section className="bg-brand-blue relative overflow-hidden py-24 text-center">
          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/30 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/20 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
          
          <div className="max-w-[800px] mx-auto px-6 relative z-10">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">Ready to Get Started?</span>
            <h2 className="text-white mb-6 text-4xl md:text-5xl">Let's Build the Right Technology<br/>for Your Business</h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-sans">
              Partner with Mac Hi-Tech Solutions and experience the difference that real expertise makes.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10">
              <MessageSquare size={20} /> Contact Us Today
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default Home;
