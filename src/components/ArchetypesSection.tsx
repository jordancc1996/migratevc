'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const archetypes = [
  {
    title: 'The Crypto OG',
    image: '/images/portrait_2.jpg',
    description: 'Early adopter with significant digital asset holdings. Requires sophisticated tax optimization and global mobility solutions.',
  },
  {
    title: 'The Fund General Partner',
    image: '/images/portrait_1.jpg',
    description: 'Manages institutional capital across borders. Needs strategic residency for fund operations and personal wealth management.',
  },
  {
    title: 'The Southeast Asia Family Office',
    image: '/images/portrait_3.jpg',
    description: 'Multi-generational wealth preservation. Requires comprehensive global citizenship strategy for family security and growth.',
  },
]

export default function ArchetypesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="archetypes" ref={ref} className="section-full bg-gradient-to-br from-dark-slate to-dark-gray py-20">
      <div className="container-custom">
        <motion.h2
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Client Archetypes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {archetypes.map((archetype, index) => (
            <motion.div
              key={index}
              className="group text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2 + 0.3,
                ease: 'easeOut'
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              data-hover
            >
              <motion.div
                className="relative w-full h-96 rounded-lg overflow-hidden mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={archetype.image}
                  alt={archetype.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  style={{
                    filter: hoveredIndex === index 
                      ? 'grayscale(0%) brightness(1)' 
                      : 'grayscale(100%) brightness(0.7)'
                  }}
                />
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/80 flex items-center justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="text-white text-center leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {archetype.description}
                  </motion.p>
                </motion.div>

                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>

              <motion.h3
                className="font-playfair text-xl md:text-2xl font-semibold transition-colors duration-300"
                animate={{
                  color: hoveredIndex === index ? '#d4af37' : '#ffffff'
                }}
              >
                {archetype.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

