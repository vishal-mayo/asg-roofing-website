function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center">
      {/* Roof-shaped loader */}
      <div className="relative mb-8">
        {/* Roof outline */}
        <svg 
          width="120" 
          height="80" 
          viewBox="0 0 120 80" 
          className="animate-pulse"
        >
          {/* Roof triangle */}
          <path 
            d="M10 70 L60 10 L110 70" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4"
            className="text-secondary"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Chimney */}
          <rect 
            x="75" 
            y="30" 
            width="12" 
            height="25" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3"
            className="text-secondary-container"
          />
          {/* Animated loading bar under roof */}
          <rect 
            x="20" 
            y="75" 
            width="80" 
            height="4" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-surface-container-high"
          />
          <rect 
            x="20" 
            y="75" 
            width="80" 
            height="4" 
            fill="currentColor"
            className="text-secondary"
          >
            <animate 
              attributeName="width" 
              from="0" 
              to="80" 
              dur="1.5s" 
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
      
      <h2 className="text-2xl font-headline font-black text-white uppercase tracking-wider mb-2">
        A.S.G Roofing
      </h2>
      <p className="text-on-primary-container text-sm uppercase tracking-widest">
        Loading Excellence...
      </p>
    </div>
  )
}

export default LoadingScreen
