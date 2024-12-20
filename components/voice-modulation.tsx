'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { GlowButton } from '@/components/ui/glow-button'

export function VoiceModulation() {
  const [selectedEffect, setSelectedEffect] = useState('')

  const applyVoiceEffect = () => {
    // In a real application, this would apply the selected voice effect
    alert(`Applying ${selectedEffect} voice effect`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice Modulation</CardTitle>
        <CardDescription>Apply voice effects to your video</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select onValueChange={setSelectedEffect}>
          <SelectTrigger>
            <SelectValue placeholder="Select voice effect" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="chipmunk">Chipmunk</SelectItem>
            <SelectItem value="deep">Deep Voice</SelectItem>
            <SelectItem value="robot">Robot</SelectItem>
            <SelectItem value="echo">Echo</SelectItem>
          </SelectContent>
        </Select>
        <GlowButton onClick={applyVoiceEffect} disabled={!selectedEffect}>Apply Voice Effect</GlowButton>
      </CardContent>
    </Card>
  )
}

