import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/#roof-calculator', label: 'Roof Age Calculator' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-full">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/asg-logo.png" 
            alt="A.S.G Roofing Limited" 
            className="h-12 w-auto object-contain"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.path.startsWith('/#') ? (
              <a
                key={link.path}
                href={link.path}
                className="font-medium font-headline tracking-tight transition-colors text-slate-600 hover:text-orange-600"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.path}
                to={link.path} 
                className={`font-medium font-headline tracking-tight transition-colors ${
                  isActive(link.path) 
                    ? 'text-orange-600' 
                    : 'text-slate-600 hover:text-orange-600'
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
        
        <Link 
          to="/contact"
          className="hidden md:block btn btn-primary btn-sm"
        >
          <span>Get Quote</span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-8 pb-4 border-t border-slate-100">
          <div className="grid grid-cols-2 gap-4 py-4">
            {navLinks.map((link) => (
              link.path.startsWith('/#') ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="py-3 font-headline font-medium text-slate-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`py-3 font-headline font-medium ${
                    isActive(link.path) 
                      ? 'text-orange-600' 
                      : 'text-slate-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
          <Link 
            to="/contact"
            className="block w-full btn btn-primary btn-full"
            onClick={() => setIsOpen(false)}
          >
            <span>Get Estimate</span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
