//@ts-ignore
import React from 'react'
import WelcomeCard from '../components/welcome/WelcomeCard'
import WelcomeText from '../components/welcome/WelcomeText'
import Logo from '../components/welcome/Logo'


const Welcome = () => {
    return (
        <div className="min-h-screen bg-white relative">
            <Logo />
            <div className="relative">
                <WelcomeCard />
                <WelcomeText />
            </div>
        </div>
    )
}

export default Welcome
