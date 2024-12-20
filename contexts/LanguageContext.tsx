'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'vi' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'vi',
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi')

  const translations = {
    vi: {
      'home': 'Trang chủ',
      'hashtag_generator': 'Tạo Hashtag',
      'video_enhancement': 'Nâng cao Chất lượng Video',
      'posting_time': 'Thời gian Đăng Tối ưu',
      'campaign_management': 'Quản lý Chiến dịch',
      'tiktok_upload': 'Đăng lên TikTok',
      'login': 'Đăng nhập',
      'register': 'Đăng ký',
      'language': 'Ngôn ngữ',
      'theme': 'Giao diện',
      'light': 'Sáng',
      'dark': 'Tối',
      'automatic_content_creation': 'Tạo Nội dung Tự động',
      'optimize_your_tiktok': 'Tối ưu hóa Nội dung TikTok của Bạn với Công cụ Tự động',
      'get_started': 'Bắt đầu Ngay',
      'pricing': 'Bảng Giá',
      'why_choose_us': 'Tại Sao Chọn TokGen?',
      'ready_to_revolutionize': 'Sẵn sàng Cách mạng hóa Nội dung TikTok của Bạn?',
      'explore': 'Khám phá',
      'generate_relevant_hashtags': 'Tạo hashtag phù hợp và thịnh hành',
      'enhance_video_quality': 'Nâng cao chất lượng video tự động',
      'find_optimal_posting_times': 'Tìm thời điểm đăng bài tối ưu',
      'manage_brand_campaigns': 'Quản lý chiến dịch thương hiệu hiệu quả',
      'upload_directly_to_tiktok': 'Đăng video trực tiếp lên TikTok',
      'save_time_creating_content': 'Tiết kiệm thời gian tạo nội dung',
      'increase_engagement_rate': 'Tăng tỷ lệ tương tác',
      'stay_updated_with_trends': 'Luôn cập nhật xu hướng mới nhất',
      'optimize_posting_schedule': 'Tối ưu hóa lịch đăng bài',
      'grow_followers_faster': 'Tăng người theo dõi nhanh hơn',
      'tailored_for_vietnamese_market': 'Được tối ưu cho thị trường Việt Nam',
      'join_thousands_of_creators': 'Tham gia cùng hàng nghìn người sáng tạo nội dung đang sử dụng TokGen',
      'view_alternative_landing': 'Xem trang giới thiệu thay thế',
      'dashboard': 'Bảng điều khiển',
      'ai_director': 'Trợ lý AI',
      'voice_modulation': 'Điều chỉnh giọng nói',
      'tiktok_insights': 'Thống kê TikTok',
      'campaign_objective': 'Mục tiêu chiến dịch',
      'boost_engagement': 'Tăng tương tác',
      'maximize_views': 'Tối đa lượt xem',
      'increase_followers': 'Tăng người theo dõi',
      'script_writer': 'Viết Kịch Bản',
      'enter_topic': 'Nhập chủ đề video',
      'describe_video': 'Mô tả ngắn gọn về video của bạn',
      'select_style': 'Chọn phong cách',
      'funny': 'Hài hước',
      'informative': 'Thông tin',
      'educational': 'Giáo dục',
      'dramatic': 'Kịch tính',
      'video_duration': 'Thời lượng video',
      'seconds': 'giây',
      'generate_script': 'Tạo Kịch Bản',
      'generated_script': 'Kịch Bản Được Tạo',
      'based_on_inputs': 'Dựa trên thông tin bạn cung cấp',
      'opening_scene': 'Cảnh mở đầu',
      'host': 'Người dẫn chương trình',
      'greeting': 'Xin chào các bạn!',
      'today_topic': 'Hôm nay chúng ta sẽ nói về',
      'transition': 'Chuyển cảnh',
      'interesting_fact': 'Bạn có biết một điều thú vị là...',
      'demonstration': 'Phần trình diễn',
      'explain_process': 'Hãy cùng tôi tìm hiểu cách thức hoạt động...',
      'closing_scene': 'Cảnh kết thúc',
      'call_to_action': 'Đừng quên like, share và follow để xem thêm nhiều video thú vị nhé!',
      'write_script': 'Viết Kịch Bản',
      'templates': 'Mẫu Kịch Bản',
      'writing_tips': 'Mẹo Viết Kịch Bản',
      'select_tone': 'Chọn giọng điệu',
      'casual': 'Thân mật',
      'professional': 'Chuyên nghiệp',
      'enthusiastic': 'Nhiệt tình',
      'serious': 'Nghiêm túc',
      'select_template': 'Chọn mẫu kịch bản',
      'tutorial': 'Hướng dẫn',
      'review': 'Đánh giá',
      'challenge': 'Thử thách',
      'storytelling': 'Kể chuyện',
      'script_templates': 'Mẫu Kịch Bản',
      'choose_template': 'Chọn một mẫu để bắt đầu',
      'tutorial_desc': 'Hướng dẫn người xem cách làm điều gì đó',
      'review_desc': 'Đánh giá một sản phẩm hoặc dịch vụ',
      'challenge_desc': 'Tạo ra một thử thách thú vị cho người xem',
      'storytelling_desc': 'Kể một câu chuyện hấp dẫn',
      'script_writing_tips': 'Mẹo Viết Kịch Bản',
      'tip_1': 'Bắt đầu bằng một câu mở đầu ấn tượng',
      'tip_2': 'Giữ ngôn ngữ đơn giản và dễ hiểu',
      'tip_3': 'Sử dụng câu ngắn gọn và súc tích',
      'tip_4': 'Tạo điểm nhấn bằng cách sử dụng âm thanh hoặc hiệu ứng',
      'tip_5': 'Kết thúc bằng một lời kêu gọi hành động rõ ràng',
      'characters': 'ký tự',
      'estimated_duration': 'Thời lượng ước tính',
      'create_engaging_scripts': 'Tạo kịch bản hấp dẫn cho video TikTok của bạn',
    },
    en: {
      'home': 'Home',
      'hashtag_generator': 'Hashtag Generator',
      'video_enhancement': 'Video Enhancement',
      'posting_time': 'Optimal Posting Time',
      'campaign_management': 'Campaign Management',
      'tiktok_upload': 'TikTok Upload',
      'login': 'Login',
      'register': 'Register',
      'language': 'Language',
      'theme': 'Theme',
      'light': 'Light',
      'dark': 'Dark',
      'automatic_content_creation': 'Automatic Content Creation',
      'optimize_your_tiktok': 'Optimize Your TikTok Content with Automatic Tools',
      'get_started': 'Get Started',
      'pricing': 'Pricing',
      'why_choose_us': 'Why Choose TokGen?',
      'ready_to_revolutionize': 'Ready to Revolutionize Your TikTok Content?',
      'explore': 'Explore',
      'generate_relevant_hashtags': 'Generate relevant and trending hashtags',
      'enhance_video_quality': 'Automatically enhance video quality',
      'find_optimal_posting_times': 'Find the best times to post',
      'manage_brand_campaigns': 'Efficiently manage brand campaigns',
      'upload_directly_to_tiktok': 'Upload videos directly to TikTok',
      'save_time_creating_content': 'Save time creating content',
      'increase_engagement_rate': 'Increase engagement rate',
      'stay_updated_with_trends': 'Stay updated with the latest trends',
      'optimize_posting_schedule': 'Optimize your posting schedule',
      'grow_followers_faster': 'Grow followers faster',
      'tailored_for_vietnamese_market': 'Tailored for the Vietnamese market',
      'join_thousands_of_creators': 'Join thousands of content creators using TokGen',
      'view_alternative_landing': 'View alternative landing page',
      'dashboard': 'Dashboard',
      'ai_director': 'AI Director',
      'voice_modulation': 'Voice Modulation',
      'tiktok_insights': 'TikTok Insights',
      'campaign_objective': 'Campaign Objective',
      'boost_engagement': 'Boost Engagement',
      'maximize_views': 'Maximize Views',
      'increase_followers': 'Increase Followers',
      'script_writer': 'Script Writer',
      'enter_topic': 'Enter video topic',
      'describe_video': 'Briefly describe your video',
      'select_style': 'Select style',
      'funny': 'Funny',
      'informative': 'Informative',
      'educational': 'Educational',
      'dramatic': 'Dramatic',
      'video_duration': 'Video duration',
      'seconds': 'seconds',
      'generate_script': 'Generate Script',
      'generated_script': 'Generated Script',
      'based_on_inputs': 'Based on your inputs',
      'opening_scene': 'Opening scene',
      'host': 'Host',
      'greeting': 'Hello everyone!',
      'today_topic': 'Today we\'re talking about',
      'transition': 'Transition',
      'interesting_fact': 'Did you know that...',
      'demonstration': 'Demonstration',
      'explain_process': 'Let me show you how it works...',
      'closing_scene': 'Closing scene',
      'call_to_action': 'Don\'t forget to like, share, and follow for more exciting content!',
      'write_script': 'Write Script',
      'templates': 'Templates',
      'writing_tips': 'Writing Tips',
      'select_tone': 'Select tone',
      'casual': 'Casual',
      'professional': 'Professional',
      'enthusiastic': 'Enthusiastic',
      'serious': 'Serious',
      'select_template': 'Select template',
      'tutorial': 'Tutorial',
      'review': 'Review',
      'challenge': 'Challenge',
      'storytelling': 'Storytelling',
      'script_templates': 'Script Templates',
      'choose_template': 'Choose a template to get started',
      'tutorial_desc': 'Guide viewers through a process',
      'review_desc': 'Evaluate a product or service',
      'challenge_desc': 'Create an engaging challenge for viewers',
      'storytelling_desc': 'Tell a compelling story',
      'script_writing_tips': 'Script Writing Tips',
      'tip_1': 'Start with a strong hook',
      'tip_2': 'Keep language simple and easy to understand',
      'tip_3': 'Use short, punchy sentences',
      'tip_4': 'Create emphasis with sound effects or visuals',
      'tip_5': 'End with a clear call-to-action',
      'characters': 'characters',
      'estimated_duration': 'Estimated duration',
      'create_engaging_scripts': 'Create engaging scripts for your TikTok videos',
    }
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

