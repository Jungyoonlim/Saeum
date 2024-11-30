/**
 * 
<div className="w-[1364px] h-[900px] relative bg-white">
<div className="w-[321px] h-[416px] left-[521px] top-[242px] absolute bg-[#222bb7]/75 shadow" />
<div className="w-[321px] h-[416px] left-[521px] top-[224px] absolute bg-[#222bb7]/70 shadow" />
<div className="w-[321px] h-[416px] left-[521px] top-[204px] absolute bg-[#222bb7]/75 shadow" />
<div className="w-[321px] h-[416px] left-[521px] top-[185px] absolute bg-[#222bb7] shadow" />
<div className="w-[90px] h-[81px] left-[17px] top-[32px] absolute" />
<div className="w-[53px] h-[53px] left-[1278px] top-[32px] absolute bg-[#d9d9d9] rounded-full" />
<div className="w-[441.04px] h-[505.27px] left-[440px] top-[153px] absolute">
<div className="w-[221px] left-[56px] top-[120.20px] absolute origin-top-left rotate-[-15deg] text-white text-xl font-normal font-['Instrument Sans']">Welcome to<br/>Saeum.</div>
</div>
</div> 
 * 
 * 
 * 
 * 
 */

const WelcomeCard = ({ secondLine = "Saeum." }) => {
    return (
        <div className="w-screen h-screen relative bg-white">
            {/* Stack of blue cards */}
            <div className="w-1/4 h-1/2 absolute top-60 left-1/3 bg-[#222bb7] shadow" />
            <div className="w-1/4 h-1/2 absolute top-52 left-1/3 bg-[#222bb7]/75 shadow" />
            <div className="w-1/4 h-1/2 absolute top-44 left-1/3 bg-[#222bb7]/70 shadow" />
            <div className="w-1/4 h-1/2 absolute top-36 left-1/3 bg-[#222bb7]/75 shadow" />
            
            
            {/* Simple text test */}
            <div className="
                    absolute 
                    w-[319px] 
                    h-[418px] 
                    left-1/2 
                    top-1/2 
                    -translate-x-1/2 
                    -translate-y-1/2
                    bg-[#343ED8]  {/* This seems to be the front card color from your screenshot */}
                    shadow-lg
                    rotate-[15deg]  {/* Adjust this angle to match */}
                    z-50
                ">
            <div className="w-[221px] origin-top-left rotate-[-15deg] text-white text-xl font-normal font-['Instrument Sans']">Welcome to<br/>Saeum.</div>
            </div>
        </div>
    )
}


export default WelcomeCard
