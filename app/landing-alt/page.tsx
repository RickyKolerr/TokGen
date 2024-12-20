'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GlowButton } from '@/components/ui/glow-button'
import { Button } from '@/components/ui/button'
import { ArrowRight, Hash, Video, Clock, Briefcase, Upload } from 'lucide-react'

const features = [
  { icon: Hash, title: 'Tạo Hashtag Thông Minh', description: 'Tối ưu hóa khả năng hiển thị' },
  { icon: Video, title: 'Chỉnh Sửa Video AI', description: 'Nâng cao chất lượng nội dung' },
  { icon: Clock, title: 'Thời Gian Đăng Tối Ưu', description: 'Tăng tương tác người xem' },
  { icon: Briefcase, title: 'Quản Lý Chiến Dịch', description: 'Theo dõi hiệu suất dễ dàng' },
  { icon: Upload, title: 'Tích Hợp TikTok', description: 'Đăng trực tiếp từ nền tảng' },
]

export default function LandingAltPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10">
      <main className="container mx-auto px-4 py-16 space-y-20">
        <Hero />
        <Features hoveredFeature={hoveredFeature} setHoveredFeature={setHoveredFeature} />
        <CallToAction />
      </main>
    </div>
  )
}

function Hero() {
  return (
    <section className="text-center space-y-8">
      <motion.h1 
        className="text-6xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Cách Mạng Hóa Nội Dung TikTok Của Bạn
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Tối ưu hóa. Sáng tạo. Phát triển.
      </motion.p>
      <motion.div 
        className="flex justify-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <GlowButton asChild size="lg">
          <Link href="/register">Bắt Đầu Miễn Phí</Link>
        </GlowButton>
        <Link href="/pricing">
          <Button variant="outline" size="lg">Xem Bảng Giá</Button>
        </Link>
      </motion.div>
    </section>
  )
}

function Features({ hoveredFeature, setHoveredFeature }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`bg-card text-card-foreground rounded-lg border border-border p-6 space-y-4 transition-all duration-300 ${
            hoveredFeature === index ? 'shadow-lg scale-105' : ''
          }`}
          onMouseEnter={() => setHoveredFeature(index)}
          onMouseLeave={() => setHoveredFeature(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <feature.icon className="h-10 w-10 text-primary" />
          <h2 className="text-2xl font-semibold">{feature.title}</h2>
          <p className="text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </section>
  )
}

function CallToAction() {
  return (
    <motion.section 
      className="text-center space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold">Sẵn Sàng Tỏa Sáng Trên TikTok?</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Tham gia cùng hàng nghìn người sáng tạo nội dung đang sử dụng TokGen
      </p>
      <GlowButton asChild size="lg">
        <Link href="/register">Bắt Đầu Ngay <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </GlowButton>
    </motion.section>
  )
}

