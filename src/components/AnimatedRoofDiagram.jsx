import { useEffect, useRef, useState } from 'react'

function AnimatedRoofDiagram() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedLayer, setSelectedLayer] = useState(null)
  const diagramRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (diagramRef.current) {
      observer.observe(diagramRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const layers = [
    { 
      name: 'Tiles / Slates', 
      color: '#1e293b', 
      delay: '0ms',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M3 21h18M5 21V10l7-7 7 7v11" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 13h6M12 13v8" strokeLinecap="round"/>
        </svg>
      ),
      description: 'The outer protective layer that shields your home from rain, wind, and sun. Available in clay, concrete, slate, or asphalt shingles.',
      benefits: ['Weather protection', 'Aesthetic appeal', '20-100 year lifespan'],
      maintenance: 'Inspect annually for cracked or missing tiles'
    },
    { 
      name: 'Underfelt', 
      color: '#475569', 
      delay: '200ms',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="3" y="6" width="18" height="12" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10h18" strokeLinecap="round"/>
          <path d="M7 14h2M13 14h4" strokeLinecap="round"/>
          <path d="M6 6V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2" strokeLinecap="round"/>
        </svg>
      ),
      description: 'A waterproof membrane that provides a secondary barrier against moisture and wind-driven rain.',
      benefits: ['Waterproofing', 'Wind protection', 'Condensation control'],
      maintenance: 'Replaced during re-roofing'
    },
    { 
      name: 'Battens', 
      color: '#64748b', 
      delay: '400ms',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M4 8h16M4 12h16M4 16h16" strokeLinecap="round"/>
          <path d="M6 8v8M10 8v8M14 8v8M18 8v8" strokeLinecap="round"/>
          <rect x="2" y="6" width="20" height="12" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Wooden strips that provide a fixing point for tiles and slates, creating an air gap for ventilation.',
      benefits: ['Secure tile fixing', 'Air circulation', 'Structural support'],
      maintenance: 'Check for rot during inspections'
    },
    { 
      name: 'Insulation', 
      color: '#f97316', 
      delay: '600ms',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" strokeLinecap="round"/>
          <path d="M3 12h3M18 12h3" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Thermal insulation that keeps your home warm in winter and cool in summer, reducing energy bills.',
      benefits: ['Energy efficiency', 'Temperature control', 'Cost savings'],
      maintenance: 'Check for compression or gaps'
    },
    { 
      name: 'Roof Structure', 
      color: '#94a3b8', 
      delay: '800ms',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M3 21h18M4 21V10l8-6 8 6v11" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 10h20" strokeLinecap="round"/>
          <path d="M12 4v6" strokeLinecap="round"/>
        </svg>
      ),
      description: 'The timber framework (rafters, trusses, joists) that supports the entire roof system.',
      benefits: ['Structural integrity', 'Load bearing', 'Long-term stability'],
      maintenance: 'Professional inspection every 10 years'
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-headline font-black tracking-tighter mb-2">How Your Roof is Built</h3>
        <p className="text-on-surface-variant text-sm">Click each layer to learn more</p>
      </div>

      <div ref={diagramRef} className="flex-1 flex flex-col">
        <div className="relative flex-1">
          {/* Roof cross-section SVG */}
          <svg 
            viewBox="0 0 720 400" 
            className="w-full h-auto"
            style={{ maxHeight: '350px' }}
          >
            {/* Roof outline */}
            <defs>
              <clipPath id="roofClip">
                <polygon points="50,350 300,50 550,350" />
              </clipPath>
            </defs>

            {/* Animated layers */}
            {layers.map((layer, index) => {
              const yOffset = 50 + index * 60
              const isSelected = selectedLayer === index
              return (
                <g 
                  key={layer.name}
                  className={`transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} ${isSelected ? 'brightness-110' : 'hover:brightness-110'}`}
                  style={{ transitionDelay: layer.delay }}
                  onClick={() => setSelectedLayer(selectedLayer === index ? null : index)}
                >
                  {/* Layer block */}
                  <rect
                    x={100 + index * 20}
                    y={yOffset}
                    width={400 - index * 40}
                    height={50}
                    fill={layer.color}
                    rx="4"
                    clipPath="url(#roofClip)"
                    className={`transition-all duration-300 ${isSelected ? 'stroke-white stroke-4' : ''}`}
                  />
                  
                  {/* Selection indicator */}
                  {isSelected && (
                    <rect
                      x={95 + index * 20}
                      y={yOffset - 5}
                      width={410 - index * 40}
                      height={60}
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3"
                      rx="6"
                      clipPath="url(#roofClip)"
                    />
                  )}
                  
                  {/* Label line */}
                  <line
                    x1={520 - index * 20}
                    y1={yOffset + 25}
                    x2={560}
                    y2={yOffset + 25}
                    stroke={isSelected ? '#f97316' : layer.color}
                    strokeWidth={isSelected ? "3" : "2"}
                    strokeDasharray="4 4"
                  />
                  
                  {/* Label dot */}
                  <circle
                    cx={520 - index * 20}
                    cy={yOffset + 25}
                    r={isSelected ? "8" : "6"}
                    fill={isSelected ? '#f97316' : layer.color}
                  />
                  
                  {/* Label text */}
                  <text
                    x={570}
                    y={yOffset + 30}
                    fill={isSelected ? '#f97316' : '#1e293b'}
                    fontSize="13"
                    fontWeight={isSelected ? "700" : "600"}
                    fontFamily="Work Sans, sans-serif"
                  >
                    {layer.name}
                  </text>
                </g>
              )
            })}

            {/* Roof outline stroke */}
            <polygon 
              points="50,350 300,50 550,350" 
              fill="none" 
              stroke="#1e293b" 
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Layer details - clickable cards with icons */}
        <div className="grid grid-cols-5 gap-2 mt-4">
          {layers.map((layer, index) => (
            <button
              key={layer.name}
              onClick={() => setSelectedLayer(selectedLayer === index ? null : index)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl shadow-sm transition-all duration-300 min-h-[90px] ${
                selectedLayer === index 
                  ? 'bg-secondary text-white scale-105 shadow-lg' 
                  : 'bg-white hover:bg-surface-container-high hover:shadow-md'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${parseInt(layer.delay) + 400}ms` }}
            >
              <div className={`flex items-center justify-center mb-2 ${selectedLayer === index ? 'text-white' : ''}`} style={{ color: selectedLayer === index ? 'white' : layer.color }}>
                {layer.icon}
              </div>
              <p className={`text-[9px] font-bold uppercase tracking-wider leading-tight text-center ${selectedLayer === index ? 'text-white' : 'text-slate-700'}`}>
                {layer.name}
              </p>
            </button>
          ))}
        </div>

        {/* Selected layer info panel */}
        {selectedLayer !== null && (
          <div className="mt-4 p-4 bg-white rounded-xl shadow-lg border-l-4 border-secondary animate-fade-in">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-lg font-headline font-black text-primary">
                {layers[selectedLayer].name}
              </h4>
              <button 
                onClick={() => setSelectedLayer(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <p className="text-on-surface-variant text-sm mb-3">
              {layers[selectedLayer].description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">Benefits</h5>
                <ul className="text-xs text-slate-600 space-y-1">
                  {layers[selectedLayer].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">Maintenance</h5>
                <p className="text-xs text-slate-600">{layers[selectedLayer].maintenance}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AnimatedRoofDiagram
