import { useEffect, useState } from 'react'

function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img 
          className="w-full h-[120%] object-cover object-center"
          src="/images/hero-main.jpg"
          alt="Professional roofing services in London - ASG Roofing Ltd"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            London Roofing Specialists
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
            Expert Roofing <br/><span className="text-secondary-container">Across London</span>
          </h1>
          <p className="text-lg text-on-primary-container font-medium mb-10 max-w-lg leading-relaxed">
            ASG Roofing Ltd is a well-established, family-run roofing company with over 30 years' experience. We specialise in Mastic Asphalt, slating, tiling, lead work, and all roof repairs for residential, commercial and industrial properties.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-collision">
              <span>Get Free Quote</span>
            </a>
            <a href="/services" className="btn-collision" style={{ color: '#fff', borderColor: '#fff' }}>
              <span>Our Services</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Stats with Parallax */}
      <div 
        className="absolute bottom-0 right-0 hidden lg:block bg-white/70 backdrop-blur-2xl p-12 max-w-md border-l border-t border-white/20"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      >
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-4xl font-bold text-[#1a2744] mb-2">30+</div>
            <div className="text-xs text-[#1a2744] uppercase tracking-widest font-bold">Years Experience</div>
          </div>
          <div>
            {/* City & Guilds Logo */}
            <div className="mb-2">
              <img 
                src="/city-guilds-logo.png" 
                alt="City & Guilds" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="text-xs text-[#1a2744] uppercase tracking-widest font-bold">Certified</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
