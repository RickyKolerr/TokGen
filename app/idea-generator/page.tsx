'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function IdeaGeneratorPage() {
  const [topic, setTopic] = useState('')
  const [trendLevel, setTrendLevel] = useState(50)
  const [ideas, setIdeas] = useState<string[]>([])
  const [hashtags, setHashtags] = useState<string[]>([])
  const [music, setMusic] = useState<string>('')

  const generateIdeas = () => {
    // In a real application, this would call an AI service
    const mockIdeas = [
      'Thử thách nhảy theo nhạc mới nhất',
      'Hướng dẫn trang điểm 5 phút',
      'Review món ăn đường phố',
      'Thử thách học tiếng Anh 7 ngày',
      'Biến hóa 1 bộ quần áo thành 5 phong cách'
    ]
    const mockHashtags = ['#TikTokVietnam', '#TrendingNow', '#ViralChallenge', '#LearnOnTikTok', '#FashionHacks']
    const mockMusic = 'Bài hát hot nhất - Ca sĩ nổi tiếng'

    setIdeas(mockIdeas)
    setHashtags(mockHashtags)
    setMusic(mockMusic)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Tạo Ý Tưởng Video
      </h1>
      <div className="space-y-4">
        <Select onValueChange={setTopic}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn chủ đề" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fashion">Thời trang</SelectItem>
            <SelectItem value="food">Ẩm thực</SelectItem>
            <SelectItem value="education">Giáo dục</SelectItem>
            <SelectItem value="lifestyle">Phong cách sống</SelectItem>
          </SelectContent>
        </Select>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mức độ xu hướng</label>
          <Slider
            value={[trendLevel]}
            onValueChange={(value) => setTrendLevel(value[0])}
            max={100}
            step={1}
          />
        </div>
        <GlowButton onClick={generateIdeas}>Tạo Ý Tưởng</GlowButton>
      </div>
      {ideas.length > 0 && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ý Tưởng Video</CardTitle>
              <CardDescription>Dựa trên chủ đề và mức độ xu hướng bạn chọn</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {ideas.map((idea, index) => (
                  <li key={index} className="bg-secondary p-2 rounded-md">{idea}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hashtags Đề Xuất</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {hashtags.map((hashtag, index) => (
                  <Badge key={index} variant="secondary">{hashtag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Âm Nhạc Đề Xuất</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{music}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

