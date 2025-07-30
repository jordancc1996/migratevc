'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const countries = [
  'Greece',
  'New Zealand',
  'Carribean Islands',
  'Dubai',
  'Portugal',
  'Malta',
  'Cyprus'
]

export default function MapSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const createGlitchText = (text: string) => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    return text
      .split('')
      .map(char => Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
      .join('')
  }

  return (
    <section id="global" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/world_map_dark.jpg"
          alt="World Map"
          fill
          className="object-cover opacity-40 brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Global Influence Zones
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-light-gray mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Strategic positioning across key jurisdictions
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {countries.map((country, index) => (
            <motion.button
              key={country}
              className="relative px-6 py-3 border border-white/20 rounded-full text-white hover:text-gold hover:border-gold transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8 + index * 0.1,
                ease: 'easeOut'
              }}
              onHoverStart={() => setHoveredCountry(country)}
              onHoverEnd={() => setHoveredCountry(null)}
              whileHover={{ scale: 1.05 }}
              data-hover
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: hoveredCountry === country ? '100%' : '-100%' }}
                transition={{ duration: 0.5 }}
              />
              
              <motion.span
                className="relative z-10"
                animate={{
                  color: hoveredCountry === country ? '#d4af37' : '#ffffff'
                }}
                transition={{ duration: 0.2 }}
              >
                {hoveredCountry === country && Math.random() < 0.1 
                  ? createGlitchText(country)
                  : country
                }
              </motion.span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Ambient particles */}
      <div className="absolute inset-0 z-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}

