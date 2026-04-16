import { useState } from 'react'

function RoofAgeCalculator({ compact = false }) {
  const [roofAge, setRoofAge] = useState('')
  const [material, setMaterial] = useState('asphalt')
  const [result, setResult] = useState(null)

  const materials = {
    asphalt: { name: 'Asphalt Shingles', lifespan: 20 },
    slate: { name: 'Natural Slate', lifespan: 100 },
    tile: { name: 'Clay/Concrete Tiles', lifespan: 50 },
    metal: { name: 'Metal Roofing', lifespan: 50 },
    felt: { name: 'Felt Roofing', lifespan: 20 },
    lead: { name: 'Lead Roofing', lifespan: 100 },
  }

  const calculateLifespan = () => {
    const age = parseInt(roofAge)
    if (!age || age < 0) return

    const maxLifespan = materials[material].lifespan
    const remaining = Math.max(0, maxLifespan - age)
    const percentage = Math.round((age / maxLifespan) * 100)
    
    let status = 'good'
    let message = 'Your roof is in good condition'
    
    if (percentage > 80) {
      status = 'critical'
      message = 'Your roof needs immediate attention'
    } else if (percentage > 60) {
      status = 'warning'
      message = 'Consider planning for replacement soon'
    }

    setResult({ remaining, percentage, status, message, maxLifespan })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100'
      case 'warning': return 'text-orange-600 bg-orange-100'
      case 'critical': return 'text-red-600 bg-red-100'
      default: return 'text-slate-600 bg-slate-100'
    }
  }

  // Compact version for side-by-side layout
  if (compact) {
    return (
      <div className="h-full flex flex-col justify-center">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-headline font-black tracking-tighter mb-3">Roof Age Calculator</h3>
          <p className="text-on-primary-container text-base opacity-80">Find out how much life your roof has left</p>
        </div>

        <div className="w-full">
          {!result ? (
            <div className="space-y-6">
              {/* Fields Row - Material & Age side by side */}
              <div className="grid grid-cols-2 gap-4">
                {/* Material Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-primary-container opacity-90 text-center">
                    Roof Material
                  </label>
                  <div className="relative">
                    <select 
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-3 py-4 text-white text-sm focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer text-center"
                    >
                      {Object.entries(materials).map(([key, { name }]) => (
                        <option key={key} value={key} className="text-slate-900">{name}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                {/* Age Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-primary-container opacity-90 text-center">
                    Current Age (Years)
                  </label>
                  <input 
                    type="number"
                    value={roofAge}
                    onChange={(e) => setRoofAge(e.target.value)}
                    placeholder="e.g. 15"
                    className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-3 py-4 text-white text-sm placeholder-white/40 focus:outline-none focus:border-secondary transition-colors text-center"
                  />
                </div>
              </div>

              {/* Calculate Button - Full width below */}
              <button 
                onClick={calculateLifespan}
                className="w-full bg-secondary hover:bg-secondary-container text-on-secondary font-black uppercase tracking-widest py-4 rounded-xl transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Calculate
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              {/* Back Button */}
              <button 
                onClick={() => setResult(null)}
                className="mb-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Calculate Again
              </button>

              {/* Results Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {/* Remaining Years */}
                <div className="text-center p-5 bg-white/10 rounded-2xl border border-white/10">
                  <div className="text-3xl font-headline font-black text-secondary-container mb-1">
                    {result.remaining}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-on-primary-container opacity-80">
                    Years Left
                  </div>
                </div>

                {/* Lifespan Used */}
                <div className="text-center p-5 bg-white/10 rounded-2xl border border-white/10">
                  <div className="text-3xl font-headline font-black text-secondary-container mb-1">
                    {result.percentage}%
                  </div>
                  <div className="text-xs uppercase tracking-wider text-on-primary-container opacity-80">
                    Used
                  </div>
                </div>

                {/* Expected Lifespan */}
                <div className="text-center p-5 bg-white/10 rounded-2xl border border-white/10">
                  <div className="text-3xl font-headline font-black text-secondary-container mb-1">
                    {result.maxLifespan}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-on-primary-container opacity-80">
                    Total
                  </div>
                </div>
              </div>

              {/* Status Message */}
              <div className={`p-5 rounded-2xl text-center ${getStatusColor(result.status)}`}>
                <p className="text-base font-bold mb-3">{result.message}</p>
                {result.status !== 'good' && (
                  <a 
                    href="/contact" 
                    className="btn-collision"
                    style={{ width: '180px', height: '44px', lineHeight: '44px', fontSize: '11px' }}
                  >
                    <span>Book Free Inspection</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Full version
  return (
    <section className="py-24 px-8 bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-4">
            Roof Age Calculator
          </h2>
          <p className="text-on-primary-container text-lg max-w-2xl mx-auto">
            Find out how much life your roof has left and when you should plan for maintenance or replacement.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Material Selection */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-on-primary-container">
                Roof Material
              </label>
              <select 
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary"
              >
                {Object.entries(materials).map(([key, { name }]) => (
                  <option key={key} value={key} className="text-slate-900">{name}</option>
                ))}
              </select>
            </div>

            {/* Age Input */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-3 text-on-primary-container">
                Current Age (Years)
              </label>
              <input 
                type="number"
                value={roofAge}
                onChange={(e) => setRoofAge(e.target.value)}
                placeholder="e.g. 15"
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-secondary"
              />
            </div>

            {/* Calculate Button */}
            <div className="flex items-end">
              <button 
                onClick={calculateLifespan}
                className="w-full bg-secondary hover:bg-secondary-container text-on-secondary font-bold uppercase tracking-wider py-3 rounded-lg transition-colors"
              >
                Calculate
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="border-t border-white/20 pt-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Remaining Years */}
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <div className="text-5xl font-headline font-black text-secondary-container mb-2">
                    {result.remaining}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-on-primary-container">
                    Years Remaining
                  </div>
                </div>

                {/* Lifespan Used */}
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <div className="text-5xl font-headline font-black text-secondary-container mb-2">
                    {result.percentage}%
                  </div>
                  <div className="text-sm uppercase tracking-wider text-on-primary-container">
                    Lifespan Used
                  </div>
                </div>

                {/* Expected Lifespan */}
                <div className="text-center p-6 bg-white/5 rounded-xl">
                  <div className="text-5xl font-headline font-black text-secondary-container mb-2">
                    {result.maxLifespan}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-on-primary-container">
                    Total Lifespan
                  </div>
                </div>
              </div>

              {/* Status Message */}
              <div className={`p-6 rounded-xl text-center ${getStatusColor(result.status)}`}>
                <p className="text-lg font-bold">{result.message}</p>
                {result.status !== 'good' && (
                  <a 
                    href="/contact" 
                    className="inline-block mt-4 bg-primary text-white px-6 py-2 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
                  >
                    Book Free Inspection
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RoofAgeCalculator
