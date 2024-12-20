import { forwardRef } from 'react'
import { Button, ButtonProps } from '@/components/ui/button'

export const GlowButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <Button
        className={`relative overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] glow-effect ${className}`}
        {...props}
        ref={ref}
      >
        <span className="relative z-10">{props.children}</span>
      </Button>
    )
  }
)
GlowButton.displayName = 'GlowButton'

