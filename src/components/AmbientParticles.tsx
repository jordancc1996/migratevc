'use client'

import { motion } from 'framer-motion'

export default function AmbientParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-gold/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, -10, -30, 0],
            x: [0, 10, -10, 5, 0],
            opacity: [0.1, 0.3, 0.2, 0.4, 0.1],
            scale: [1, 1.2, 0.8, 1.5, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

