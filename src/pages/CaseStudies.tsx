import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const CaseStudies = () => {
  const caseStudiesData = [
    {
      id: 1,
      category: 'Corporate IT',
      label: 'Infrastructure',
      title: 'Enterprise Network Modernization',
      desc: 'We completely overhauled the networking infrastructure for a mid-sized financial firm, deploying robust firewalls and high-speed LAN, resulting in zero downtime over 12 months.',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      challenge: 'Outdated network infrastructure causing frequent downtime and security vulnerabilities.',
      solution: 'Implemented a new network architecture with advanced firewalls, managed switches, and redundant internet connections.'
    },
    {
      id: 2,
      category: 'Smart Security',
      label: 'Security',
      title: 'Multi-Site Smart Surveillance Setup',
      desc: 'A nationwide logistics company needed centralized security. We installed 150+ HD IP cameras across 5 locations with remote cloud monitoring and biometric access control.',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      challenge: 'Lack of unified security monitoring across multiple geographically dispersed warehouses.',
      solution: 'Deployed a comprehensive IP surveillance system with centralized cloud management and biometric access for enhanced control.'
    },
    {
      id: 3,
      category: 'Creative',
      label: 'Branding',
      title: 'Corporate Identity & Branding Fleet',
      desc: 'We executed a total brand refresh for a leading real estate developer, delivering creative multimedia assets, vehicle branding, and premium marketing brochures that accelerated their sales.',
      img: 'https://images.unsplash.com/photo-1573497491765-d317ac42822d?w=800&q=80',
      challenge: 'Outdated brand image and inconsistent marketing materials hindering market penetration.',
      solution: 'Developed a new corporate identity, designed marketing collateral, and managed vehicle branding for a cohesive brand presence.'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Case Studies"
        label="Our Success Stories"
        bgImage="https://images.unsplash.com/photo-1573163289538-23f491c6e494?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Case Studies' }
        ]}
      />

      <section className="section-padding bg-brand-grey relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <ScrollReveal animation="fade-in">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="section-label">Proven Results</span>
              <h2>Delivering Impactful Technology Solutions</h2>
              <p className="text-brand-body text-lg font-sans">
                Explore how Mac Hi-Tech has transformed operations, secured premises, and modernized IT infrastructure for businesses across Nigeria.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study, index) => (
              <ScrollReveal 
                key={study.id} 
                animation="slide-up" 
                delay={index * 150}
              >
                <div className="bg-white h-full rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover border border-gray-100 hover:border-brand-red flex flex-col group">
                  <div className="relative h-60 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                      style={{ backgroundImage: `url('${study.img}')` }} 
                      aria-label={study.title}
                      role="img"
                    />
                    <div className={`absolute top-4 left-4 ${study.category === 'Creative' ? 'bg-[#021779] text-white' : 'bg-white/90 text-brand-dark'} backdrop-blur-sm text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow-sm border border-white/20`}>
                      {study.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="mb-3 text-[22px] font-heading">{study.title}</h3>
                    <p className="text-brand-muted text-[15px] mb-6 leading-relaxed flex-1">
                      {study.desc}
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-brand-blue font-bold text-[15px] group-hover:text-brand-red transition-colors">
                      Inquire About Similar Project <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="slide-up" delay={500}>
            {/* Stats Bar (Glassmorphism) */}
            <div className="mt-20 relative rounded-2xl overflow-hidden bg-brand-blue border border-brand-blue shadow-glow-blue">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/30 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
              
              <div className="relative z-10 bg-white/5 backdrop-blur-md border-[0.5px] border-white/20 rounded-2xl p-10 lg:p-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                  <div className="text-center group">
                    <strong className="block text-4xl lg:text-5xl font-black font-heading text-white mb-2 transition-transform group-hover:scale-110 group-hover:text-[#ff9a9a]">10+</strong>
                    <span className="text-white/70 font-bold uppercase tracking-widest text-xs">Years Active</span>
                  </div>
                  <div className="text-center group border-l-0 md:border-l border-white/10">
                    <strong className="block text-4xl lg:text-5xl font-black font-heading text-white mb-2 transition-transform group-hover:scale-110 group-hover:text-[#ff9a9a]">200+</strong>
                    <span className="text-white/70 font-bold uppercase tracking-widest text-xs">Projects Done</span>
                  </div>
                  <div className="text-center group border-l border-white/10">
                    <strong className="block text-4xl lg:text-5xl font-black font-heading text-white mb-2 transition-transform group-hover:scale-110 group-hover:text-[#ff9a9a]">50+</strong>
                    <span className="text-white/70 font-bold uppercase tracking-widest text-xs">Companies</span>
                  </div>
                  <div className="text-center group border-l border-white/10">
                    <strong className="block text-4xl lg:text-5xl font-black font-heading text-white mb-2 transition-transform group-hover:scale-110 group-hover:text-[#ff9a9a]">100%</strong>
                    <span className="text-white/70 font-bold uppercase tracking-widest text-xs">Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal animation="fade-in">
        {/* ==================== CTA ==================== */}
        <section className="bg-white py-24 text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="mb-6">Have a Project in Mind?</h2>
            <p className="text-brand-body text-xl mb-10 font-sans">
              Let's discuss how Mac Hi-Tech can bring the same level of expertise and success to your business.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10">
              <MessageSquare size={20} /> Request a Quote
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default CaseStudies;
