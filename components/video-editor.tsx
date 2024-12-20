'use client'

import { useState, useRef } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { UploadCloud, Video, Wand2 } from 'lucide-react'

export function VideoEditor({ currentStep, setCurrentStep }) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVideoSrc(url)
      setCurrentStep(2)
    }
  }

  const handleTemplateSelect = (value: string) => {
    setSelectedTemplate(value)
    setCurrentStep(3)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <Label htmlFor="video-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent hover:bg-opacity-5">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadCloud className="w-8 h-8 mb-4 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">Nhấp để tải video hoặc kéo và thả video vào đây</p>
                </div>
                <Input id="video-upload" type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
              </Label>
            </div>
            <GlowButton className="w-full" onClick={() => alert('Chức năng quay video trực tiếp sẽ được thêm trong tương lai!')}>
              <Video className="w-4 h-4 mr-2" />
              Quay video trực tiếp
            </GlowButton>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <video ref={videoRef} src={videoSrc} controls className="w-full max-w-2xl" />
            <div>
              <Label htmlFor="template-select">Chọn Template</Label>
              <Select onValueChange={handleTemplateSelect}>
                <SelectTrigger id="template-select">
                  <SelectValue placeholder="Chọn template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Xu hướng TikTok</SelectItem>
                  <SelectItem value="fashion">Thời trang</SelectItem>
                  <SelectItem value="education">Giáo dục</SelectItem>
                  <SelectItem value="food">Ẩm thực</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <video ref={videoRef} src={videoSrc} controls className="w-full max-w-2xl" />
            <div>
              <Label>Điều chỉnh độ sáng</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div>
              <Label>Điều chỉnh tốc độ</Label>
              <Slider defaultValue={[1]} max={2} min={0.5} step={0.1} />
            </div>
            <GlowButton onClick={() => setCurrentStep(4)}>
              <Wand2 className="w-4 h-4 mr-2" />
              Áp dụng hiệu ứng thông minh
            </GlowButton>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <video ref={videoRef} src={videoSrc} controls className="w-full max-w-2xl" />
            <GlowButton onClick={() => setCurrentStep(5)}>Xem trước</GlowButton>
          </div>
        )
      case 5:
        return (
          <div className="space-y-4">
            <video ref={videoRef} src={videoSrc} controls className="w-full max-w-2xl" />
            <div className="flex space-x-4">
              <GlowButton onClick={() => alert('Video đã được xuất thành công!')}>Xuất Video</GlowButton>
              <GlowButton variant="outline" onClick={() => setCurrentStep(3)}>Chỉnh sửa lại</GlowButton>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Bước {currentStep}/5</h2>
        {currentStep > 1 && (
          <GlowButton variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
            Quay lại
          </GlowButton>
        )}
      </div>
      {renderStep()}
    </div>
  )
}

