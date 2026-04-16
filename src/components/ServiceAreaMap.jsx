function ServiceAreaMap() {
  const areas = [
    { name: 'Epping', x: 50, y: 40 },
    { name: 'Theydon Bois', x: 52, y: 42, main: true },
    { name: 'London', x: 45, y: 55 },
    { name: 'Chelmsford', x: 65, y: 50 },
    { name: 'Harlow', x: 35, y: 35 },
    { name: 'Brentwood', x: 40, y: 45 },
    { name: 'Enfield', x: 42, y: 48 },
    { name: 'Romford', x: 48, y: 52 },
  ]

  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-4">
            Areas We Cover
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Providing expert roofing services across London and surrounding areas. Based in Theydon Bois, Epping.
          </p>
        </div>

        <div className="relative bg-surface-container-low rounded-2xl p-8 overflow-hidden">
          {/* Map Background */}
          <svg 
            viewBox="0 0 100 80" 
            className="w-full h-auto"
            style={{ maxHeight: '500px' }}
          >
            {/* Background grid */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="80" fill="url(#grid)" />

            {/* Coverage area circle */}
            <circle 
              cx="50" 
              cy="45" 
              r="25" 
              fill="#f97316" 
              fillOpacity="0.1"
              stroke="#f97316"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />

            {/* Secondary coverage */}
            <circle 
              cx="50" 
              cy="45" 
              r="35" 
              fill="none"
              stroke="#f97316"
              strokeWidth="0.3"
              strokeDasharray="1 3"
            />

            {/* Connection lines from HQ */}
            {areas.filter(a => !a.main).map((area) => (
              <line
                key={area.name}
                x1="52"
                y1="42"
                x2={area.x}
                y2={area.y}
                stroke="#f97316"
                strokeWidth="0.3"
                strokeOpacity="0.4"
              />
            ))}

            {/* Area markers */}
            {areas.map((area) => (
              <g key={area.name}>
                {/* Pulse animation for main location */}
                {area.main && (
                  <>
                    <circle
                      cx={area.x}
                      cy={area.y}
                      r="4"
                      fill="#f97316"
                      fillOpacity="0.3"
                    >
                      <animate
                        attributeName="r"
                        from="3"
                        to="6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="fill-opacity"
                        from="0.5"
                        to="0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </>
                )}
                
                {/* Marker dot */}
                <circle
                  cx={area.x}
                  cy={area.y}
                  r={area.main ? "3" : "2"}
                  fill={area.main ? "#dc2626" : "#f97316"}
                />

                {/* Label background */}
                <rect
                  x={area.x - 8}
                  y={area.y + (area.main ? 4 : 3)}
                  width="16"
                  height="5"
                  rx="1"
                  fill="white"
                  fillOpacity="0.9"
                />

                {/* Label */}
                <text
                  x={area.x}
                  y={area.y + (area.main ? 7.5 : 6.5)}
                  textAnchor="middle"
                  fontSize="3"
                  fontWeight={area.main ? "700" : "500"}
                  fill="#1e293b"
                >
                  {area.name}
                </text>
              </g>
            ))}

            {/* Legend */}
            <g transform="translate(5, 70)">
              <circle cx="2" cy="2" r="2" fill="#dc2626" />
              <text x="6" y="3.5" fontSize="3" fill="#475569">HQ - Theydon Bois</text>
              
              <circle cx="2" cy="8" r="1.5" fill="#f97316" />
              <text x="6" y="9.5" fontSize="3" fill="#475569">Service Area</text>
            </g>
          </svg>

          {/* Stats overlay */}
          <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg">
            <div className="text-3xl font-headline font-black text-secondary">30+</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">Years Serving</div>
            <div className="text-sm font-bold text-slate-700 mt-1">London & Essex</div>
          </div>
        </div>

        {/* Area list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {areas.map((area) => (
            <div 
              key={area.name}
              className={`p-4 rounded-lg text-center transition-all hover:scale-105 ${
                area.main 
                  ? 'bg-secondary text-white' 
                  : 'bg-surface-container-high text-slate-700 hover:bg-secondary-container hover:text-white'
              }`}
            >
              <span className="font-bold">{area.name}</span>
              {area.main && <span className="block text-xs mt-1 opacity-80">(HQ)</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAreaMap
