'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export default function HashtagsPage() {
  const [content, setContent] = useState('')
  const [hashtags, setHashtags] = useState<string[]>([])

  const generateHashtags = async () => {
    // In a real application, this would call an AI service
    const mockHashtags = ['#TikTokTips', '#ContentCreator', '#ViralVideo', '#TrendingNow', '#LearnOnTikTok']
    setHashtags(mockHashtags)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Optimize Hashtags</h1>
      <div className="space-y-4">
        <Input
          placeholder="Enter your video content or description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <GlowButton onClick={generateHashtags}>Generate Hashtags</GlowButton>
      </div>
      {hashtags.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Recommended Hashtags:</h2>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((hashtag, index) => (
              <Badge key={index} variant="secondary">{hashtag}</Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

