import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const servicesData = [
  {
    id: 'mastic-asphalt',
    title: 'Asphalt Roofs',
    shortDesc: 'Premium waterproof roofing',
    fullDesc: 'We specialise in all aspects of Mastic Asphalt, considered amongst the best and most durable products available. Can be laid on flat roofs, steps, gutters, walkways and car parks. With over 30 years experience, our skilled team delivers exceptional quality workmanship.',
    image: '/images/portfolio/mastic-asphalt/asg-mastic-asphalt-01.avif',
    features: ['50+ year lifespan', 'Fully waterproof', 'Fire resistant', 'Low maintenance']
  },
  {
    id: 'natural-man-made-slates',
    title: 'Slates',
    shortDesc: 'Traditional slate roofing',
    fullDesc: 'Natural Welsh and Spanish slates, hand made or machine made plain tiles, interlocking concrete tiles, and reclaimed slate products for older properties. We match existing roofs perfectly for seamless repairs and extensions.',
    image: '/images/portfolio/natural-man-made-slates/asg-slate-01.avif',
    features: ['Natural & synthetic options', 'Heritage matching', '100+ year lifespan', 'Weather resistant']
  },
  {
    id: 'high-performance-felt',
    title: 'Felt Roofs',
    shortDesc: 'Modern felt roofing systems',
    fullDesc: 'High performance felt roofing systems installed by our specialist team. Ideal for garages, sheds, extensions and flat roofs. We use only premium materials with long guarantees.',
    image: '/images/portfolio/high-performance-felt/asg-felt-01.avif',
    features: ['Cost effective', 'Quick installation', '20+ year guarantee', 'Versatile applications']
  },
  {
    id: 'tiled-roofs',
    title: 'Tiled Roofs',
    shortDesc: 'Clay & concrete tiles',
    fullDesc: 'Traditional clay and concrete tile roofing for pitched roofs. We install new tiled roofs and repair existing ones, matching tiles perfectly for seamless extensions and repairs.',
    image: '/images/portfolio/tiled-roofs/asg-tile-01.avif',
    features: ['50+ year lifespan', 'Weather resistant', 'Various styles & colours', 'Traditional appearance']
  },
  {
    id: 'lead-roofing',
    title: 'Lead Roofs',
    shortDesc: 'Traditional leadwork specialists',
    fullDesc: 'Lead roofs lasting over 100 years when installed professionally. Complete installations including flat roofs, pitched roofs, valley roofs, step flashings, and lead repairs. Our craftsmen are trained in traditional leadworking techniques.',
    image: '/images/portfolio/lead-roofing/asg-lead-01.avif',
    features: ['100+ year lifespan', 'Fully recyclable', 'Heritage specialists', 'Custom flashings']
  },
  {
    id: 'copper-zinc-roofs',
    title: 'Zinc & Copper Roofs',
    shortDesc: 'Premium metal roofing',
    fullDesc: 'Stunning copper and zinc roofing for prestigious projects. These premium materials develop beautiful patinas over time and can last over 100 years with minimal maintenance.',
    image: '/images/portfolio/copper-zinc-roofs/asg-copper-01.avif',
    features: ['100+ year lifespan', 'Self-healing patina', 'Lightweight', 'Architectural grade']
  },
  {
    id: 'upvc-fascia-guttering',
    title: 'UPVC Fascias',
    shortDesc: 'Complete rainwater systems',
    fullDesc: 'Full replacement and repair of fascias, soffits, guttering and downpipes. We use high-quality UPVC products that never need painting and come with long guarantees.',
    image: '/images/portfolio/upvc-fascia-guttering/asg-upvc-01.avif',
    features: ['Maintenance free', '20 year guarantee', 'Various colours', 'Full replacement service']
  },

  {
    id: 'asphalt-steps',
    title: 'Asphalt Steps',
    shortDesc: 'Steps, walkways & access areas',
    fullDesc: 'We specialise in the installation and repair of mastic asphalt steps, walkways, and access areas. Providing a durable, slip-resistant surface suitable for both residential and commercial properties.',
    image: '/images/portfolio/asphalt-steps/asg-steps-01.avif',
    features: ['Steps & staircases', 'Walkways & paths', 'Car parks', 'Repairs & resurfacing']
  },
  {
    id: 'drone',
    title: 'Drone Surveys',
    shortDesc: 'Aerial roof inspections',
    fullDesc: 'Advanced aerial roof inspections using drone technology. Safe, accurate assessments without the need for scaffolding. High-resolution imagery and detailed reports for insurance claims and maintenance planning.',
    image: '/images/portfolio/mastic-asphalt/asg-mastic-asphalt-02.avif',
    features: ['High-resolution photos', 'No scaffolding needed', 'Detailed reports', 'Insurance approved']
  }
]

function ServiceModal({ service, onClose }) {
  if (!service) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="relative h-64 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-6 text-3xl font-bold text-white font-headline">
            {service.title}
          </h3>
        </div>

        <div className="p-6">
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {service.fullDesc}
          </p>

          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Key Features</h4>
            <div className="grid grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Link 
            to="/contact"
            onClick={onClose}
            className="btn btn-primary btn-full"
          >
            <span>Request a Quote</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5] text-left cursor-pointer flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] select-none snap-start"
    >
      <img 
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
        draggable="false"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white font-headline mb-1">
          {service.title}
        </h3>
        <p className="text-white/70 text-sm">
          {service.shortDesc}
        </p>
      </div>

      <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#1a2744] group-hover:bg-orange-600 rounded-full flex items-center justify-center text-white transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
        </svg>
      </div>
    </div>
  )
}

