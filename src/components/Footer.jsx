import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-950 w-full pt-16 pb-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <img 
            src="/asg-logo.png" 
            alt="A.S.G Roofing Limited" 
            className="h-16 w-auto object-contain mb-6"
          />
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Well-established, family-run roofing company covering London and surrounding areas. 30+ years experience in all aspects of roofing.
          </p>
          <div className="flex gap-4">
            <a href="tel:01992812252" className="w-10 h-10 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="mailto:asgroofingltd@yahoo.com" className="w-10 h-10 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://www.instagram.com/asgroofingltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all cursor-pointer" title="Facebook - Coming Soon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:block">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4 md:mb-8">Navigation</h4>
            <ul className="space-y-2 md:space-y-4 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><a href="/#roof-calculator" className="text-slate-400 hover:text-white transition-colors">Roof Age Calculator</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4 md:mb-8">Company</h4>
            <ul className="space-y-2 md:space-y-4 text-sm">
              <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Contact Details</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            74 Forest Drive<br/>
            Theydon Bois<br/>
            Epping CM16 7EZ
          </p>
          <p className="text-slate-400 text-sm mb-2">Phone: <a href="tel:01992812252" className="text-orange-400 font-bold hover:text-orange-300 transition-colors">01992 812252</a></p>
          <p className="text-slate-400 text-sm">Mobile: <a href="tel:07956293612" className="text-orange-400 font-bold hover:text-orange-300 transition-colors">07956 293612</a></p>
          <p className="text-slate-400 text-sm mt-2">Email: <a href="mailto:asgroofingltd@yahoo.com" className="text-orange-400 font-bold hover:text-orange-300 transition-colors">asgroofingltd@yahoo.com</a></p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-slate-500 text-xs">© 2024 ASG Roofing Ltd. Built by AnyOS.</span>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <span>City & Guilds Certified</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
