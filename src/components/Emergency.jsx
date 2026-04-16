function Emergency() {
  return (
    <section className="bg-secondary py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
        <span className="text-[20rem] font-black font-headline text-white leading-none select-none">EMERGENCY</span>
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-on-secondary uppercase leading-tight mb-6">
              24/7 EMERGENCY DISPATCH
            </h2>
            <p className="text-on-secondary/80 text-lg leading-relaxed mb-8">
              Storm damage? Leaking roof? Our emergency response team is available around the clock to secure your property and prevent further damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:01234567890" 
                className="bg-primary text-on-primary px-8 py-4 text-center uppercase tracking-wider font-semibold hover:bg-primary/90 transition"
              >
                Call Emergency Line
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">30min</div>
              <div className="text-xs text-on-primary-container uppercase tracking-widest">Response Time</div>
            </div>
            <div className="bg-primary p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-xs text-on-primary-container uppercase tracking-widest">Availability</div>
            </div>
            <div className="bg-primary p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">UK</div>
              <div className="text-xs text-on-primary-container uppercase tracking-widest">Coverage</div>
            </div>
            <div className="bg-primary p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-xs text-on-primary-container uppercase tracking-widest">Secured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Emergency