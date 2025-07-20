'use client'

import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="text-center">
        <motion.h1
          className="font-playfair text-5xl md:text-6xl font-semibold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          MigrateVC
        </motion.h1>
        
        <motion.div
          className="w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

