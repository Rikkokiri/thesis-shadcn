import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "relative flex flex-row justify-between w-full max-w-[343px]",
        className,
      )}
      {...props}
      ref={ref}
    >
      {/* Line behind the radio scale */}
      <span className="absolute h-1 bg-radio w-full mx-1.25rem top-[0.875rem]" />
      {props.children}
    </RadioGroupPrimitive.Root>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        `h-8 w-8 m-0 bg-radio rounded-full
        ring-offset-background
        focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        `,
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={`flex items-center justify-center h-full w-full bg-inherit rounded-full
        animate-scale-option
        `}
      >
        <div
          className={`h-6 w-6 rounded-50
          group-[.agree]:bg-agree group-[.disagree]:bg-disagree
          `}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
