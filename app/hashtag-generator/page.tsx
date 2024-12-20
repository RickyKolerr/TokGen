'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HashtagGeneratorPage() {
  const [description, setDescription] = useState('')
  const [hashtags, setHashtags] = useState<string[]>([])
  const [campaignObjective, setCampaignObjective] = useState('')

  const generateHashtags = async () => {
    // TODO: Implement AI-powered hashtag generation
    const mockHashtags = ['#TikTokVietnam', '#TrendingNow', '#ViralContent', '#CreatorTips', '#VietnamCreator']
    setHashtags(mockHashtags)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Tạo Hashtag Thông Minh
      </h1>
      <div className="space-y-4">
        <Textarea
          placeholder="Mô tả ngắn gọn về video của bạn"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
        <Select onValueChange={setCampaignObjective}>
          <SelectTrigger>
            <SelectValue placeholder="Chọn mục tiêu chiến dịch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engagement">Tăng tương tác</SelectItem>
            <SelectItem value="views">Tối đa hóa lượt xem</SelectItem>
            <SelectItem value="followers">Tăng người theo dõi</SelectItem>
          </SelectContent>
        </Select>
        <GlowButton onClick={generateHashtags}>Tạo Hashtag</GlowButton>
      </div>
      {hashtags.length > 0 && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hashtag được đề xuất</CardTitle>
              <CardDescription>Dựa trên mô tả và mục tiêu chiến dịch của bạn</CardDescription>
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
              <CardTitle>Xu hướng hiện tại</CardTitle>
              <CardDescription>Hashtag đang thịnh hành trên TikTok</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>#SummerVibes2024</li>
                <li>#DanceChallenge</li>
                <li>#TikTokCooking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

