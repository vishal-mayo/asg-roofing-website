import { Link } from 'react-router-dom'

function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 px-8 overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          <div className="bg-secondary-container px-3 py-1 mb-6">
            <span className="text-on-secondary-container font-headline font-black text-xs tracking-[0.2em] uppercase">Our Services</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-black text-on-primary tracking-tighter leading-[0.9] max-w-4xl mb-8">
            ROOFING<br/>SERVICES
          </h1>
          <p className="text-on-primary-container max-w-xl text-lg mb-10 leading-relaxed font-body">
            ASG Roofing Ltd specialises in all aspects of roofing for residential, commercial and industrial properties across London and surrounding areas. 30+ years experience with City & Guilds certified roofers.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn btn-primary-alt">
              <span>Get Free Quote</span>
            </Link>
            <a href="tel:01992812252" className="btn btn-secondary-alt">
              <span>Call 01992 812252</span>
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10 -skew-x-12 transform translate-x-1/2"></div>
      </section>

      {/* Services Grid - 8 Services */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* 01 Asphalt Roofs */}
          <div className="md:col-span-7 group">
            <div className="relative overflow-hidden aspect-[16/9] mb-6">
              <img 
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                src="/images/portfolio/mastic-asphalt/asg-mastic-asphalt-05.avif"
                alt="Asphalt Roofing Specialists"
              />
              <div className="absolute top-0 left-0 bg-primary text-on-primary px-4 py-2 font-headline font-bold text-xl">01</div>
            </div>
            <h3 className="text-4xl font-headline font-black tracking-tight mb-4 text-primary uppercase">Asphalt Roofs</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed max-w-xl">
              We specialise in all aspects of Mastic Asphalt roofing. We consider this method to be amongst the best and most durable of products available if laid correctly. Asphalt can be laid on flat roofs, steps, gutters, walkways and car parks, and can also be repaired.
            </p>
            <div className="flex items-center gap-8 border-t border-outline/20 pt-6">
              <div>
                <span className="block text-[10px] uppercase font-black tracking-widest text-secondary">Applications</span>
                <span className="text-xl font-headline font-bold text-primary">Flat Roofs, Steps, Gutters</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-black tracking-widest text-secondary">Durability</span>
                <span className="text-xl font-headline font-bold text-primary">Highly Durable</span>
              </div>
            </div>
          </div>

          {/* 02 Slates */}
          <div className="md:col-span-5 pt-6 md:pt-12">
            <div className="bg-surface-container-low p-8 relative">
              <div className="absolute -top-12 right-0 w-24 h-24 bg-secondary flex items-center justify-center">
                <span className="text-on-secondary font-headline font-bold text-4xl">02</span>
              </div>
              <h3 className="text-3xl font-headline font-black mb-6 text-primary uppercase leading-tight">Slates<br/><span className="text-lg text-on-surface-variant">Natural & Man Made</span></h3>
              <div className="space-y-6">
                <div className="border-l-4 border-secondary-container pl-4">
                  <h4 className="font-headline font-bold text-primary">Natural Slates</h4>
                  <p className="text-sm text-on-surface-variant">Welsh and Spanish slates, as well as natural slate from other regions of the world.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-headline font-bold text-primary">Synthetic Slates</h4>
                  <p className="text-sm text-on-surface-variant">Fibre cement slates and reclaimed slate products for older style properties.</p>
                </div>
              </div>
              <div className="mt-8">
                <img 
                  className="w-full aspect-square object-cover object-center grayscale brightness-75"
                  src="/images/portfolio/natural-man-made-slates/asg-slate-04.avif"
                  alt="Natural and man made slate roofing"
                />
              </div>
            </div>
          </div>

          {/* 03 Felt Roofs */}
          <div className="md:col-span-5 md:mt-[-50px]">
            <div className="relative overflow-hidden aspect-[4/5] mb-6">
              <img 
                className="w-full h-full object-cover object-center"
                src="/images/portfolio/high-performance-felt/asg-felt-05.avif"
                alt="Felt roofing"
              />
              <div className="absolute bottom-0 right-0 bg-primary text-on-primary px-4 py-2 font-headline font-bold text-xl">03</div>
            </div>
            <h3 className="text-4xl font-headline font-black tracking-tight mb-4 text-primary uppercase">Felt Roofs</h3>
            <p className="text-on-surface-variant mb-4">We are fully approved to install our chosen high performance felts and depending on specification, are able to offer 10 year, 15 year and 20 year insurance backed guarantees on all new roofs.</p>
          </div>

          {/* 04 Tiled Roofs */}
          <div className="md:col-span-7">
            <div className="relative overflow-hidden bg-primary group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 transition-opacity"
                  src="/images/portfolio/tiled-roofs/asg-tile-03.avif"
                  alt="Tiled roofing"
                />
                <div className="absolute inset-0 bg-primary/60"></div>
              </div>
              {/* Content */}
              <div className="relative z-10 p-12 h-full min-h-[400px] flex flex-col justify-between">
                <span className="text-secondary-container font-headline font-black text-5xl">04</span>
                <div>
                  <h3 className="text-3xl font-headline font-black text-white mb-4 uppercase">Tiled Roofs</h3>
                  <p className="text-white/80 max-w-md">Traditional clay and concrete tile roofing for pitched roofs. We install new tiled roofs and repair existing ones, matching tiles perfectly for seamless extensions and repairs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Lead Roofs Section */}
      <section className="bg-surface-container-high py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-headline font-black text-5xl block mb-4">05</span>
              <h2 className="text-5xl font-headline font-black text-primary tracking-tighter leading-none uppercase mb-6">Lead Roofs</h2>
              <p className="text-on-surface-variant text-lg">Lead roofs are chosen not only for their beautiful finished look but also for the knowledge that it will last for over 100 years if installed professionally. Complete installations including flat roofs, pitched roofs, valley roofs, step flashings, and lead repairs.</p>
            </div>
            <div className="bg-primary text-on-primary p-6 inline-block">
              <span className="font-headline font-black text-3xl">100+ Years</span>
              <p className="text-[10px] uppercase tracking-widest mt-1 opacity-60">Expected Lifespan</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 border-b-4 border-secondary">
              <h4 className="font-headline font-bold text-lg text-primary mb-2">Lead Roofing</h4>
            </div>
            <div className="bg-white p-6 border-b-4 border-primary">
              <h4 className="font-headline font-bold text-lg text-primary mb-2">Valley Gutters</h4>
            </div>
            <div className="bg-white p-6 border-b-4 border-secondary-container">
              <h4 className="font-headline font-bold text-lg text-primary mb-2">Step Flashings</h4>
            </div>
            <div className="bg-white p-6 border-b-4 border-secondary">
              <h4 className="font-headline font-bold text-lg text-primary mb-2">Lead Repairs</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Zinc & Copper Roofs Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-headline font-black text-5xl block mb-6">06</span>
            <h2 className="text-5xl font-headline font-black text-primary tracking-tighter leading-none uppercase mb-6">Zinc & Copper Roofs</h2>
            <p className="text-on-surface-variant text-lg mb-6">
              We offer zinc & copper roofing and cladding services to domestic, new builds, refurbishments and commercial builds. These premium materials develop beautiful patinas over time and can last over 100 years with minimal maintenance.
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Zinc Roofing & Cladding
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Copper Roofing & Cladding
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Self-healing patina
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                100+ year lifespan
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden aspect-[4/3]">
            <img 
              className="w-full h-full object-cover"
              src="/images/portfolio/copper-zinc-roofs/asg-copper-zinc-copper-01.jpg"
              alt="Zinc and copper roofing"
            />
          </div>
        </div>
      </section>

      {/* 07 UPVC Fascias Section */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative overflow-hidden aspect-[4/3]">
              <img 
                className="w-full h-full object-cover"
                src="/images/portfolio/upvc-fascia-guttering/asg-upvc-01.avif"
                alt="UPVC fascias and guttering"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-secondary font-headline font-black text-5xl block mb-6">07</span>
              <h2 className="text-5xl font-headline font-black text-primary tracking-tighter leading-none uppercase mb-6">UPVC Fascias</h2>
              <p className="text-on-surface-variant text-lg mb-6">
                We can supply and fit a wide range of rainwater systems, both traditional and modern in a range of colours to suit all properties. Replacing UPVC fascias, guttering and soffits to your home is a cost effective way to improve the appearance and increase the value of your home.
              </p>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Low maintenance
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Economical and long lasting
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Range of colours available
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  20 year guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 08 Drone Surveys */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-headline font-black text-5xl block mb-6">08</span>
              <h2 className="text-5xl font-headline font-black text-primary tracking-tighter leading-none uppercase mb-6">Drone<br/>Surveys</h2>
              <p className="text-on-surface-variant text-lg mb-6">
                Advanced aerial roof inspections using drone technology. Safe, accurate assessments without the need for scaffolding. High-resolution imagery and detailed reports.
              </p>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  High-resolution aerial photography
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  No scaffolding required
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Detailed inspection reports
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Safe and efficient
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden aspect-[4/3]">
              <img 
                className="w-full h-full object-cover"
                src="/images/portfolio/drone-survey.jpg"
                alt="Drone roof survey"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call-out CTA */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto bg-primary overflow-hidden relative group">
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="p-12 md:p-20 flex-1">
              <h2 className="text-4xl md:text-5xl font-headline font-black text-on-primary uppercase leading-tight mb-6">Emergency<br/><span className="text-secondary-container">Call-out Service</span></h2>
              <p className="text-on-primary-container text-lg max-w-lg mb-8">
                We offer an emergency call-out service for all roofing problems. Rapid response team available for urgent repairs and storm damage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:01992812252" className="btn btn-primary-alt">
                  <span>Call 01992 812252</span>
                </a>
                <a href="tel:07956293612" className="btn btn-secondary-alt">
                  <span>Mobile 07956 293612</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square relative">
              <img 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity"
                src="/images/portfolio/copper-zinc-roofs/asg-copper-zinc-05.avif"
                alt="Emergency roofing call-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
