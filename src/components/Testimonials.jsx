import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "ASG Roofing did an excellent job on our flat roof. Professional, efficient and cleaned up afterwards. Highly recommend!",
    author: "John Smith",
    role: "Homeowner, Epping"
  },
  {
    quote: "We've used ASG for multiple commercial properties. Their Mastic Asphalt work is top quality and they always deliver on time.",
    author: "Sarah Jenkins",
    role: "Property Manager, London"
  },
  {
    quote: "Great service from start to finish. The team was professional, the quote was fair, and the lead roofing work is outstanding.",
    author: "Robert Chen",
    role: "Homeowner, Theydon Bois"
  }
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter mb-4 font-headline">Customer Reviews</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">What our customers say about our roofing services.</p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-white p-10 border-l-4 shadow-sm ${
              index === 0 ? 'border-secondary' : index === 1 ? 'border-primary' : 'border-secondary'
            }`}>
              <div className="flex gap-1 mb-6 text-secondary-container">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-on-surface italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-bold text-sm">{testimonial.author}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-white p-8 border-l-4 shadow-sm ${
                    index === 0 ? 'border-secondary' : index === 1 ? 'border-primary' : 'border-secondary'
                  }`}>
                    <div className="flex gap-1 mb-6 text-secondary-container">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                    <p className="text-on-surface italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-secondary font-bold text-lg">{testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm">{testimonial.author}</div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-secondary' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
