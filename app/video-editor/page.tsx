'use client'

import { useState, useRef } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Slider } from '@/components/ui/slider'

export default function VideoEditorPage() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVideoSrc(url)
    }
  }

  const handleTrim = () => {
    // In a real application, this would use a video editing library
    console.log('Trimming video...')
  }

  const handleAddFilter = () => {
    // In a real application, this would apply a filter to the video
    console.log('Adding filter...')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Video Editor</h1>
      <div className="space-y-4">
        <input type="file" accept="video/*" onChange={handleFileChange} className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "/>
        {videoSrc && (
          <video ref={videoRef} src={videoSrc} controls className="w-full max-w-2xl" />
        )}
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Trim Video</label>
          <Slider defaultValue={[0, 100]} max={100} step={1} />
        </div>
        <GlowButton onClick={handleTrim}>Apply Trim</GlowButton>
        <GlowButton onClick={handleAddFilter}>Add AI Filter</GlowButton>
      </div>
    </div>
  )
}

