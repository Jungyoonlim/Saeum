export default function WelcomeCard() {
    return (
      <div className="h-screen w-screen bg-white flex items-center justify-center overflow-hidden">
        <div className="relative">
            {/* Card Stack */}
            <div className="relative w-[300px] h-[400px]">
            {/* Back Cards */}
            <div className="absolute bg-[#222bb7]/75 shadow w-full h-full top-[60px]" />
            <div className="absolute bg-[#222bb7]/70 shadow w-full h-full top-[40px]" />
            <div className="absolute bg-[#222bb7]/75 shadow w-full h-full top-[20px]" />
            <div className="absolute bg-[#222bb7] shadow w-full h-full" />
            
            {/* Rotated Front Card */}
            <div className="absolute bg-[#333dd7] shadow w-full h-full transform rotate-[-10deg] flex items-center justify-center">
                <p className="text-white text-lg font-['Instrument Sans'] text-center">
                Welcome to<br />Saeum.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
  }
  