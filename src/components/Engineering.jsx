function Engineering() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none font-headline">
              Family Run <br/><span className="text-secondary-container">Since 1990</span>
            </h2>
            <p className="text-on-primary-container text-lg leading-relaxed mb-12">
              ASG Roofing Ltd is a well-established, family-run roofing company covering London and surrounding areas. Our roofers carry out work effectively and to a very high standard at competitive prices.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-surface-container-highest/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-container"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 font-headline">City & Guilds Certified</h4>
                  <p className="text-on-primary-container text-sm">Our roofers specialise in Mastic Asphalt roofing and have completed City & Guilds apprenticeships.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-surface-container-highest/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-container"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 font-headline">Highly Regarded</h4>
                  <p className="text-on-primary-container text-sm">A trusted roofing company serving residential, commercial and industrial properties across London.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-surface-container-highest/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-container"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 font-headline">Insurance Backed Guarantees</h4>
                  <p className="text-on-primary-container text-sm">10, 15 and 20 year insurance backed guarantees available on all new roofs.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-surface-container-highest/5 absolute -top-10 -right-10 w-full h-full border border-white/5"></div>
            <img 
              className="relative z-10 w-full h-full object-cover grayscale brightness-75"
              src="/images/portfolio/lead-roofing/asg-lead-02.avif"
              alt="Expert roofing team at work"
            />
            <div className="absolute bottom-12 -left-12 z-20 bg-secondary-container p-8 max-w-xs shadow-2xl">
              <p className="font-bold text-white uppercase tracking-tighter text-2xl italic leading-none font-headline">"30+ Years of Roofing Excellence"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Engineering
