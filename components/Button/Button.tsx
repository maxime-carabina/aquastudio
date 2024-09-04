import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'default-button text-[14px] px-3 py-2 lg:px-4 lg:py-2 lg:text-[20px] antialiased', //px-2 py-1
  {
    variants: {
      variant: {
        default:
          'bg-primary text-f-secondary border-secondary hover:text-f-primary hover:shadow-[inset_25rem_0_0_0] lg:hover:shadow-secondary duration-500 transition-[color,box-shadow]',
        secondary:
          'bg-secondary text-f-primary border-primary z-0 hover:text-f-secondary hover:shadow-[inset_25rem_0_0_0] lg:hover:shadow-primary duration-500 transition-[color, box-shadow]',
        tertiary: 'bg-secondary text-f-primary border-tertiary',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        icon: 'w-16 h-16 bg-primary text-f-secondary border-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, className, asChild = false, ...rest } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      type="button"
      className={cn(buttonVariants({ variant, className }))}
      {...rest}
    />
  );
});

Button.displayName = 'Button';

export { Button };
