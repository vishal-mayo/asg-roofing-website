import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Pulse animation every 10 seconds
    const pulseInterval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 1000)
    }, 10000)

    return () => clearInterval(pulseInterval)
  }, [])

  if (!isVisible) return null

  return (
    <Link
      to="/contact"
      className={`fixed bottom-24 right-4 z-[100] btn btn-primary shadow-2xl ${
        isPulsing ? 'animate-pulse' : ''
      }`}
      style={{ position: 'fixed', bottom: '100px', right: '16px' }}
    >
      <span className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Get Free Quote
      </span>
    </Link>
  )
}

export default StickyQuoteButton
