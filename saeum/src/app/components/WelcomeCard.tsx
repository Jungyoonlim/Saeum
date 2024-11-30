export default function WelcomeCard() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#222bb7] overflow-hidden">
      {/* Main container - keeping aspect ratio of 1364:900 (approximately 3:2) */}
      <div className="w-[95%] h-[95%] relative bg-[#222bb7] aspect-[1364/900]">
        {/* Logo placeholder - approximately 6.6% width and 9% height of parent */}
        <div className="w-[6.6%] h-[9%] left-[1.25%] top-[3.5%] absolute" />
        
        {/* Main white container - approximately 95% width and 92.5% height of parent */}
        <div className="w-[95%] h-[92.5%] left-[2.5%] top-[3.5%] absolute bg-[#f4f1f1] rounded-lg">
          {/* Card stack container */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {/* Stacked cards - maintaining aspect ratio of 321:416 */}
            <div className="relative w-[23.5%] aspect-[321/416]">
              <div className="absolute inset-0 bg-[#222bb7]/75 shadow translate-y-[14%]" />
              <div className="absolute inset-0 bg-[#222bb7]/70 shadow translate-y-[10%]" />
              <div className="absolute inset-0 bg-[#222bb7]/75 shadow translate-y-[6%]" />
              <div className="absolute inset-0 bg-[#222bb7] shadow" />
            </div>

            {/* Rotated card with text */}
            <div
              className="absolute w-[23.5%] aspect-[321/416]"
              style={{ transform: 'rotate(-21.82deg)' }}
            >
              <div className="absolute inset-0 bg-[#333dd7] shadow" />
              <div
                className="absolute bottom-[8%] right-[8%] text-white text-xl font-normal font-['Instrument Sans']"
                style={{ transform: 'rotate(-23.28deg)' }}
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
