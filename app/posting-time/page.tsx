'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Calendar } from '@/components/ui/calendar'

export default function PostingTimePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [optimalTimes, setOptimalTimes] = useState<string[]>([])

  const generateOptimalTimes = () => {
    // TODO: Implement AI-driven optimal posting time suggestions
    const mockTimes = ['09:00', '12:30', '18:00', '21:00']
    setOptimalTimes(mockTimes)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Thời Gian Đăng Tối Ưu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </div>
        <div className="space-y-4">
          <GlowButton onClick={generateOptimalTimes}>Tìm thời gian tối ưu</GlowButton>
          {optimalTimes.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Thời gian đề xuất:</h2>
              <ul className="space-y-2">
                {optimalTimes.map((time, index) => (
                  <li key={index} className="bg-card p-2 rounded-md">{time}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

