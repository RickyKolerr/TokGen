'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function TikTokUploadPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [caption, setCaption] = useState('')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setVideoFile(file)
    }
  }

  const uploadToTikTok = () => {
    // TODO: Implement TikTok API integration for direct upload
    console.log('Uploading to TikTok...', { videoFile, caption })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Đăng Lên TikTok
      </h1>
      <div className="space-y-4">
        <input type="file" accept="video/*" onChange={handleFileChange} className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "/>
        <Textarea
          placeholder="Nhập chú thích cho video của bạn"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows={4}
        />
        <GlowButton onClick={uploadToTikTok} disabled={!videoFile}>Đăng lên TikTok</GlowButton>
      </div>
    </div>
  )
}

