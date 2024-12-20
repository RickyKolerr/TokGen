'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { useLanguage } from '@/contexts/LanguageContext'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ScriptWriterPage() {
  const { t } = useLanguage()
  const [topic, setTopic] = useState('')
  const [description, setDescription] = useState('')
  const [style, setStyle] = useState('')
  const [tone, setTone] = useState('')
  const [duration, setDuration] = useState(30)
  const [template, setTemplate] = useState('')
  const [script, setScript] = useState('')

  const generateScript = () => {
    // In a real application, this would call an AI service
    const mockScript = `
    [${t('opening_scene')}: ${topic}]
    
    ${t('host')}: "${t('greeting')} ${t('today_topic')} ${topic}."
    
    [${t('transition')}]
    
    ${t('host')}: "${description} ${t('interesting_fact')}"
    
    [${t('demonstration')}]
    
    ${t('host')}: "${t('explain_process')}"
    
    [${t('closing_scene')}]
    
    ${t('host')}: "${t('call_to_action')}"
    `
    setScript(mockScript)
  }

  const characterCount = script.length

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        {t('script_writer')}
      </h1>
      <Tabs defaultValue="write">
        <TabsList>
          <TabsTrigger value="write">{t('write_script')}</TabsTrigger>
          <TabsTrigger value="templates">{t('templates')}</TabsTrigger>
          <TabsTrigger value="tips">{t('writing_tips')}</TabsTrigger>
        </TabsList>
        <TabsContent value="write" className="space-y-4">
          <Input
            placeholder={t('enter_topic')}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Textarea
            placeholder={t('describe_video')}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select onValueChange={setStyle}>
              <SelectTrigger>
                <SelectValue placeholder={t('select_style')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="funny">{t('funny')}</SelectItem>
                <SelectItem value="informative">{t('informative')}</SelectItem>
                <SelectItem value="educational">{t('educational')}</SelectItem>
                <SelectItem value="dramatic">{t('dramatic')}</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setTone}>
              <SelectTrigger>
                <SelectValue placeholder={t('select_tone')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">{t('casual')}</SelectItem>
                <SelectItem value="professional">{t('professional')}</SelectItem>
                <SelectItem value="enthusiastic">{t('enthusiastic')}</SelectItem>
                <SelectItem value="serious">{t('serious')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('video_duration')}</label>
            <Slider
              value={[duration]}
              onValueChange={(value) => setDuration(value[0])}
              max={60}
              step={1}
            />
            <p className="mt-2 text-sm text-muted-foreground">{duration} {t('seconds')}</p>
          </div>
          <Select onValueChange={setTemplate}>
            <SelectTrigger>
              <SelectValue placeholder={t('select_template')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tutorial">{t('tutorial')}</SelectItem>
              <SelectItem value="review">{t('review')}</SelectItem>
              <SelectItem value="challenge">{t('challenge')}</SelectItem>
              <SelectItem value="storytelling">{t('storytelling')}</SelectItem>
            </SelectContent>
          </Select>
          <GlowButton onClick={generateScript}>{t('generate_script')}</GlowButton>
        </TabsContent>
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>{t('script_templates')}</CardTitle>
              <CardDescription>{t('choose_template')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>{t('tutorial')}:</strong> {t('tutorial_desc')}</p>
              <p><strong>{t('review')}:</strong> {t('review_desc')}</p>
              <p><strong>{t('challenge')}:</strong> {t('challenge_desc')}</p>
              <p><strong>{t('storytelling')}:</strong> {t('storytelling_desc')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tips">
          <Card>
            <CardHeader>
              <CardTitle>{t('script_writing_tips')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>1. {t('tip_1')}</p>
              <p>2. {t('tip_2')}</p>
              <p>3. {t('tip_3')}</p>
              <p>4. {t('tip_4')}</p>
              <p>5. {t('tip_5')}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {script && (
        <Card>
          <CardHeader>
            <CardTitle>{t('generated_script')}</CardTitle>
            <CardDescription>{t('based_on_inputs')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              rows={10}
              className="w-full"
            />
            <div className="mt-2 flex justify-between items-center">
              <Badge variant="secondary">{characterCount} {t('characters')}</Badge>
              <p className="text-sm text-muted-foreground">{t('estimated_duration')}: {Math.round(characterCount / 15)} {t('seconds')}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

