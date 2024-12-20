'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { VideoEditor } from '@/components/video-editor'
import { RecentVideos } from '@/components/recent-videos'
import { AIDirector } from '@/components/ai-director'
import { VoiceModulation } from '@/components/voice-modulation'
import { TikTokInsights } from '@/components/tiktok-insights'

export default function VideoEnhancementPage() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Chỉnh Sửa Video Thông Minh
      </h1>
      <Tabs defaultValue="editor" className="w-full">
        <TabsList>
          <TabsTrigger value="editor">Trình chỉnh sửa</TabsTrigger>
          <TabsTrigger value="ai-director">AI Director</TabsTrigger>
          <TabsTrigger value="voice-modulation">Voice Modulation</TabsTrigger>
          <TabsTrigger value="insights">TikTok Insights</TabsTrigger>
          <TabsTrigger value="recent">Video gần đây</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <Card>
            <CardHeader>
              <CardTitle>Tạo Video Mới</CardTitle>
              <CardDescription>Bắt đầu chỉnh sửa video của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <VideoEditor currentStep={currentStep} setCurrentStep={setCurrentStep} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ai-director">
          <AIDirector />
        </TabsContent>
        <TabsContent value="voice-modulation">
          <VoiceModulation />
        </TabsContent>
        <TabsContent value="insights">
          <TikTokInsights />
        </TabsContent>
        <TabsContent value="recent">
          <RecentVideos />
        </TabsContent>
      </Tabs>
    </div>
  )
}

