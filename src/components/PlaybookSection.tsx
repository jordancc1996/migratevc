'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const philosophies = [
  {
    number: '01',
    title: 'Access Before Citizenship',
    description: 'Strategic positioning precedes documentation. Establish presence, build relationships, then formalize status.',
  },
  {
    number: '02',
    title: 'Velocity > Origin',
    description: 'Speed of execution matters more than starting point. Rapid deployment of capital and strategic positioning.',
  },
  {
    number: '03',
    title: 'Move Quietly, Strategically',
    description: 'Discretion is paramount. Execute with precision while maintaining operational security and confidentiality.',
  },
]

export default function PlaybookSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="playbook" ref={ref} className="section-full bg-black py-20">
      <div className="container-custom">
        <motion.h2
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          The Playbook
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={index}
              className="group border-b border-white/10 last:border-b-0 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2 + 0.3,
                ease: 'easeOut'
              }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              data-hover
            >
              <motion.div
                className="flex items-start py-8 px-4 rounded-lg"
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  paddingLeft: '2rem',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="font-playfair text-2xl font-semibold text-gold mr-8 min-w-16"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {philosophy.number}
                </motion.span>

                <div className="flex-1">
                  <motion.h3
                    className="font-playfair text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-gold transition-colors duration-300"
                  >
                    {philosophy.title}
                  </motion.h3>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeIndex === index ? 'auto' : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-light-gray leading-relaxed pb-4">
                      {philosophy.description}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="ml-4 text-light-gray"
                  animate={{
                    rotate: activeIndex === index ? 45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

