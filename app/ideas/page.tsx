'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function IdeasPage() {
  const [topic, setTopic] = useState('')
  const [ideas, setIdeas] = useState<string[]>([])

  const generateIdeas = async () => {
    // In a real application, this would call an AI service
    const mockIdeas = [
      "5 TikTok hacks for better lighting",
      "Dance challenge: Remix a classic move",
      "Day in the life: Behind the scenes of content creation",
      "TikTok vs Reality: Expectations vs actual process",
      "Tutorial: How to use TikTok's latest filter"
    ]
    setIdeas(mockIdeas)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Generate Content Ideas</h1>
      <div className="space-y-4">
        <Input
          placeholder="Enter a topic or theme"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <GlowButton onClick={generateIdeas}>Generate Ideas</GlowButton>
      </div>
      {ideas.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Your AI-Generated Ideas:</h2>
          <ul className="space-y-2">
            {ideas.map((idea, index) => (
              <li key={index} className="bg-secondary p-4 rounded-md">{idea}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

