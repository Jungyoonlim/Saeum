export default function WelcomeCard() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#222bb7] p-4">
        {/* Main container with aspect ratio */}
        <div className="w-full max-w-6xl aspect-[3/2] relative">
          {/* Main white container */}
          <div className="absolute inset-8 bg-[#f4f1f1] rounded-lg shadow-lg">
            {/* Card stack container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Stacked cards */}
              <div className="relative w-[min(30vw,321px)] aspect-[321/416]">
                <div className="absolute inset-0 bg-[#222bb7]/75 shadow translate-y-14" />
                <div className="absolute inset-0 bg-[#222bb7]/70 shadow translate-y-10" />
                <div className="absolute inset-0 bg-[#222bb7]/75 shadow translate-y-6" />
                <div className="absolute inset-0 bg-[#222bb7] shadow" />
              </div>
              
              {/* Rotated card with text */}
              <div 
                className="absolute top-0 -left-12 w-[min(30vw,321px)] aspect-[321/416]"
                style={{ transform: 'rotate(-21.82deg)' }}
              >
                <div className="absolute inset-0 bg-[#333dd7] shadow" />
                <div 
                  className="absolute bottom-8 right-8 text-white text-xl font-normal"
                  style={{ transform: 'rotate(-23.28deg)' }}
                  aria-label="Welcome message"
                >
                  Welcome to<br/>Saeum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
  
