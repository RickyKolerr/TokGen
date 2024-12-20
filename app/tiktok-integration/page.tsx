'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type TikTokVideo = {
  id: number;
  title: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

const mockTikTokVideos: TikTokVideo[] = [
  { id: 1, title: 'Thử Thách Nhảy', views: 10000, likes: 5000, comments: 500, shares: 1000 },
  { id: 2, title: 'Review Món Ăn', views: 20000, likes: 8000, comments: 800, shares: 2000 },
]

export default function TikTokIntegrationPage() {
  const [videos, setVideos] = useState<TikTokVideo[]>(mockTikTokVideos)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [caption, setCaption] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setVideoFile(file)
    }
  }

  const uploadToTikTok = () => {
    // In a real application, this would call the TikTok API to upload the video
    alert('Video đã được tải lên TikTok thành công!')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Tích Hợp TikTok
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Đăng Video Lên TikTok</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="file" accept="video/*" onChange={handleFileChange} />
          <Textarea
            placeholder="Nhập chú thích cho video của bạn"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={4}
          />
          <GlowButton onClick={uploadToTikTok} disabled={!videoFile}>Đăng lên TikTok</GlowButton>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Hiệu Quả Video TikTok</CardTitle>
          <CardDescription>Thống kê các video đã đăng</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {videos.map((video) => (
              <Card key={video.id}>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lượt xem: {video.views}</p>
                  <p>Lượt thích: {video.likes}</p>
                  <p>Bình luận: {video.comments}</p>
                  <p>Chia sẻ: {video.shares}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

