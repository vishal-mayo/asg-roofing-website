function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              About ASG Roofing
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              With over 20 years of experience in the roofing industry, ASG Roofing Ltd has built 
              a reputation for quality workmanship and exceptional customer service.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              We serve residential and commercial clients across the UK, providing everything from 
              minor repairs to complete roof installations.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Fully insured and licensed
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                20+ years experience
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Free quotes and consultations
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Guaranteed workmanship
              </li>
            </ul>
          </div>
          <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
            <span className="text-slate-400 text-lg">Company Image</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About