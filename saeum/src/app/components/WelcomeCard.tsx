'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Shuffle } from 'lucide-react';

interface CardPosition {
  x: number;
  y: number;
  rotate: number;
  zIndex: number;
  scale: number;
  shadowOpacity: number;
}

const createPaperTexture = useMemo(() => (index: number) => {
  const paperTypes = {
    premium: {
      grain: `repeating-linear-gradient(
        ${45 + (index % 2) * 90}deg,
        rgba(248, 249, 252, 0.3) 0px,
        rgba(252, 253, 255, 0.3) 1px,
        rgba(248, 249, 252, 0.2) 2px
      )`,
      highlight: `radial-gradient(
        circle at ${50 + Math.sin(index) * 20}% ${50 + Math.cos(index) * 20}%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.2) 45%,
        transparent 65%
      )`,
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
      grain: `repeating-radial-gradient(
        circle at ${50 + (index % 3) * 25}% ${50 + (index % 2) * 25}%,
        rgba(250, 251, 255, 0.2) 0px,
        rgba(248, 249, 252, 0.1) 1px,
        transparent 2px
      )`,
      highlight: `linear-gradient(
        ${-45 + index * 2}deg,
        rgba(255, 255, 255, 0.4) 0%,
        transparent 60%
      )`,
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
      ? 'linear-gradient(to bottom right, #fffff5 0%, #fdfdf2 100%)'
      : 'linear-gradient(to bottom right, #fdfdf2 0%, #fbfbef 100%)',

    // Layer multiple textures for depth
    textureLayers: [
      isPremium ? paperTypes.premium.grain : paperTypes.matte.grain,
      isPremium ? paperTypes.premium.highlight : paperTypes.matte.highlight,
      isPremium ? paperTypes.premium.surface : paperTypes.matte.surface,
    ],

    // Refined border effect simulating paper edge
    border: isPremium
      ? '1px solid rgba(255, 253, 240, 0.9)'
      : '1px solid rgba(255, 253, 240, 0.7)',

    // Subtle edge highlight
    edgeHighlight: `
      linear-gradient(
        to right,
        transparent,
        rgba(255, 253, 240, ${0.15 - index * 0.01}) 10%,
        rgba(255, 253, 240, ${0.15 - index * 0.01}) 90%,
        transparent
      )`,
  };
})


export default function WelcomeCard() {
  const [cardPositions, setCardPositions] = useState<CardPosition[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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
  };

  // Simplified drag handling
  const handleDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, index: number) => {
    const updatedPositions = [...cardPositions];
    updatedPositions[index] = {
      ...updatedPositions[index],
      x: info.offset.x,
      y: info.offset.y,
    };
    setCardPositions(updatedPositions);
  };

  // Handle drag end
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, index: number) => {
    setActiveCard(null);

    const updatedPositions = [...cardPositions];
    updatedPositions[index] = {
      ...updatedPositions[index],
      x: info.offset.x,
      y: info.offset.y,
    };
    setCardPositions(updatedPositions);
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
                    initial={false}
                    animate={{
                      x: position?.x || Math.min(index * 1.5, 30),
                      y: position?.y || Math.min(index * 1.5, 30),
                      rotate: position?.rotate || -index * 0.3,
                      scale: position?.scale || 1 - index * 0.001,
                    }}
                    drag
                    dragSnapToOrigin={false}
                    dragElastic={0}
                    dragMomentum={false}
                    dragTransition={{
                      power: 0,
                      timeConstant: 0,
                      modifyTarget: (target: number) => Math.round(target)
                    }}
                    transition={{
                      duration: 0,
                      type: "tween"
                    }}
                    whileDrag={{ 
                      scale: 1.02,
                      transition: { duration: 0.1 }
                    }}
                    onDragStart={() => handleDragStart(index)}
                    onDrag={(e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => handleDrag(e, info, index)}
                    onDragEnd={(e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => handleDragEnd(e, info, index)}
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
