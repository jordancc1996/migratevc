'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="relative w-full h-[120%]">
          <Image
            src="/images/dark world.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <motion.div
            className="absolute inset-0 bg-black/40"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
                'linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-8"
        style={{ opacity }}
      >
        <motion.h1
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <motion.span 
            className="block relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Freedom is the
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 2, delay: 2.5, ease: 'easeOut' }}
            />
          </motion.span>
          <motion.span 
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Ultimate Investment.
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-light-gray font-light mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Strategic intelligence meets global mobility
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent mb-3"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <span className="text-light-gray text-sm tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}

