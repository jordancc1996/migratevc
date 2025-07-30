'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('https://formcarry.com/s/DyBjyBVRU08', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset and close after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          investmentAmount: '',
          message: ''
        })
        onClose()
      }, 3000)
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    setIsSubmitting(false)
    alert('There was an error submitting the form. Please try again.')
  }
}

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-dark-gray border border-gold/20 rounded-lg shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-light-gray hover:text-gold transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-6">
              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
                      Request Access
                    </h3>
                    <p className="text-light-gray">
                      Share your details and we'll be in touch within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-slate border border-light-gray/20 rounded-lg text-white placeholder-light-gray/50 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Full Name *"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-slate border border-light-gray/20 rounded-lg text-white placeholder-light-gray/50 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Email Address *"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-slate border border-light-gray/20 rounded-lg text-white placeholder-light-gray/50 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <select
                        name="investmentAmount"
                        value={formData.investmentAmount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-slate border border-light-gray/20 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                      >
                        <option value="">Investment Range (Optional)</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m+">$5M+</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-dark-slate border border-light-gray/20 rounded-lg text-white placeholder-light-gray/50 focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your goals and timeline..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <motion.div
                            className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Submitting...
                        </span>
                      ) : (
                        'Submit Request'
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                /* Success Message */
                <div className="text-center py-8">
                  <motion.div
                    className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Request Submitted
                  </h3>
                  <p className="text-light-gray mb-4">
                    We'll contact you within 24 hours.
                  </p>
                  <p className="text-gold text-sm">
                    Closing automatically...
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
