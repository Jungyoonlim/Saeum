export default function WelcomeCard() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#222bb7] overflow-hidden">
      {/* Main container */}
      <div className="relative w-full h-full p-14 m-10">
        {/* Main white container */}
        <div className="relative w-full h-full bg-[#f4f1f1] rounded-lg shadow-lg overflow-hidden">
          {/* Card stack container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Stacked cards */}
            <div className="relative w-[90%] max-w-sm aspect-[321/416]">
              <div className="absolute inset-0 bg-[#222bb7]/75 shadow translate-y-14" />
              <div className="absolute inset-0 bg-[#222bb7]/70 shadow translate-y-10" />
              <div className="absolute inset-0 bg-[#222bb7]/75 shadow translate-y-6" />
              <div className="absolute inset-0 bg-[#222bb7] shadow" />
            </div>

            {/* Rotated card with text */}
            <div
              className="absolute w-[90%] max-w-sm aspect-[321/416]"
              style={{ transform: 'rotate(-21.82deg)' }}
            >
              <div className="absolute inset-0 bg-[#333dd7] shadow" />
              <div
                className="absolute bottom-8 right-8 text-white text-xl font-normal"
                style={{ transform: 'rotate(-23.28deg)' }}
                aria-label="Welcome message"
              >
                Welcome to<br />Saeum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
