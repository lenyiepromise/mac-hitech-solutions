import { Link } from 'react-router-dom';
import { Building2, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <>
      <PageHeader 
        title="About Us"
        label="Who We Are"
        bgImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' }
        ]}
      />

      <ScrollReveal animation="slide-up">
        {/* ==================== COMPANY INTRO ==================== */}
        <section className="section-padding bg-white relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-[450px_1fr] gap-16 items-center">
              
              <div className="relative rounded-2xl overflow-hidden shadow-card hover:-translate-y-1 transition-transform duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1200&q=80" 
                  alt="African female IT professional in a modern office representing Mac Hi-Tech's leadership and foundation" 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-brand-red/90 backdrop-blur-md p-6 rounded-2xl shadow-glow-red border border-white/20">
                  <Building2 size={32} className="text-white/80 mb-3" />
                  <h3 className="text-white text-xl font-bold m-0 font-heading">Our Foundation</h3>
                  <p className="text-white/90 text-sm mt-2 m-0 leading-relaxed font-sans max-w-[200px]">
                    Delivering proven technology solutions since day one.
                  </p>
                </div>
              </div>
              
              <div>
                <span className="section-label">Our Story</span>
                <h2 className="mb-6">A Trusted Technology Solutions Provider</h2>
                <div className="text-brand-body text-lg space-y-5">
                  <p>
                    Mac Hi-Tech Solutions Limited is a trusted technology solutions provider committed to delivering innovative, reliable, and cost-effective IT services to businesses of all sizes. Since our founding, we have been at the forefront of digital transformation in Nigeria.
                  </p>
                  <p>
                    We combine deep technical expertise with a thorough understanding of the Nigerian and African business environment. Our multidisciplinary team of engineers, developers, and consultants work collaboratively to design solutions that are not just technologically sound, but commercially viable and strategically aligned.
                  </p>
                  <p>
                    Whether you are a growing SME looking to build your IT backbone, or an enterprise seeking to modernize your systems, Mac Hi-Tech is the partner you can rely on.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ==================== VISION, MISSION, VALUES ==================== */}
      <section className="section-padding bg-brand-blue relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/20 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-red/10 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">Our Foundation</span>
            <h2 className="text-white">Vision, Mission & Core Values</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-6 border border-brand-blue/10">
                <span className="text-2xl font-black font-heading tracking-widest">01</span>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-muted mb-3">Our Vision</h3>
              <h2 className="text-brand-blue text-2xl mb-4 leading-tight">Leading IT Provider Across Africa</h2>
              <p className="text-brand-body text-[15px] leading-relaxed m-0 text-balance">
                To become the leading provider of innovative and affordable IT solutions across Africa, empowering businesses to thrive in a connected and digital-first world.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 border border-brand-red/20">
                <span className="text-2xl font-black font-heading tracking-widest">02</span>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-muted mb-3">Our Mission</h3>
              <h2 className="text-brand-blue text-2xl mb-4 leading-tight">Empowering Through Smart Technology</h2>
              <p className="text-brand-body text-[15px] leading-relaxed m-0 text-balance">
                To empower organizations with smart, reliable, and scalable technology solutions — enabling them to achieve operational excellence, competitive advantage, and sustainable growth.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover border border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-grey text-brand-dark flex items-center justify-center mb-6 border border-gray-200">
                <span className="text-2xl font-black font-heading tracking-widest">03</span>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-muted mb-3">Our Core Values</h3>
              <h2 className="text-brand-blue text-2xl mb-5 leading-tight text-center">What Drives Us</h2>
              <ul className="flex flex-col gap-3 w-full">
                {['Excellence in delivery', 'Continuous Innovation', 'Integrity in all dealings', 'Customer Focus always', 'Reliability you can count on'].map((val, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] font-medium text-brand-body bg-brand-grey px-4 py-2.5 rounded-xl border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" /> {val}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== APPROACH ==================== */}
      <section className="section-padding bg-brand-grey border-y border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="section-label">How We Work</span>
            <h2>Our 5-Step Approach to <br className="hidden sm:block"/>Technology Excellence</h2>
            <p className="max-w-2xl mx-auto mt-4 text-brand-muted text-lg font-sans">
              Every project we undertake follows a proven methodology that ensures quality, on-time delivery, and measurable results.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-grey via-brand-red/30 to-brand-grey z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { n: "1", t: "Assessment", d: "We evaluate your existing environment, challenges, and goals." },
                { n: "2", t: "Design", d: "Our architects craft a tailored solution blueprint and strategy." },
                { n: "3", t: "Implementation", d: "Skilled engineers deploy the solution with minimal disruption." },
                { n: "4", t: "Testing", d: "Rigorous quality assurance validates that every component works." },
                { n: "5", t: "Support", d: "Ongoing maintenance ensures long-term performance and stability." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className={`w-[88px] h-[88px] rounded-2xl flex items-center justify-center text-3xl font-black font-heading mb-6 shadow-sm transition-transform duration-300 group-hover:-translate-y-2 border border-gray-200 ${i % 2 === 0 ? 'bg-white text-brand-blue' : 'bg-brand-red text-white border-brand-red/50 shadow-glow-red'}`}>
                    {step.n}
                  </div>
                  <h4 className="text-lg mb-2 font-heading">{step.t}</h4>
                  <p className="text-[14px] text-brand-body leading-relaxed m-0 text-balance px-2">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="bg-brand-blue relative overflow-hidden py-24 text-center">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/20 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/30 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">Work With Us</span>
          <h2 className="text-white mb-6 text-4xl md:text-5xl">Ready to Transform Your Business<br/>with the Right Technology?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-sans">
            Let our team of experts design a solution that fits your unique needs and budget.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10">
            <MessageSquare size={20} /> Contact Us Today
          </Link>
        </div>
      </section>

    </>
  );
};

export default About;
