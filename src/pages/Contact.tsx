import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <>
      <PageHeader 
        title="Contact Us"
        label="Get In Touch"
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <section className="relative">
        <div className="grid lg:grid-cols-2">
          
          {/* Left Side - Contact Info Pattern Background */}
          <div className="bg-brand-grey py-20 px-6 lg:px-16 xl:px-24 relative xl:flex xl:flex-col xl:justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
            <div className="relative z-10">
              <span className="section-label">Contact Information</span>
              <h2 className="mb-4">We're Here to Help</h2>
              <p className="text-brand-muted text-lg mb-12 max-w-md font-sans">
                Whether you have a question about our services, need technical support, or want to request a quote, our team is ready to answer all your questions.
              </p>

              <div className="space-y-6 max-w-md">
                {/* Contact Cards */}
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-gray-100 transition-all hover:border-brand-red hover:-translate-y-1 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading mb-1 text-brand-dark">Our Headquarters</h4>
                    <p className="text-brand-muted text-[15px] leading-relaxed">Road 8, Ohia Aruma Alakahia,<br/>Port Harcourt, Rivers State, Nigeria</p>
                  </div>
                </div>

                <a 
                  href="tel:+2347056641805"
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-gray-100 transition-all hover:border-brand-red hover:-translate-y-1 flex items-start gap-5 group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-red group-hover:text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading mb-1 text-brand-dark">Call</h4>
                    <p className="text-brand-muted text-[15px] leading-relaxed group-hover:text-brand-red transition-colors">
                      +234 705 664 1805<br/>
                      <span className="text-sm font-semibold">Click to call us directly</span>
                    </p>
                  </div>
                </a>

                <a 
                  href="mailto:info@machitechsolutions.com"
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-gray-100 transition-all hover:border-brand-blue hover:-translate-y-1 flex items-start gap-5 group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading mb-1 text-brand-dark">Email</h4>
                    <p className="text-brand-muted text-[15px] leading-relaxed group-hover:text-brand-blue transition-colors">
                      info@machitechsolutions.com<br/>
                      <span className="text-sm font-semibold">Click to send an email</span>
                    </p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/2347056641805" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-gray-100 transition-all hover:border-[#25D366] hover:-translate-y-1 flex items-start gap-5 group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                    {/* SVG content... */}
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="none" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading mb-1 text-brand-dark">WhatsApp</h4>
                    <p className="text-brand-muted text-[15px] leading-relaxed group-hover:text-[#25D366] transition-colors">
                      +234 705 664 1805<br/>
                      <span className="text-sm font-semibold">Click to message us instantly</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white py-20 px-6 lg:px-16 xl:px-24 xl:flex xl:flex-col xl:justify-center">
            <div className="max-w-lg w-full mx-auto lg:mx-0">
              <div className="mb-10">
                <span className="section-label" id="consultation">Send a Message</span>
                <h2 className="mb-2">Request Consultation</h2>
                <p className="text-brand-muted font-sans">Fill out the form below and we will get back to you within 24 hours.</p>
              </div>

              {success ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center transition-all animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">✓</span>
                  </div>
                  <h3 className="text-green-800 text-2xl font-heading mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">First Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John" 
                        className="w-full bg-brand-grey border-b-2 border-gray-200 px-5 py-4 focus:border-brand-blue focus:bg-white outline-none transition-colors rounded-t-lg font-sans placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">Last Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Doe" 
                        className="w-full bg-brand-grey border-b-2 border-gray-200 px-5 py-4 focus:border-brand-blue focus:bg-white outline-none transition-colors rounded-t-lg font-sans placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-brand-grey border-b-2 border-gray-200 px-5 py-4 focus:border-brand-blue focus:bg-white outline-none transition-colors rounded-t-lg font-sans placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+234 XXX XXXX" 
                        className="w-full bg-brand-grey border-b-2 border-gray-200 px-5 py-4 focus:border-brand-blue focus:bg-white outline-none transition-colors rounded-t-lg font-sans placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Service of Interest</label>
                    <div className="relative">
                      <select required className="w-full bg-brand-grey border-b-2 border-gray-200 px-5 py-4 focus:border-brand-blue focus:bg-white outline-none transition-colors rounded-t-lg appearance-none font-sans text-brand-dark">
                        <option value="">Select a service...</option>
                        <option value="it">IT Infrastructure</option>
                        <option value="software">Software Solutions</option>
                        <option value="networking">Networking & Internet</option>
                        <option value="surveillance">Smart Surveillance</option>
                        <option value="procurement">Tech Procurement</option>
                        <option value="consultancy">ICT Consultancy</option>
                        <option value="multimedia">Multimedia & Prints</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-brand-muted">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-dark mb-2">Your Message</label>
                    <textarea 
                      required 
                      rows={4} 
                      placeholder="How can we help your business?" 
                      className="w-full bg-brand-grey border-b-2 border-gray-200 px-5 py-4 focus:border-brand-blue focus:bg-white outline-none transition-colors rounded-t-lg resize-none font-sans placeholder:text-gray-400"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-70 mt-4 text-lg"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={20} /> Send Message
                      </span>
                    )}
                  </button>
                  
                </form>
              )}
            </div>
          </div>

        </div>
      </section>


    </>
  );
};

export default Contact;
