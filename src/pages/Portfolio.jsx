import { useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioImages, serviceCategories } from '../data/portfolioImages'

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Get images based on active filter
  const getFilteredImages = () => {
    if (activeFilter === 'all') {
      return Object.values(portfolioImages).flat()
    }
    return portfolioImages[activeFilter] || []
  }

  const filteredImages = getFilteredImages()

  return (
    <>
      {/* Hero Section */}
      <header className="px-8 mb-20 max-w-7xl mx-auto pt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-secondary pl-8">
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Work</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary leading-[0.9] uppercase font-headline">
              Roofing<br/>Portfolio
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              Browse our completed roofing projects across London. From mastic asphalt and slate roofing to leadwork and repairs - quality craftsmanship in every job.
            </p>
          </div>
        </div>
      </header>

      {/* Service Filtering - Improved UX */}
      <section className="px-8 mb-12 max-w-7xl mx-auto">
        {/* Category Selector - Works on all screen sizes */}
        <div className="relative">
          {/* Selected Category Display */}
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4 bg-surface-container-low px-6 py-4 border border-outline-variant/30 hover:border-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">Filter:</span>
              <span className="font-bold uppercase tracking-widest text-lg text-primary">
                {serviceCategories.find(c => c.id === activeFilter)?.label}
              </span>
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`text-secondary transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          
          {/* Dropdown Menu - Grid Layout for better UX */}
          {isDropdownOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsDropdownOpen(false)}
              />
              
              {/* Menu */}
              <div className="absolute top-full left-0 right-0 md:right-auto md:w-[600px] mt-2 bg-surface-container-high border border-outline-variant/30 shadow-2xl z-50">
                {/* Quick Stats */}
                <div className="px-4 py-3 bg-surface-container-low border-b border-outline-variant/30">
                  <p className="text-sm text-on-surface-variant">
                    Showing <span className="font-bold text-primary">{filteredImages.length}</span> projects
                  </p>
                </div>
                
                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-2 max-h-[60vh] overflow-y-auto">
                  {serviceCategories.map((category) => {
                    const count = category.id === 'all' 
                      ? Object.values(portfolioImages).flat().length 
                      : portfolioImages[category.id]?.length || 0
                    
                    return (
                      <button 
                        key={category.id}
                        onClick={() => {
                          setActiveFilter(category.id)
                          setIsDropdownOpen(false)
                        }}
                        className={`flex items-center justify-between px-4 py-3 text-left transition-all rounded-sm ${
                          activeFilter === category.id 
                            ? 'bg-secondary text-on-secondary' 
                            : 'hover:bg-surface-container-low text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        <span className={`font-bold uppercase tracking-wider text-sm ${
                          activeFilter === category.id ? 'text-on-secondary' : ''
                        }`}>
                          {category.label}
                        </span>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          activeFilter === category.id 
                            ? 'bg-on-secondary/20 text-on-secondary' 
                            : 'bg-surface-container text-on-surface-variant'
                        }`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>
                
                {/* Close Button (Mobile) */}
                <div className="md:hidden p-2 border-t border-outline-variant/30">
                  <button 
                    onClick={() => setIsDropdownOpen(false)}
                    className="btn btn-primary btn-full btn-sm"
                  >
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Active Filter Indicator */}
        <div className="mt-4 flex items-center gap-2 text-sm text-on-surface-variant">
          <span>Viewing:</span>
          <span className="font-bold text-primary">{serviceCategories.find(c => c.id === activeFilter)?.label}</span>
          <span className="text-secondary">({filteredImages.length} projects)</span>
        </div>
      </section>

      {/* Project Gallery Grid */}
      <section className="px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-surface-container-high aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-1">
                  {image.location}
                </span>
                <h3 className="text-white text-lg font-bold uppercase tracking-tighter font-headline">
                  {image.title}
                </h3>
                <p className="text-slate-300 mt-2 text-sm font-light line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col">
            <button 
              className="self-end text-white mb-4 hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="mt-4 text-white">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase">
                {selectedImage.location}
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tighter font-headline mt-1">
                {selectedImage.title}
              </h3>
              <p className="text-slate-300 mt-2">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight font-headline">
          Ready to Start Your<br/>Roofing Project?
        </h2>
        <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
          Contact us today for a free, no-obligation quote. We cover all types of roofing work across London and surrounding areas.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact" className="btn btn-primary btn-lg">
            <span>Get Free Quote</span>
          </Link>
          <Link to="/services" className="btn btn-secondary btn-lg">
            <span>View Our Services</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default PortfolioPage
