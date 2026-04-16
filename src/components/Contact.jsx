import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="px-8 pt-16 pb-12">
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-4">Contact HQ</span>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-primary leading-[0.9] mb-6">
            ENGINEERED<br/>FOR RESPONSE.
          </h1>
          <p className="max-w-xl text-on-surface-variant text-lg font-body leading-relaxed">
            Structural integrity begins with communication. Connect with our technical advisory team for enterprise-grade roofing solutions and emergency maintenance.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-surface-container-low p-10 relative">
              <div className="absolute top-0 left-0 w-1 h-24 bg-secondary"></div>
              <h2 className="text-3xl font-headline font-bold tracking-tight text-primary mb-8 uppercase">Project Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Legal Name</label>
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
                    <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Corporate Email</label>
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
                    <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Phone System</label>
                    <input 
                      type="tel"
                      className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary transition-colors outline-none py-2 font-body text-primary"
                      placeholder="+44 7700 900000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-outline mb-2">Service Category</label>
                    <select 
                      className="w-full bg-transparent border-b-2 border-outline-variant focus:border-secondary transition-colors outline-none py-2 font-body text-primary appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option value="commercial">Commercial Installation</option>
                      <option value="technical">Technical Inspection</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="residential">Residential Systems</option>
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
                  className="w-full bg-primary text-on-primary py-4 font-headline font-black uppercase tracking-[0.2em] hover:bg-tertiary transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Transmit Inquiry
                  <span className="material-symbols-outlined text-secondary-container">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex-1 space-y-12">
            <div className="grid grid-cols-1 gap-12">
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="bg-primary-container p-4">
                    <span className="material-symbols-outlined text-on-primary-container">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-2">Headquarters</h3>
                    <p className="text-xl font-headline font-bold text-primary leading-tight">
                      123 Business Street<br/>
                      Manchester, M1 1AA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex items-start gap-6">
                  <div className="bg-primary-container p-4">
                    <span className="material-symbols-outlined text-on-primary-container">call</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-2">Direct Line</h3>
                    <p className="text-xl font-headline font-bold text-primary">01234 567890</p>
                    <p className="text-sm text-outline font-body">Mon-Fri, 07:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-primary-container p-4">
                    <span className="material-symbols-outlined text-on-primary-container">mail</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-2">Technical Support</h3>
                    <p className="text-xl font-headline font-bold text-primary">info@asgroofing.co.uk</p>
                    <p className="text-sm text-outline font-body">24hr Response Target</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                className="w-full h-[400px] object-cover grayscale contrast-125 shadow-2xl"
                src="/images/portfolio/mastic-asphalt/asg-mastic-asphalt-03.avif"
                alt="Location map"
              />
              <div className="absolute bottom-6 left-6 bg-primary p-6 z-20">
                <span className="text-on-primary font-headline font-bold tracking-tight">LAT: 53.4808° N</span><br/>
                <span className="text-secondary-container font-headline font-bold tracking-tight">LONG: 2.2426° W</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact