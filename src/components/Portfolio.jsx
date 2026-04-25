const projects = [
  {
    title: 'Mastic Asphalt Installation',
    location: 'London',
    type: 'Commercial',
    featured: true,
    image: '/images/portfolio/mastic-asphalt/asg-mastic-asphalt-04.avif',
    description: 'Professional mastic asphalt roofing system installed for commercial property with 20-year durability guarantee.'
  },
  {
    title: 'Natural Slate Restoration',
    location: 'London',
    type: 'Heritage',
    image: '/images/portfolio/natural-man-made-slates/asg-slate-03.avif',
    description: 'Heritage slate roof restoration using reclaimed materials for period property conservation.'
  },
  {
    title: 'Lead Roofing Project',
    location: 'London',
    type: 'Residential',
    image: '/images/portfolio/lead-roofing/asg-lead-03.avif'
  },
  {
    title: 'High Performance Felt Roof',
    location: 'London',
    type: 'Industrial',
    image: '/images/portfolio/high-performance-felt/asg-felt-04.avif'
  },
  {
    title: 'Copper & Zinc Installation',
    location: 'London',
    type: 'Technical',
    image: '/images/portfolio/copper-zinc-roofs/asg-copper-04.avif'
  }
]

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-secondary pl-8 mb-12">
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Portfolio Exhibition</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.9] uppercase">
              Built for the <br/>Next Century
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              A definitive archive of structural excellence. From high-rise commercial steel to heritage slate restorations, every project is a monument to industrial precision.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-8 border-b border-outline-variant/30 pb-4 mb-12 overflow-x-auto">
          <button className="text-secondary font-bold uppercase tracking-widest text-sm border-b-2 border-secondary pb-4 -mb-[18px]">All Projects</button>
          <button className="text-on-surface-variant font-medium uppercase tracking-widest text-sm hover:text-primary transition-colors pb-4 -mb-[18px]">Commercial</button>
          <button className="text-on-surface-variant font-medium uppercase tracking-widest text-sm hover:text-primary transition-colors pb-4 -mb-[18px]">Residential</button>
          <button className="text-on-surface-variant font-medium uppercase tracking-widest text-sm hover:text-primary transition-colors pb-4 -mb-[18px]">Heritage</button>
          <button className="text-on-surface-variant font-medium uppercase tracking-widest text-sm hover:text-primary transition-colors pb-4 -mb-[18px]">Restoration</button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large Feature Card */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-high h-[600px]">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src={projects[0].image}
              alt={projects[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2">{projects[0].type}</span>
              <h3 className="text-white text-4xl font-bold uppercase tracking-tighter">{projects[0].title}</h3>
              <p className="text-slate-300 mt-4 max-w-md font-light">{projects[0].description}</p>
            </div>
            <div className="absolute top-6 right-6 bg-secondary text-on-secondary px-4 py-1 text-[10px] font-black uppercase tracking-widest">Featured</div>
          </div>

          {/* Side Tall Card */}
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high h-[600px]">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src={projects[1].image}
              alt={projects[1].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2">{projects[1].type}</span>
              <h3 className="text-white text-2xl font-bold uppercase tracking-tighter">{projects[1].title}</h3>
              <p className="text-slate-300 mt-2 text-sm font-light">{projects[1].description}</p>
            </div>
          </div>

          {/* Mid-size Squares */}
          {projects.slice(2).map((project, index) => (
            <div key={index} className="md:col-span-4 group relative overflow-hidden bg-surface-container-high h-[400px]">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                <div className="border border-white/30 p-6 backdrop-blur-sm">
                  <h3 className="text-white text-xl font-bold uppercase tracking-tighter">{project.title}</h3>
                  <span className="text-secondary-container font-bold text-[10px] uppercase tracking-[0.2em] mt-2 block">{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio