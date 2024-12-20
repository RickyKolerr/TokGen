'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function TikTokInsights() {
  const insights = [
    { name: 'Engagement Rate', value: 75 },
    { name: 'Watch Time', value: 60 },
    { name: 'Trend Alignment', value: 90 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>TikTok Insights</CardTitle>
        <CardDescription>AI-powered performance predictions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.name}>
            <div className="flex justify-between mb-1">
              <span>{insight.name}</span>
              <span>{insight.value}%</span>
            </div>
            <Progress value={insight.value} />
          </div>
        ))}
        <p className="text-sm text-muted-foreground mt-4">
          Tip: This video style performs 20% better in your niche.
        </p>
      </CardContent>
    </Card>
  )
}

