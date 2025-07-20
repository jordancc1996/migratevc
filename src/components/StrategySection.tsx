'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const strategies = [
  {
    title: 'Raise Money Anywhere.',
    description: 'Access global capital markets without geographic constraints. Strategic positioning for maximum funding velocity.',
  },
  {
    title: 'Secure Global Safety Nets.',
    description: 'Multiple citizenship options provide ultimate security. Diversified jurisdictional presence for risk mitigation.',
  },
  {
    title: 'Move Capital Without Friction.',
    description: 'Seamless international transactions. Optimized structures for global wealth management and deployment.',
  },
]

export default function StrategySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="strategy" ref={ref} className="section-full bg-gradient-to-br from-dark-slate to-dark-gray py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: 'easeOut'
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              data-hover
            >
              <motion.div
                className="bg-white/5 border border-white/10 rounded-lg p-8 h-full backdrop-blur-sm"
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="font-playfair text-2xl lg:text-3xl font-semibold mb-6 text-white"
                  animate={{
                    color: hoveredIndex === index ? '#d4af37' : '#ffffff'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {strategy.title}
                </motion.h3>
                
                <motion.p
                  className="text-light-gray leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.7 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {strategy.description}
                </motion.p>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

