import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Server, Code, Wifi, Camera, Box, 
  Presentation, Palette, ArrowRight 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    id: 'it',
    title: 'IT Infrastructure & Support',
    label: 'Core IT',
    icon: Server,
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=80',
    desc: 'Reliable, scalable, and secure IT environments are the backbone of modern business. We design, deploy, and maintain corporate IT infrastructures tailored to your operational needs.',
    bullets: [
      'Server installation and configuration',
      'Cloud migration & hybrid solutions',
      'Data backup and disaster recovery',
      'Ongoing technical support & maintenance'
    ]
  },
  {
    id: 'software',
    title: 'Software Solutions',
    label: 'Development',
    icon: Code,
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&q=80',
    desc: 'Off-the-shelf software rarely fits perfectly. We build custom applications and enterprise software that streamline your specific workflows, automate processes, and increase productivity.',
    bullets: [
      'Custom web & mobile app development',
      'Enterprise Resource Planning (ERP) systems',
      'Process automation & workflow optimization',
      'API integrations & legacy system upgrades'
    ]
  },
  {
    id: 'networking',
    title: 'Networking & Internet',
    label: 'Connectivity',
    icon: Wifi,
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000&q=80',
    desc: 'A slow or unstable network costs time and money. We deliver high-speed, secure, and resilient networking solutions that keep your organization connected without interruption.',
    bullets: [
      'LAN/WAN design and deployment',
      'Secure corporate Wi-Fi setups',
      'Network security and firewall configuration',
      'VPN and remote access solutions'
    ]
  },
  {
    id: 'surveillance',
    title: 'Smart Surveillance Elements',
    label: 'Security',
    icon: Camera,
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1000&q=80',
    desc: 'Protect your assets, employees, and premises with intelligent surveillance systems. We provide modern IP-based security solutions with remote monitoring capabilities.',
    bullets: [
      'HD IP Camera & CCTV installation',
      'Biometric access control systems',
      '24/7 remote monitoring setup',
      'Video analytics and motion detection'
    ]
  },
  {
    id: 'procurement',
    title: 'Tech Equipment Procurement',
    label: 'Hardware',
    icon: Box,
    img: 'https://images.unsplash.com/photo-1615170366628-8d4872172f3c?w=1000&q=80',
    desc: 'Sourcing the right hardware can be complex and expensive. We leverage our industry partnerships to procure high-quality, authentic IT equipment at competitive prices.',
    bullets: [
      'Enterprise servers and storage arrays',
      'Corporate laptops and workstations',
      'Networking hardware (routers, switches)',
      'Office tech (printers, displays, accessories)'
    ]
  },
  {
    id: 'consultancy',
    title: 'ICT Consultancy & Training',
    label: 'Expertise',
    icon: Presentation,
    img: 'https://images.unsplash.com/photo-1454165833767-02a9e5c777bb?w=1000&q=80',
    desc: 'Technology is only as effective as the strategy behind it and the people using it. We provide expert guidance to align IT with your business goals, alongside training to upskill your team.',
    bullets: [
      'IT strategy and roadmapping',
      'Technology audits and health checks',
      'Corporate IT training programs',
      'Cybersecurity awareness training'
    ]
  },
  {
    id: 'multimedia',
    title: 'Multimedia, Graphics & Prints',
    label: 'Creative',
    icon: Palette,
    img: 'https://images.unsplash.com/photo-1573497491765-d317ac42822d?w=1000&q=80',
    desc: 'Powerful branding requires professional execution. Our creative multimedia and premium printing services ensure your corporate identity looks sharp, modern, and memorable.',
    bullets: [
      'Corporate branding & logo design',
      'Marketing materials & brochures',
      'High-quality corporate printing',
      'Digital signage and multimedia displays'
    ]
  }
];

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <PageHeader 
        title="Our Services"
        label="What We Do"
        bgImage="https://images.unsplash.com/photo-1573163289538-23f491c6e494?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' }
        ]}
      />

      <div className="bg-brand-grey py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;
          
          return (
            <ScrollReveal 
              key={service.id} 
              id={service.id} 
              animation={isEven ? 'slide-in-left' : 'slide-in-right'}
            >
              <section 
                className={`py-16 md:py-24 relative z-10 ${!isEven ? 'bg-white' : ''}`}
              >
                {!isEven && <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />}
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:[direction:rtl]'}`}>
                    
                    {/* Image Column */}
                    <div className={`relative ${!isEven ? '[direction:ltr]' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-500 hover:-translate-y-2 group">
                        <img 
                          src={service.img} 
                          alt={`Visual representation of ${service.title}: ${service.desc.split('.')[0]}`} 
                          className="w-full h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                      {/* Floating Icon Box component */}
                      <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} bg-white rounded-2xl p-6 shadow-dropdown border border-gray-100 hidden md:block`}>
                        <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center mb-3">
                          <Icon size={28} />
                        </div>
                        <span className="text-sm font-bold font-heading text-brand-blue tracking-wide uppercase">
                          {service.label}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className={!isEven ? '[direction:ltr]' : ''}>
                      <div className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
                        <Icon size={18} /> {service.label}
                      </div>
                      <h2 className="mb-6">{service.title}</h2>
                      <p className="text-brand-body text-lg mb-8 leading-relaxed">
                        {service.desc}
                      </p>
                      
                      <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-brand-body font-medium text-[15px]">
                            <span className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-sm">✓</span>
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link to={`/contact?service=${service.id}`} className="btn-dark">
                        Request this Service <ArrowRight size={18} />
                      </Link>
                    </div>
                    
                  </div>
                </div>
              </section>
            </ScrollReveal>
          );
        })}
      </div>

      {/* CTA Banner */}
      <section className="bg-brand-blue relative overflow-hidden py-24 text-center border-t border-brand-blue-light/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/30 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/20 via-brand-blue/0 to-transparent opacity-80 pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <h2 className="text-white mb-6 text-4xl">Not sure what you need?</h2>
          <p className="text-white/70 text-lg mb-10 font-sans">
            Our technology consultants are ready to assess your requirements and recommend the perfect suite of solutions.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10">
             Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
