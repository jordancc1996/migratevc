'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#strategy', label: 'Strategy' },
  { href: '#playbook', label: 'Playbook' },
  { href: '#global', label: 'Global' },
  { href: '#archetypes', label: 'Clients' },
  { href: '#access', label: 'Access' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-8 right-8 z-40">
      <motion.button
        className="w-8 h-8 flex flex-col justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        data-hover
      >
        <motion.span
          className="w-full h-0.5 bg-white transition-all duration-300"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
        />
        <motion.span
          className="w-full h-0.5 bg-white transition-all duration-300"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
        />
        <motion.span
          className="w-full h-0.5 bg-white transition-all duration-300"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-12 right-0 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg p-6 min-w-48"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                className="block w-full text-left text-white hover:text-gold transition-colors duration-300 py-2 border-b border-white/10 last:border-b-0"
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                data-hover
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

