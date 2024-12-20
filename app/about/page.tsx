import { GlowButton } from '@/components/ui/glow-button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Về Chúng Tôi
      </h1>
      <div className="space-y-4 text-lg">
        <p>
          TokGen là nền tảng hàng đầu trong việc tối ưu hóa nội dung TikTok bằng công nghệ AI cho người sáng tạo nội dung Việt Nam. Chúng tôi tin rằng mọi người đều có tiềm năng trở thành những nhà sáng tạo nội dung tuyệt vời, và sứ mệnh của chúng tôi là cung cấp các công cụ để biến điều đó thành hiện thực.
        </p>
        <p>
          Được thành lập vào năm 2024, TokGen đã nhanh chóng trở thành đối tác đáng tin cậy của hàng nghìn người sáng tạo nội dung TikTok trên khắp Việt Nam. Chúng tôi không ngừng đổi mới và cải tiến các công cụ AI của mình để đảm bảo rằng người dùng của chúng tôi luôn đi đầu trong xu hướng và tối đa hóa sự tương tác trên nền tảng TikTok.
        </p>
        <p>
          Đội ngũ của chúng tôi bao gồm các chuyên gia về AI, phân tích dữ liệu và marketing số, tất cả đều có chung niềm đam mê giúp đỡ các nhà sáng tạo nội dung phát triển và thành công trên TikTok.
        </p>
      </div>
      <div className="text-center">
        <GlowButton asChild>
          <Link href="/register">Tham Gia Cùng Chúng Tôi</Link>
        </GlowButton>
      </div>
    </div>
  )
}

