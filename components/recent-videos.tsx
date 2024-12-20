import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlowButton } from '@/components/ui/glow-button'

const recentVideos = [
  { id: 1, title: 'TikTok Dance Challenge', date: '2024-03-15' },
  { id: 2, title: 'Cooking Tutorial', date: '2024-03-14' },
  { id: 3, title: 'Travel Vlog', date: '2024-03-13' },
]

export function RecentVideos() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recentVideos.map((video) => (
        <Card key={video.id}>
          <CardHeader>
            <CardTitle>{video.title}</CardTitle>
            <CardDescription>Chỉnh sửa ngày: {video.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <GlowButton className="w-full">Chỉnh sửa lại</GlowButton>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

