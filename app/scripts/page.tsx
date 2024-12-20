'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export default function ScriptsPage() {
  const [prompt, setPrompt] = useState('')
  const [script, setScript] = useState('')

  const generateScript = async () => {
    // In a real application, this would call an AI service
    const mockScript = `Hey TikTok! Today we're diving into the world of [topic from prompt].
Did you know that [interesting fact]? It's mind-blowing!
Let me show you how this works...
[Brief explanation or demonstration]
If you found this helpful, don't forget to like and follow for more content like this!
What other [topic]-related questions do you have? Let me know in the comments!`

    setScript(mockScript)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Write Video Scripts</h1>
      <div className="space-y-4">
        <Input
          placeholder="Enter your video topic or idea"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <GlowButton onClick={generateScript}>Generate Script</GlowButton>
      </div>
      {script && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Your AI-Generated Script:</h2>
          <Textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            rows={10}
            className="w-full"
          />
        </div>
      )}
    </div>
  )
}

