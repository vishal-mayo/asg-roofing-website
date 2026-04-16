import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceAreaMap from '../components/ServiceAreaMap'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 1000)
  }

  return (
    <>
      {/* Hero Section / Editorial Header */}
      <section className="px-8 pt-32 pb-12 architectural-grid">
        <div className="max-w-7xl mx-auto">
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-4">Contact Us</span>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-primary leading-[0.9] mb-6">
            GET IN<br/>TOUCH
          </h1>
          <p className="max-w-xl text-on-surface-variant text-lg font-body leading-relaxed">
            Request a free, no-obligation quote for your roofing project. Whether it's a new installation, repair, or maintenance work, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content: Two-Column Industrial Layout */}
      <section className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-16">
        {/* Left Column: Professional Contact Form */}
        <div className="flex-1">
          <div className="bg-surface-container-low p-10 relative">
            <div className="absolute top-0 left-0 w-1 h-24 bg-secondary"></div>
            <h2 className="text-3xl font-headline font-bold tracking-tight text-primary mb-8 uppercase">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Full Name</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary transition-colors outline-none py-2 font-body text-primary"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Email Address</label>
                  <input 
                    type="email"
                    required
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary transition-colors outline-none py-2 font-body text-primary"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary transition-colors outline-none py-2 font-body text-primary"
                    placeholder="+44 7700 900000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Type of Service</label>
                  <select 
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary transition-colors outline-none py-2 font-body text-primary appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service</option>
                    <option value="asphalt">Asphalt Roofs</option>
                    <option value="felt">Felt Roofs</option>
                    <option value="lead">Lead Roofs</option>
                    <option value="zinc">Zinc Roofs</option>
                    <option value="upvc">UPVC Fascias</option>
                    <option value="guttering-repairs">Guttering & Roof Repairs</option>
                    <option value="drone">Drone Surveys</option>
                    <option value="emergency">Emergency Call-out</option>
                  </select>
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Project Brief</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary transition-colors outline-none py-2 font-body text-primary resize-none"
                  placeholder="Detail the scope of work and technical requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-100 text-green-700 p-4 text-center">
                  Thank you! We'll be in touch soon.
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary btn-full"
              >
                <span>Get Your Quote</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Corporate Details & Map */}
        <div className="flex-1 space-y-12">
          {/* Contact Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start gap-6">
              <div className="bg-primary-container p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-primary-container"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-2">Address</h3>
                <p className="text-xl font-headline font-bold text-primary leading-tight">
                  74 Forest Drive<br/>
                  Theydon Bois<br/>
                  Epping CM16 7EZ
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary-container p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-primary-container"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-2">Email</h3>
                <a href="mailto:asgroofingltd@yahoo.com" className="text-xl font-headline font-bold text-primary hover:text-secondary transition-colors">asgroofingltd@yahoo.com</a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary-container p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-primary-container"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-2">Phone</h3>
                <a href="tel:01992812252" className="text-xl font-headline font-bold text-primary hover:text-secondary transition-colors">01992 812252</a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary-container p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-primary-container"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-2">Mobile</h3>
                <a href="tel:07956293612" className="text-xl font-headline font-bold text-primary hover:text-secondary transition-colors">07956 293612</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="pt-8 border-t border-outline/20">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/asgroofingltd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-secondary transition-colors">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-primary-container"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <span className="font-headline font-bold">@asgroofingltd</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-primary hover:text-secondary transition-colors" title="Facebook - Coming Soon">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-primary-container"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <span className="font-headline font-bold">Facebook</span>
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.598482016028!2d0.10250931577392266!3d51.67192697966247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48762f1ebc2ffffff%3A0x0!2s74+Forest+Dr%2C+Theydon+Bois%2C+Epping+CM16+7EZ!5e0!3m2!1sen!2suk!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-2xl"
            ></iframe>
            <div className="absolute bottom-6 left-6 bg-primary p-6 z-20">
              <span className="text-on-primary font-headline font-bold tracking-tight">asgroofingltd@yahoo.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map - Full Width Section */}
      <ServiceAreaMap />

      {/* Secondary CTA: Get a Quote */}
      <section className="bg-primary py-24 mt-12 overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <span className="text-[20rem] font-black font-headline text-white leading-none select-none">QUOTE</span>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black font-headline text-on-primary tracking-tighter mb-8 leading-tight">
              READY TO START?<br/>GET YOUR FREE QUOTE.
            </h2>
            <p className="text-on-primary-container text-lg mb-10 font-body">
              Contact us today for a free, no-obligation quote on your roofing project. We cover all types of roofing work including repairs, installations, and maintenance.
            </p>
            <a 
              href="mailto:asgroofingltd@yahoo.com" 
              className="btn btn-primary-alt"
            >
              <span>Email Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage