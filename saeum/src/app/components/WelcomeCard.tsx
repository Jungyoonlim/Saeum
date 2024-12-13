'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shuffle } from 'lucide-react';

interface CardPosition {
  x: number;
  y: number;
  rotate: number;
  zIndex: number;
  scale: number;
  shadowOpacity: number;
}

interface CardStyle {
  background: string;
  textureLayers: string[];
  border: string;
  edgeHighlight: string;
}

const createPaperTexture = (index: number) => {
  // Define base characteristics for different types of premium paper effects
  const paperTypes = {
    premium: {
      // Cotton paper effect - subtle texture with a soft, natural feel
      grain: `repeating-linear-gradient(
        ${45 + (index % 2) * 90}deg,
        rgba(248, 249, 252, 0.3) 0px,
        rgba(252, 253, 255, 0.3) 1px,
        rgba(248, 249, 252, 0.2) 2px
      )`,

      // Soft light interaction similar to cotton fiber paper
      highlight: `radial-gradient(
        circle at ${50 + Math.sin(index) * 20}% ${50 + Math.cos(index) * 20}%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.2) 45%,
        transparent 65%
      )`,

      // Subtle surface variations like handmade paper
      surface: `linear-gradient(
        ${index * 30}deg,
        rgba(244, 245, 250, 0.05) 0%,
        rgba(250, 251, 255, 0.1) 20%,
        rgba(244, 245, 250, 0.05) 40%,
        rgba(250, 251, 255, 0.1) 60%,
        rgba(244, 245, 250, 0.05) 80%,
        rgba(250, 251, 255, 0.1) 100%
      )`,
    },

    matte: {
      // More uniform, smooth texture like museum-quality paper
      grain: `repeating-radial-gradient(
        circle at ${50 + (index % 3) * 25}% ${50 + (index % 2) * 25}%,
        rgba(250, 251, 255, 0.2) 0px,
        rgba(248, 249, 252, 0.1) 1px,
        transparent 2px
      )`,

      // Linear gradient highlight
      highlight: `linear-gradient(
        ${-45 + index * 2}deg,
        rgba(255, 255, 255, 0.4) 0%,
        transparent 60%
      )`,

      // Surface variation layer
      surface: `linear-gradient(
        to right,
        rgba(248, 249, 252, 0.05) 0%,
        rgba(252, 253, 255, 0.1) 50%,
        rgba(248, 249, 252, 0.05) 100%
      )`,
    },
  };

  // Determine paper type based on index (e.g., first card is premium)
  const isPremium = index === 0;

  // Create composite texture based on card position in stack
  return {
    background: isPremium
      ? 'linear-gradient(to bottom right, #fff 0%, #fafbff 100%)'
      : 'linear-gradient(to bottom right, #fafbff 0%, #f8f9ff 100%)',

    // Layer multiple textures for depth
    textureLayers: [
      isPremium ? paperTypes.premium.grain : paperTypes.matte.grain,
      isPremium ? paperTypes.premium.highlight : paperTypes.matte.highlight,
      isPremium ? paperTypes.premium.surface : paperTypes.matte.surface,
    ],

    // Refined border effect simulating paper edge
    border: isPremium
      ? '1px solid rgba(255, 255, 255, 0.9)'
      : '1px solid rgba(255, 255, 255, 0.7)',

    // Subtle edge highlight
    edgeHighlight: `
      linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, ${0.15 - index * 0.01}) 10%,
        rgba(255, 255, 255, ${0.15 - index * 0.01}) 90%,
        transparent
      )`,
  };
};


export default function WelcomeCard() {
  const [cardPositions, setCardPositions] = useState<CardPosition[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Initialize cards with content and styles
  const cards = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    content: i === 0 ? "Welcome to\nSaeum" : `Flashcard ${i + 1}`,
    subtext: i === 0 ? "Your personal study companion" : `Card ${i + 1} description`,
    style: createPaperTexture(i),
  }));

  // Initialize stack with refined visual depth
  useEffect(() => {
    setIsLoaded(true);
    initializeStack();
  }, []);

  const initializeStack = (randomize: boolean = false) => {
    let positions = cards.map((_, index) => {
      const baseOffset = Math.min(index * 1.5, 30); // More subtle offset
      return {
        x: baseOffset,
        y: baseOffset,
        rotate: -index * 0.3, // More subtle rotation
        zIndex: cards.length - index,
        scale: 1 - index * 0.001, // More subtle scaling
        shadowOpacity: 1 - index * 0.01,
      };
    });

    if (randomize) {
      positions = positions.map((pos) => ({
        ...pos,
        x: pos.x + (Math.random() * 8 - 4),
        y: pos.y + (Math.random() * 8 - 4),
        rotate: pos.rotate + (Math.random() * 2 - 1),
      }));
    }

    setCardPositions(positions);
  };

  // Handle shuffling of the deck
  const shuffleDeck = () => {
    if (isShuffling) return;
    setIsShuffling(true);
    initializeStack(true);
    setTimeout(() => setIsShuffling(false), 1000); // Adjust duration as needed
  };

  // Handle drag start
  const handleDragStart = (index: number) => {
    setActiveCard(index);
    setIsDragging(true);
  };

  // Handle drag
  const handleDrag = (event: any, info: any, index: number) => {
    const updatedPositions = [...cardPositions];
    updatedPositions[index] = {
      ...updatedPositions[index],
      x: info.point.x - window.innerWidth / 2 +  // Adjust for centering
         (window.innerWidth * 0.95 * 0.235) / 2, // Adjust based on card width
      y: info.point.y - window.innerHeight / 2 + // Adjust for centering
         (window.innerHeight * 0.925 * 0.235) / 2, // Adjust based on card height
    };
    setCardPositions(updatedPositions);
  };

  // Handle drag end
  const handleDragEnd = (event: any, info: any, index: number) => {
    setActiveCard(null);
    setIsDragging(false);
    // Optionally, implement snapping or boundary logic here
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#0B0B0F] overflow-hidden">
      <motion.div className="w-[95%] h-[95%] relative aspect-[1364/900]">
        <motion.div
          className="w-[95%] h-[92.5%] left-[2.5%] top-[3.5%] absolute rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255, 255, 255, 0.02)' }}
        >
          {/* Shuffle Button */}
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 
                       transition-colors z-50"
            onClick={shuffleDeck}
            disabled={isShuffling}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Shuffle className="w-6 h-6 text-white/60" />
          </motion.button>

          {/* Card Stack */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {cards.map((card, index) => {
                const position = cardPositions[index];
                const isActive = activeCard === index;

                return (
                  <motion.div
                    key={card.id}
                    className="absolute w-[23.5%] aspect-[321/416] cursor-grab active:cursor-grabbing touch-none"
                    style={{
                      zIndex: position?.zIndex || cards.length - index,
                    }}
                    initial={{
                      rotate: -index * 0.3,
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      x: position?.x || Math.min(index * 1.5, 30),
                      y: position?.y || Math.min(index * 1.5, 30),
                      rotate: position?.rotate || -index * 0.3,
                      opacity: 1,
                      scale: position?.scale || 1 - index * 0.001,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 40,
                    }}
                    drag
                    dragMomentum={false}
                    onDragStart={() => handleDragStart(index)}
                    onDrag={(e, info) => handleDrag(e, info, index)}
                    onDragEnd={(e, info) => handleDragEnd(e, info, index)}
                  >
                    {/* Card Background with Textures */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl backdrop-blur-[1px]"
                      style={{
                        background: card.style.background,
                        border: card.style.border,
                        boxShadow: isActive
                          ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 15px 22px rgba(0, 0, 0, 0.2)'
                          : `0 ${5 + index * 0.3}px ${10 + index * 0.5}px rgba(0, 0, 0, ${
                              position?.shadowOpacity * 0.2 || 0.1
                            })`,
                      }}
                    >
                      {/* Texture Layers for Depth */}
                      {card.style.textureLayers.map((texture, i) => (
                        <div
                          key={i}
                          className="absolute inset-0"
                          style={{
                            backgroundImage: texture,
                            opacity: 1 - i * 0.2, // Progressive opacity for depth
                            mixBlendMode: i === 0 ? 'normal' : 'soft-light',
                          }}
                        />
                      ))}

                      {/* Edge Highlight Effect */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: card.style.edgeHighlight,
                          opacity: isActive ? 0.8 : 0.4,
                        }}
                      />
                    </motion.div>

                    {/* Card Content */}
                    <motion.div
                      className="absolute bottom-[8%] right-[8%] text-neutral-800"
                    >
                      <motion.div className="text-[1.5vw] font-medium tracking-tight leading-snug">
                        {card.content.split('\n').map((line, i) => (
                          <div key={i} className="font-['Instrument Sans']">
                            {line}
                          </div>
                        ))}
                      </motion.div>
                      <motion.div className="text-[1vw] mt-2 opacity-60 font-light">
                        {card.subtext}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
