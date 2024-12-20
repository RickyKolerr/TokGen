import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Liên Hệ
      </h1>
      <p className="text-center text-lg">
        Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn. Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào.
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <Label htmlFor="name">Họ và tên</Label>
          <Input id="name" placeholder="Nhập họ và tên của bạn" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Nhập địa chỉ email của bạn" />
        </div>
        <div>
          <Label htmlFor="message">Tin nhắn</Label>
          <Textarea id="message" placeholder="Nhập tin nhắn của bạn" rows={5} />
        </div>
        <GlowButton type="submit" className="w-full">
          Gửi Tin Nhắn
        </GlowButton>
      </form>
    </div>
  )
}

