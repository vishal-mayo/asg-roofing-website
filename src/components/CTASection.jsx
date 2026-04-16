function CTASection() {
  return (
    <section className="py-24 px-8 bg-surface relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-primary p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            className="w-full h-full object-cover grayscale invert" 
            src="/images/portfolio/copper-zinc-roofs/asg-copper-zinc-01.avif"
            alt="Get a free roofing quote"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 font-headline">Get Your Free Quote <br/>Today.</h2>
          <p className="text-on-primary-container text-lg mb-10 max-w-xl">Contact us today for a free, no-obligation quote on your roofing project. We cover all types of roofing work including repairs, installations, and maintenance.</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="/contact" className="btn-collision" style={{ color: '#fff', borderColor: '#fff' }}>
              <span>Request Quote</span>
            </a>
            <div className="flex flex-col justify-center">
              <div className="text-white/40 uppercase text-[10px] font-bold tracking-widest mb-1">Call Us Now</div>
              <a href="tel:01992812252" className="text-white font-bold text-xl hover:text-secondary-container transition-colors">01992 812252</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
