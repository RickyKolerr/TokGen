'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type MediaItem = {
  id: number;
  type: 'image' | 'video';
  url: string;
  title: string;
}

const mockMediaItems: MediaItem[] = [
  { id: 1, type: 'image', url: '/placeholder.svg?height=100&width=100', title: 'Hình ảnh mẫu 1' },
  { id: 2, type: 'image', url: '/placeholder.svg?height=100&width=100', title: 'Hình ảnh mẫu 2' },
  { id: 3, type: 'video', url: '/placeholder.mp4', title: 'Video mẫu 1' },
  { id: 4, type: 'video', url: '/placeholder.mp4', title: 'Video mẫu 2' },
]

export default function MediaSuggestionPage() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(mockMediaItems)
  const [searchTerm, setSearchTerm] = useState('')

  const searchMedia = () => {
    // In a real application, this would call an AI service to get relevant media
    alert(`Tìm kiếm media cho: ${searchTerm}`)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Gợi Ý Hình Ảnh/Video
      </h1>
      <div className="flex space-x-4">
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <GlowButton onClick={searchMedia}>Tìm Kiếm</GlowButton>
      </div>
      <Tabs defaultValue="images">
        <TabsList>
          <TabsTrigger value="images">Hình Ảnh</TabsTrigger>
          <TabsTrigger value="videos">Video</TabsTrigger>
        </TabsList>
        <TabsContent value="images">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mediaItems.filter(item => item.type === 'image').map((item) => (
              <Card key={item.id}>
                <CardContent className="p-2">
                  <img src={item.url} alt={item.title} className="w-full h-auto" />
                  <p className="text-sm mt-2">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="videos">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mediaItems.filter(item => item.type === 'video').map((item) => (
              <Card key={item.id}>
                <CardContent className="p-2">
                  <video src={item.url} className="w-full h-auto" controls />
                  <p className="text-sm mt-2">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

