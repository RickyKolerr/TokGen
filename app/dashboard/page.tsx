'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const mockData = [
  { name: 'Jan', followers: 4000, engagement: 2400, amt: 2400 },
  { name: 'Feb', followers: 3000, engagement: 1398, amt: 2210 },
  { name: 'Mar', followers: 2000, engagement: 9800, amt: 2290 },
  { name: 'Apr', followers: 2780, engagement: 3908, amt: 2000 },
  { name: 'May', followers: 1890, engagement: 4800, amt: 2181 },
  { name: 'Jun', followers: 2390, engagement: 3800, amt: 2500 },
  { name: 'Jul', followers: 3490, engagement: 4300, amt: 2100 },
]

export default function DashboardPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Dashboard
      </h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Creator Journey</CardTitle>
          <CardDescription>Your progress towards TikTok mastery</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full" />
          <p className="mt-2 text-sm text-muted-foreground">Tip: Optimize your captions for better engagement</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Real-Time Trend Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>#SummerVibes</span>
                <Badge>Trending</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span>#DanceChallenge</span>
                <Badge variant="secondary">Popular</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span>#CookingTips</span>
                <Badge variant="outline">Rising</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Pulse</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>New dance challenge: #SummerGroove</li>
              <li>Viral sound: "Summer Nights Remix"</li>
              <li>Popular filter: Golden Hour Glow</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="followers">
            <TabsList>
              <TabsTrigger value="followers">Followers</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            </TabsList>
            <TabsContent value="followers">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="followers" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="engagement">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="engagement" stroke="#82ca9d" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

