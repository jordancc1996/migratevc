'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Preloader from '@/components/Preloader'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import StrategySection from '@/components/StrategySection'
import PlaybookSection from '@/components/PlaybookSection'
import MapSection from '@/components/MapSection'
import ArchetypesSection from '@/components/ArchetypesSection'
import CTASection from '@/components/CTASection'
import AmbientParticles from '@/components/AmbientParticles'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <CustomCursor />
          <Navigation />
          <AmbientParticles />
          
          <main>
            <HeroSection />
            <StrategySection />
            <PlaybookSection />
            <MapSection />
            <ArchetypesSection />
            <CTASection />
          </main>
        </>
      )}
    </>
  )
}

