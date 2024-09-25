import React from "react"
import { cn } from "@kieranm/cn"
import { cva, VariantProps } from "class-variance-authority"

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    icon?: string | React.ReactNode
    chevron?: boolean
  }

const button = cva(
  [
    "relative",
    "flex flex-row items-center justiy-center",
    "text-base",
    "transition-[filter,box-shadow,background-color,border,color] duration-200",
    "ring-0 ring-offset-0 focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-surface",
    "cursor-pointer disabled:cursor-not-allowed",
    "group",
  ],
  {
    variants: {
      variant: {
        solid: ["border border-tint-heavy", "bg-primary", "text-on-primary"],
        outline: [
          "bg-elevated",
          "ring ring-inset ring-tint-heavy",
          "text-text hover:text-text-high-contrast",
          "shadow",
        ],
        translucent: ["text-text hover:text-text-high-contrast"],
        link: [
          "rounded-[0.1em]",
          "disabled:text-text-low-contrast",
          "hover:underline",
          "text-text visited:text-text-high-contrast",
          "state info",
        ],
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "outline", "translucent"],
        class: ["px-[1.4em] py-[0.5em]", "rounded-full"],
      },
    ],
    defaultVariants: {
      variant: "solid",
    },
  },
)

const ButtonFn = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { children, className, style, variant, icon, chevron, ...rest } =
      props

    return (
      <button
        ref={ref}
        className={cn(button({ variant, className }))}
        style={{
          // Safari fixes
          WebkitTransform:
            "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) translateZ(0)",
          overflow: "visible",
          ...style,
        }}
        {...rest}
      >
        {children}
      </button>
    )
  },
)
ButtonFn.displayName = "Button"

export const Button = React.memo(ButtonFn) as typeof ButtonFn
