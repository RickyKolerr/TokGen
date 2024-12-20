'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Hash, Video, Clock, Briefcase, Upload, Home, Menu, X, Globe, Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from '@/components/theme-toggle'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: 'home', href: '/', icon: Home },
  { name: 'hashtag_generator', href: '/hashtag-generator', icon: Hash },
  { name: 'video_enhancement', href: '/video-enhancement', icon: Video },
  { name: 'posting_time', href: '/posting-time', icon: Clock },
  { name: 'campaign_management', href: '/campaign-management', icon: Briefcase },
  { name: 'tiktok_upload', href: '/tiktok-upload', icon: Upload },
  { name: 'script_writer', href: '/script-writer', icon: Edit },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="bg-card border-b border-border py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
          TokGen
        </Link>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 ${
                pathname === item.href ? 'text-primary' : ''
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{t(item.name)}</span>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">{t('login')}</Button>
          </Link>
          <Link href="/register">
            <Button>{t('register')}</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('vi')}>
                {t('language')}: Tiếng Việt
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                {t('language')}: English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 ${
                    pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{t(item.name)}</span>
                </Link>
              ))}
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">{t('login')}</Button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-start">{t('register')}</Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Button onClick={() => setLanguage('vi')} variant="outline">
                  Tiếng Việt
                </Button>
                <Button onClick={() => setLanguage('en')} variant="outline">
                  English
                </Button>
              </div>
              <ThemeToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

