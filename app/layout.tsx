import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProgressBar } from '@/components/progress-bar'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'TokGen - AI-powered TikTok Content Creation',
  description: 'Optimize your TikTok content with AI-powered tools for Vietnamese creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen bg-background">
              <Navigation />
              <ProgressBar />
              <main className="flex-1 p-8">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

