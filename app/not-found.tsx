"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Loader2, Home, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function NotFound() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleReload = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
        
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <Link href="/">
              <Button variant="outline">
                <Home className="mr-2 h-4 w-4" /> Go Home
              </Button>
            </Link>
            <Button onClick={handleReload} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="mr-2 h-4 w-4" />
              )}
              Try Again
            </Button>
          </div>
          
          <div className="max-w-md mx-auto">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>Lost? Try searching or navigate back to the homepage.</p>
      </motion.div>
    </div>
  )
}
