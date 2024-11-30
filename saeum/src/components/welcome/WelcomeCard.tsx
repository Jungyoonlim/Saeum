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
        // Use exact size from design
        <div className="w-screen h-screen relative bg-white">
            {/* Stacked blue cards - positioned exactly as in design */}
            <div className="w-[321px] h-[416px] left-[521px] top-[242px] absolute bg-[#222bb7]/75 shadow" />
            <div className="w-[321px] h-[416px] left-[521px] top-[224px] absolute bg-[#222bb7]/70 shadow" />
            <div className="w-[321px] h-[416px] left-[521px] top-[204px] absolute bg-[#222bb7]/75 shadow" />
            <div className="w-[321px] h-[416px] left-[521px] top-[185px] absolute bg-[#222bb7] shadow" />
            
            {/* Logo placeholder */}
            <div className="w-[90px] h-[81px] left-[17px] top-[32px] absolute" />
            
            {/* Profile circle */}
            <div className="w-[53px] h-[53px] left-[1278px] top-[32px] absolute bg-[#d9d9d9] rounded-full" />
            
            {/* Welcome text container */}
            <div className="w-[441.04px] h-[505.27px] left-[440px] top-[153px] absolute">
                <div className="w-[221px] left-[56px] top-[120.20px] absolute origin-top-left rotate-[-15deg] text-white text-xl font-normal font-['Instrument Sans']">
                    Welcome to<br/>{secondLine}
                </div>
            </div>
        </div>
    )
}


export default WelcomeCard

