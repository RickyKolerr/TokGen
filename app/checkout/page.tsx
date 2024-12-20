'use client'

import { useState } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit_card')

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
        Thanh Toán
      </h1>
      <form className="max-w-md mx-auto space-y-6">
        <div>
          <Label htmlFor="name">Họ và tên</Label>
          <Input id="name" placeholder="Nhập họ và tên của bạn" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Nhập địa chỉ email của bạn" />
        </div>
        <div>
          <Label htmlFor="payment_method">Phương thức thanh toán</Label>
          <Select onValueChange={setPaymentMethod} defaultValue={paymentMethod}>
            <SelectTrigger>
              <SelectValue placeholder="Chọn phương thức thanh toán" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="credit_card">Thẻ tín dụng</SelectItem>
              <SelectItem value="bank_transfer">Chuyển khoản ngân hàng</SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {paymentMethod === 'credit_card' && (
          <>
            <div>
              <Label htmlFor="card_number">Số thẻ</Label>
              <Input id="card_number" placeholder="Nhập số thẻ của bạn" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry_date">Ngày hết hạn</Label>
                <Input id="expiry_date" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="Nhập CVV" />
              </div>
            </div>
          </>
        )}
        {paymentMethod === 'bank_transfer' && (
          <div>
            <p className="text-muted-foreground">Vui lòng chuyển khoản đến tài khoản sau:</p>
            <p>Ngân hàng: TokGen Bank</p>
            <p>Số tài khoản: 1234567890</p>
            <p>Chủ tài khoản: TokGen Company</p>
          </div>
        )}
        {paymentMethod === 'paypal' && (
          <div>
            <p className="text-muted-foreground">Bạn sẽ được chuyển hướng đến trang PayPal để hoàn tất thanh toán.</p>
          </div>
        )}
        <GlowButton type="submit" className="w-full">
          Hoàn tất thanh toán
        </GlowButton>
      </form>
    </div>
  )
}

