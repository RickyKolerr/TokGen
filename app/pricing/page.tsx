'use client'

import { useState, useEffect } from 'react'
import { GlowButton } from '@/components/ui/glow-button'
import { CheckCircle } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const plans = [
  {
    name: 'Basic',
    price: 9.99,
    features: ['100 AI-generated ideas/month', 'Basic video editing', 'Weekly trending hashtags'],
  },
  {
    name: 'Pro',
    price: 19.99,
    features: ['Unlimited AI-generated ideas', 'Advanced video editing', 'Daily trending hashtags', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 49.99,
    features: ['All Pro features', 'Custom AI model training', 'Dedicated account manager', 'API access'],
  },
]

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleStripeCheckout = async (planName: string, price: number) => {
    const stripe = await stripePromise
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ planName, price }),
    })
    const session = await response.json()
    await stripe!.redirectToCheckout({ sessionId: session.id })
  }

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      console.error('Stripe publishable key is not set');
    }
  }, []);

  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! }}>
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#FFD700] via-[#FF69B4] to-[#8A2BE2] bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-card border border-border rounded-lg p-6 flex flex-col">
                <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                <p className="text-3xl font-bold mb-6">${plan.price}<span className="text-lg font-normal">/month</span></p>
                <ul className="mb-6 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <CheckCircle className="text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <GlowButton
                  onClick={() => setSelectedPlan(plan.name)}
                  className="mb-4"
                >
                  Select Plan
                </GlowButton>
                {selectedPlan === plan.name && (
                  <div className="space-y-4">
                    <GlowButton
                      onClick={() => handleStripeCheckout(plan.name, plan.price)}
                      className="w-full"
                    >
                      Pay with Stripe
                    </GlowButton>
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: plan.price.toString(),
                              },
                            },
                          ],
                        })
                      }}
                      onApprove={(data, actions) => {
                        return actions.order!.capture().then((details) => {
                          const name = details.payer.name!.given_name
                          alert(`Transaction completed by ${name}`)
                        })
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </PayPalScriptProvider>
  )
}

