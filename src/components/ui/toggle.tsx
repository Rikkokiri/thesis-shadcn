import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleBg = "data-[state=on]:bg-black-9 dark:data-[state=on]:bg-white-17";
const hoverBg = "hover:bg-black-9 dark:hover:bg-white-17";

const toggleVariants = cva(
  `
  inline-flex gap-2 items-center justify-center rounded-button text-base font-bold
  ring-offset-background transition-colors
  focus:outline-none
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  disabled:cursor-not-allowed
  `,
  {
    variants: {
      variant: {
        default: `bg-transparent ${toggleBg}`,
        outline: `border-2 border-primary bg-transparent ${hoverBg} ${toggleBg}
          disabled:border-black-15 disabled:dark:border-white-21
          `,
        ghost:
          "focus-visible:ring-offset-0 focus:ring-2 focus:ring-offset-0 focus:ring-ring",
        noHoverGhost: `${toggleBg}`,
        outlineGhost: `border-2 border-primary bg-transparent ${hoverBg}`,
      },
      size: {
        default: "h-12 py-2 px-4",
        sm: "h-8 text-xs py-1.5 pr-3 pl-3.5 text-nowrap",
        lg: "h-11 rounded-button px-8",
        iconMd: "px-3 py-1 min-h-12 w-12 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ToggleBaseProps = React.ComponentPropsWithoutRef<
  typeof TogglePrimitive.Root
> &
  VariantProps<typeof toggleVariants>;

export type ToggleProps = ToggleBaseProps & {
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
};

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => {
  const { pressed, children, untoggledIcon, toggledIcon } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    >
      {pressed ? toggledIcon : untoggledIcon}
      {children}
    </TogglePrimitive.Root>
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
