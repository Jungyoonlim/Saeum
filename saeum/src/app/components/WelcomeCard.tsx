export default function WelcomeCard() {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        {/* Aspect Ratio Wrapper */}
        <div
          className="relative"
          style={{
            width: '1364px',
            height: '900px',
            transform: 'scale(var(--scale-factor, 0.8))',
            transformOrigin: 'center center'
          }}
        >
          {/* Stacked Cards */}
          <div className="absolute w-[321px] h-[416px] left-[521px] top-[242px] bg-[#222bb7]/75 shadow" />
          <div className="absolute w-[321px] h-[416px] left-[521px] top-[224px] bg-[#222bb7]/70 shadow" />
          <div className="absolute w-[321px] h-[416px] left-[521px] top-[204px] bg-[#222bb7]/75 shadow" />
          <div className="absolute w-[321px] h-[416px] left-[521px] top-[185px] bg-[#222bb7] shadow" />
  
          {/* Logo Area */}
          <div className="absolute w-[90px] h-[81px] left-[17px] top-[32px] bg-gray-300" />
  
          {/* Profile Circle */}
          <div className="absolute w-[53px] h-[53px] left-[1278px] top-[32px] bg-[#d9d9d9] rounded-full" />
  
          {/* Rotated Card */}
          <div className="absolute w-[441.04px] h-[505.27px] left-[440px] top-[153px]">
            <div className="absolute w-[321px] h-[416px] left-[4px] top-[110.32px] origin-top-left rotate-[-21.82deg] bg-[#333dd7] shadow" />
            <div className="absolute w-[221px] left-[157px] top-[421.36px] origin-top-left rotate-[-23.28deg] text-white text-xl font-normal font-['Instrument Sans']">
              Welcome to<br />Saeum.
            </div>
          </div>
        </div>
      </div>
    )
  }
  
