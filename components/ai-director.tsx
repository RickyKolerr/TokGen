'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlowButton } from '@/components/ui/glow-button'
import { Slider } from '@/components/ui/slider'

export function AIDirector() {
  const [pacing, setPacing] = useState(50)

  const generateSuggestions = () => {
    // In a real application, this would call an AI service
    alert('AI Director suggestions generated!')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Director Mode</CardTitle>
        <CardDescription>Get AI-powered suggestions for your video</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Video Pacing</label>
          <Slider
            value={[pacing]}
            onValueChange={(value) => setPacing(value[0])}
            max={100}
            step={1}
          />
        </div>
        <GlowButton onClick={generateSuggestions}>Generate AI Suggestions</GlowButton>
      </CardContent>
    </Card>
  )
}

