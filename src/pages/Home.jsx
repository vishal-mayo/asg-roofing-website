import Hero from '../components/Hero'
import Services from '../components/Services'
import Engineering from '../components/Engineering'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import AnimatedRoofDiagram from '../components/AnimatedRoofDiagram'
import RoofAgeCalculator from '../components/RoofAgeCalculator'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Engineering />
      
      {/* Interactive Tools Section - Side by Side */}
      <section id="roof-calculator" className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-4">
              Roof Education & Tools
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Learn about your roof structure and calculate its remaining lifespan
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Roof Diagram - Left Side */}
            <div className="bg-surface-container-low rounded-2xl p-6 lg:p-8 min-h-[500px]">
              <AnimatedRoofDiagram />
            </div>
            
            {/* Roof Age Calculator - Right Side */}
            <div className="bg-primary rounded-2xl p-6 lg:p-8 text-white min-h-[500px] flex items-center w-full">
              <div className="w-full">
                <RoofAgeCalculator compact />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CTASection />
    </>
  )
}

export default Home