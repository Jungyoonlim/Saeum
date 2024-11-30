const WelcomeCard = () => {
  return (
    <div className="w-full h-full relative bg-white">
      {/* Main centered card stack */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Base card with tilt */}
        <div className="relative">
          <div 
            className="w-1/3 h-1/2 bg-[#222bb7] shadow-lg transform -rotate-[22deg] absolute"
            style={{
              transformOrigin: 'top left',
            }}
          >
            <div className="absolute bottom-8 left-8 text-white font-normal text-xl transform rotate-[22deg] z-1">
              Welcome to<br/>Saeum.
            </div>
          </div>
        </div>
        
        {/* Stack of background cards */}
        <div className="w-[321px] h-[416px] bg-[#222bb7] absolute shadow-md" />
        <div className="w-[321px] h-[416px] bg-[#222bb7]/75 absolute top-5 shadow-md" />
        <div className="w-[321px] h-[416px] bg-[#222bb7]/70 absolute top-10 shadow-md" />
        <div className="w-[321px] h-[416px] bg-[#222bb7]/75 absolute top-14 shadow-md" />
      </div>

      {/* Top bar elements */}
      <div className="absolute top-8 left-4 w-[90px] h-[81px]" />
      <div className="absolute top-8 right-4 w-[53px] h-[53px] bg-[#d9d9d9] rounded-full" />
    </div>
  )
}

export default WelcomeCard