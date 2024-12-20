'use client'

import Link from 'next/link'
import { GlowButton } from '@/components/ui/glow-button'
import { Button } from '@/components/ui/button'
import { ArrowRight, Hash, Video, Clock, Briefcase, Upload, CheckCircle, Edit } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

function FeatureCard({ title, description, icon: Icon, href }: { title: string; description: string; icon: any; href: string }) {
  const { t } = useLanguage()
  return (
    <div className="bg-card text-card-foreground rounded-lg border border-border p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:bg-opacity-5">
      <Icon className="h-10 w-10 text-primary" />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
      <GlowButton asChild>
        <Link href={href} className="inline-flex items-center">
          {t('explore')} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </GlowButton>
    </div>
  )
}

export function HomeContent() {
  const { t } = useLanguage()

  return (
    <div className="space-y-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 animate-gradient-xy"></div>
      <section className="relative text-center space-y-6 py-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent animate-pulse">
          {t('optimize_your_tiktok')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          TokGen - {t('automatic_content_creation')}
        </p>
        <div className="flex justify-center space-x-4">
          <GlowButton asChild size="lg">
            <Link href="/register">{t('get_started')}</Link>
          </GlowButton>
          <Link href="/pricing">
            <Button variant="outline" size="lg">{t('pricing')}</Button>
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/landing-alt" className="text-primary hover:underline">
            {t('view_alternative_landing')}
          </Link>
        </div>
      </section>

      <section className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title={t('hashtag_generator')}
          description={t('generate_relevant_hashtags')}
          icon={Hash}
          href="/hashtag-generator"
        />
        <FeatureCard
          title={t('video_enhancement')}
          description={t('enhance_video_quality')}
          icon={Video}
          href="/video-enhancement"
        />
        <FeatureCard
          title={t('posting_time')}
          description={t('find_optimal_posting_times')}
          icon={Clock}
          href="/posting-time"
        />
        <FeatureCard
          title={t('campaign_management')}
          description={t('manage_brand_campaigns')}
          icon={Briefcase}
          href="/campaign-management"
        />
        <FeatureCard
          title={t('tiktok_upload')}
          description={t('upload_directly_to_tiktok')}
          icon={Upload}
          href="/tiktok-upload"
        />
        <FeatureCard
          title={t('script_writer')}
          description={t('create_engaging_scripts')}
          icon={Edit}
          href="/script-writer"
        />
      </section>

      <section className="relative bg-card border border-border rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center">{t('why_choose_us')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            t('save_time_creating_content'),
            t('increase_engagement_rate'),
            t('stay_updated_with_trends'),
            t('optimize_posting_schedule'),
            t('grow_followers_faster'),
            t('tailored_for_vietnamese_market'),
          ].map((reason, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative text-center space-y-6">
        <h2 className="text-3xl font-bold">{t('ready_to_revolutionize')}</h2>
        <p className="text-xl text-muted-foreground">
          {t('join_thousands_of_creators')}
        </p>
        <GlowButton asChild size="lg">
          <Link href="/register">{t('get_started')}</Link>
        </GlowButton>
      </section>
    </div>
  )
}

