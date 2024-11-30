interface WelcomeCardProps {
    secondLine?: string; 
}

const WelcomeCard = ({ secondLine }: WelcomeCardProps) => {
    return (
        <div className="flex flex-col relative justify-start items-start">
            <div className="text-white text-xl transform -rotate-12">
                <div>Welcome to</div>
                <div>{secondLine}</div>
            </div>
        </div>
    )
}

export default WelcomeCard
