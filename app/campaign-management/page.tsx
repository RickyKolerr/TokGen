'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type Campaign = {
  id: number;
  name: string;
  status: 'chưa đăng' | 'đang chạy' | 'đã kết thúc';
  views: number;
  likes: number;
  comments: number;
  shares: number;
}

const mockCampaigns: Campaign[] = [
  { id: 1, name: 'Thử Thách Nhảy', status: 'đang chạy', views: 10000, likes: 5000, comments: 500, shares: 1000 },
  { id: 2, name: 'Review Món Ăn', status: 'đã kết thúc', views: 20000, likes: 8000, comments: 800, shares: 2000 },
  { id: 3, name: 'Hướng Dẫn Trang Điểm', status: 'chưa đăng', views: 0, likes: 0, comments: 0, shares: 0 },
]

export default function CampaignManagementPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns)

  const addNewCampaign = () => {
    // In a real application, this would open a modal to create a new campaign
    alert('Tính năng thêm chiến dịch mới sẽ được triển khai trong tương lai!')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Quản Lý Chiến Dịch Video
      </h1>
      <GlowButton onClick={addNewCampaign}>Thêm Chiến Dịch Mới</GlowButton>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <CardHeader>
              <CardTitle>{campaign.name}</CardTitle>
              <CardDescription>Trạng thái: {campaign.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lượt xem: {campaign.views}</p>
              <p>Lượt thích: {campaign.likes}</p>
              <p>Bình luận: {campaign.comments}</p>
              <p>Chia sẻ: {campaign.shares}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Phân Tích Hiệu Quả Chiến Dịch</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaigns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#8884d8" />
              <Bar dataKey="likes" fill="#82ca9d" />
              <Bar dataKey="comments" fill="#ffc658" />
              <Bar dataKey="shares" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

