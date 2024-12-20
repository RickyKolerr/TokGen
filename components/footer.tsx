import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">TokGen</h2>
            <p className="text-muted-foreground">Tối ưu hóa nội dung TikTok của bạn với sức mạnh của AI</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Bảng giá</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Liên hệ</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Điều khoản sử dụng</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 TokGen. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  )
}

