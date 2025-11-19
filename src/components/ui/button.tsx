import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radi-6)] ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: 
          "bg-[var(--state-brand-active)] text-[var(--text-light-primary)] border border-transparent hover:bg-[var(--state-brand-hover)] active:bg-[var(--state-brand-selected)] focus-visible:border-[var(--state-brand-selected)] focus-visible:border-[3px]",
        secondary:
          "bg-[var(--base-fill-1)] text-[var(--text-dark-primary)] border border-[var(--base-border)] hover:bg-[var(--base-fill-2)] active:bg-[var(--base-fill-1)] focus-visible:bg-[var(--base-surface-2)] focus-visible:border-[var(--state-brand-selected)] focus-visible:border-[3px]",
        ghost:
          "bg-transparent text-[var(--state-brand-active)] border border-transparent hover:bg-[var(--base-surface-1)] hover:border-[var(--state-brand-hover)] hover:text-[var(--state-brand-hover)] active:bg-[var(--base-surface-1)] active:border-[var(--state-brand-selected)] focus-visible:bg-[var(--base-surface-1)] focus-visible:border-[var(--state-brand-selected)] focus-visible:border-[3px]",
        danger:
          "bg-[var(--state-danger-active)] text-[var(--text-light-primary)] border border-transparent hover:bg-[var(--state-danger-hover)] active:bg-[var(--state-danger-selected)] focus-visible:border-[var(--state-brand-selected)] focus-visible:border-[3px]",
      },
      size: {
        small: "h-[36px] px-[12px] text-[14px] leading-[22px] gap-[8px] font-semibold",
        medium: "h-[44px] px-[16px] text-[16px] leading-[24px] gap-[8px] font-semibold",
        large: "h-[44px] px-[20px] text-[18px] leading-[28px] gap-[10px] font-semibold", 
        xl: "h-[56px] px-[24px] text-[20px] leading-[32px] gap-[12px] font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  iconL?: React.ReactNode
  iconR?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconL, iconR, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconL && <span className="shrink-0 flex items-center justify-center">{iconL}</span>}
        {children}
        {iconR && <span className="shrink-0 flex items-center justify-center">{iconR}</span>}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
