'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [scheduledPosts, setScheduledPosts] = useState<{ date: Date; content: string }[]>([])
  const [newPostContent, setNewPostContent] = useState('')

  const schedulePost = () => {
    if (selectedDate && newPostContent) {
      setScheduledPosts([...scheduledPosts, { date: selectedDate, content: newPostContent }])
      setNewPostContent('')
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Schedule Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Select Date</h2>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Schedule New Post</h2>
          <Input
            placeholder="Enter post content"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <GlowButton onClick={schedulePost}>Schedule Post</GlowButton>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Scheduled Posts</h2>
        {scheduledPosts.length > 0 ? (
          <ul className="space-y-2">
            {scheduledPosts.map((post, index) => (
              <li key={index} className="bg-secondary p-4 rounded-md">
                <p className="font-semibold">{post.date.toLocaleString()}</p>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts scheduled yet.</p>
        )}
      </div>
    </div>
  )
}