function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  
  // Drag state
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const velocityRef = useRef(0)
  const lastXRef = useRef(0)
  const lastTimeRef = useRef(0)
  
  const cardWidth = 324 // 300px + 24px gap
  
  // Update active index based on scroll position
  const updateActiveIndex = () => {
    if (trackRef.current) {
      const scrollPos = trackRef.current.scrollLeft
      const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth
      const newIndex = Math.round((scrollPos / maxScroll) * (servicesData.length - 1))
      setActiveIndex(Math.min(Math.max(newIndex, 0), servicesData.length - 1))
    }
  }
  
  // Momentum scrolling animation
  const momentumScroll = () => {
    if (Math.abs(velocityRef.current) > 0.5) {
      if (trackRef.current) {
        trackRef.current.scrollLeft += velocityRef.current
        velocityRef.current *= 0.95 // Friction
        
        // Bounds check with bounceback
        const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth
        if (trackRef.current.scrollLeft < 0) {
          trackRef.current.scrollLeft = 0
          velocityRef.current = 0
        } else if (trackRef.current.scrollLeft > maxScroll) {
          trackRef.current.scrollLeft = maxScroll
          velocityRef.current = 0
        }
      }
      animationRef.current = requestAnimationFrame(momentumScroll)
    } else {
      // Snap to nearest card when momentum stops
      snapToNearestCard()
    }
    updateActiveIndex()
  }
  
  // Snap to nearest card
  const snapToNearestCard = () => {
    if (trackRef.current) {
      const scrollPos = trackRef.current.scrollLeft
      const nearestCard = Math.round(scrollPos / cardWidth) * cardWidth
      
      trackRef.current.scrollTo({
        left: nearestCard,
        behavior: 'smooth'
      })
    }
  }
  
  // Mouse down
  const handleMouseDown = (e) => {
    isDraggingRef.current = true
    startXRef.current = e.pageX - (trackRef.current?.offsetLeft || 0)
    scrollLeftRef.current = trackRef.current?.scrollLeft || 0
    lastXRef.current = e.pageX
    lastTimeRef.current = Date.now()
    velocityRef.current = 0
    
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grabbing'
    }
    
    // Cancel any ongoing momentum
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }
  
  // Mouse move
  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return
    e.preventDefault()
    
    const x = e.pageX - (trackRef.current?.offsetLeft || 0)
    const walk = (x - startXRef.current) * 1.5 // Drag sensitivity
    
    if (trackRef.current) {
      trackRef.current.scrollLeft = scrollLeftRef.current - walk
    }
    
    // Calculate velocity for momentum
    const now = Date.now()
    const dt = now - lastTimeRef.current
    if (dt > 0) {
      velocityRef.current = (e.pageX - lastXRef.current) * 0.5
    }
    lastXRef.current = e.pageX
    lastTimeRef.current = now
    
    updateActiveIndex()
  }
  
  // Mouse up
  const handleMouseUp = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab'
    }
    
    // Apply momentum if velocity is significant
    if (Math.abs(velocityRef.current) > 2) {
      animationRef.current = requestAnimationFrame(momentumScroll)
    } else {
      snapToNearestCard()
    }
  }
  
  // Mouse leave
  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      handleMouseUp()
    }
  }
  
  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    isDraggingRef.current = true
    startXRef.current = e.touches[0].pageX - (trackRef.current?.offsetLeft || 0)
    scrollLeftRef.current = trackRef.current?.scrollLeft || 0
    lastXRef.current = e.touches[0].pageX
    lastTimeRef.current = Date.now()
    velocityRef.current = 0
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }
  
  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return
    
    const x = e.touches[0].pageX - (trackRef.current?.offsetLeft || 0)
    const walk = (x - startXRef.current) * 1.5
    
    if (trackRef.current) {
      trackRef.current.scrollLeft = scrollLeftRef.current - walk
    }
    
    const now = Date.now()
    const dt = now - lastTimeRef.current
    if (dt > 0) {
      velocityRef.current = (e.touches[0].pageX - lastXRef.current) * 0.5
    }
    lastXRef.current = e.touches[0].pageX
    lastTimeRef.current = now
    
    updateActiveIndex()
  }
  
  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    
    if (Math.abs(velocityRef.current) > 2) {
      animationRef.current = requestAnimationFrame(momentumScroll)
    } else {
      snapToNearestCard()
    }
  }
  
  // Click handler - only open modal if not dragging
  const handleCardClick = (service) => {
    if (!isDraggingRef.current && Math.abs(velocityRef.current) < 1) {
      setSelectedService(service)
    }
  }
  
  // Jump to specific service
  const jumpToService = (index) => {
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
      setActiveIndex(index)
    }
  }
  
  // Cleanup
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline">Our Roofing Services</h2>
              <div className="h-1 w-24 bg-secondary mb-6"></div>
              <p className="text-on-surface-variant leading-relaxed">We cover all aspects of roofing for residential, commercial and industrial properties across London and surrounding areas. All work carried out to the highest standard at competitive prices.</p>
            </div>
            <Link to="/services" className="btn btn-primary btn-sm">
              <span>View All Services</span>
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="relative"
        >
          {/* Left Fade - hidden on mobile */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade - hidden on mobile */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track - Native scroll with drag */}
          <div 
            ref={trackRef}
            className="flex gap-4 sm:gap-6 px-4 sm:px-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={updateActiveIndex}
          >
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={`${service.id}-${index}`}
                service={service}
                onClick={() => handleCardClick(service)}
              />
            ))}
          </div>
        </div>

        {/* Position Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {servicesData.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToService(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#1a2744] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-400 mt-4">
          Drag to explore our services
        </p>
      </section>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </>
  )
}

export default Services
