'use client'

import { usePathname } from 'next/navigation'
import { Progress } from '@/components/ui/progress'

const steps = [
  { path: '/video-enhancement', step: 1 },
  { path: '/hashtag-generator', step: 2 },
  { path: '/posting-time', step: 3 },
  { path: '/tiktok-upload', step: 4 },
]

export function ProgressBar() {
  const pathname = usePathname()
  const currentStep = steps.find(step => pathname.startsWith(step.path))?.step || 0
  const progress = (currentStep / steps.length) * 100

  return (
    <Progress value={progress} className="w-full" />
  )
}

