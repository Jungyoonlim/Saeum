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
        <div className="w-[321px] h-[416px] left-[4px] top-[110.32px] absolute origin-top-left rotate-[-21.82deg] bg-[#333dd7] shadow" />
        <div className="w-[221px] left-[157px] top-[421.36px] absolute origin-top-left rotate-[-23.28deg] text-white text-xl font-normal font-['Instrument Sans']">Welcome to<br/>Saeum.</div>
    </div>
</div>
 * 
 * 
 * 
 */




const WelcomeCard = () => {
    return (
        <div className="w-screen h-screen relative bg-white">
        {/* Stack of blue cards - proportional measurements */}
        <div className="w-1/4 h-[45%] absolute left-[38%] top-[27%] bg-[#222bb7]/75 shadow" />
        <div className="w-1/4 h-[45%] absolute left-[38%] top-[25%] bg-[#222bb7]/70 shadow" />
        <div className="w-1/4 h-[45%] absolute left-[38%] top-[23%] bg-[#222bb7]/75 shadow" />
        <div className="w-1/4 h-[45%] absolute left-[38%] top-[21%] bg-[#222bb7] shadow" />

        {/* Logo and profile - proportional */}
        <div className="w-[7%] h-[9%] left-[1%] top-[4%] absolute" />
        <div className="w-[4%] h-[6%] right-[4%] top-[4%] absolute bg-[#d9d9d9] rounded-full" />

        {/* Text container - proportional */}
        <div className="w-1/3 h-[56%] left-[32%] top-[17%] absolute">
        <div className="w-[321px] h-[416px] left-[4px] top-[110.32px] absolute origin-top-left rotate-[-21.82deg] bg-[#333dd7] shadow" />
        <div className="w-[221px] left-[157px] top-[421.36px] absolute origin-top-left rotate-[-23.28deg] text-white text-xl font-normal font-['Instrument Sans']">
            Welcome to<br/>Saeum.
        </div>
        </div>
    </div>
    )
}

export default WelcomeCard
