'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cards = [
    { 
      id: 1, 
      content: "Welcome to\nSaeum.", 
      subtext: "Your personal study companion",
      rotation: -21.82,
      textRotation: -23.28,
      color: '#333dd7'
    },
    { 
      id: 2, 
      content: "Create your first deck", 
      subtext: "Start your learning journey",
      rotation: -18,
      textRotation: -20,
      color: '#222bb7'
    },
    { 
      id: 3, 
      content: "Track your progress", 
      subtext: "Watch yourself improve",
      rotation: -15,
      textRotation: -17,
      color: '#222bb7'
    }
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#222bb7] overflow-hidden">
      <motion.div 
        className="w-[95%] h-[95%] relative bg-[#222bb7] aspect-[1364/900]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="w-[95%] h-[92.5%] left-[2.5%] top-[3.5%] absolute bg-[#f4f1f1] rounded-lg"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute w-full h-full flex items-center justify-center">
            {/* Background stack effect */}
            <motion.div 
              className="relative w-[23.5%] aspect-[321/416]"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {[75, 70, 75].map((opacity, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 shadow"
                  style={{
                    backgroundColor: `rgba(34, 43, 183, ${opacity / 100})`,
                    transform: `translateY(${14 - (index * 4)}%)`,
                  }}
                />
              ))}
            </motion.div>

            {/* Interactive cards */}
            <AnimatePresence>
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className="absolute w-[23.5%] aspect-[321/416] cursor-pointer"
                  initial={{ 
                    rotate: card.rotation - 5,
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    rotate: activeIndex === index ? card.rotation : card.rotation + ((index - activeIndex) * 3),
                    y: activeIndex === index ? 0 : (index - activeIndex) * 10,
                    scale: activeIndex === index ? 1 : 0.95,
                    opacity: 1,
                    zIndex: cards.length - index
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="absolute inset-0 bg-[#333dd7] shadow" 
                       style={{ backgroundColor: card.color }} />
                  <motion.div
                    className="absolute bottom-[8%] right-[8%] text-white font-normal font-['Instrument Sans'] text-[1.5vw]"
                    style={{ transform: `rotate(${card.textRotation}deg)` }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  >
                    {card.content.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                    <div className="text-[1vw] mt-2 opacity-75">
                      {card.subtext}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}