'use client';

import { ReactNode, ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon';
  model?: 'border' | 'single';
  customClass?: string;
}

export function ButtonIcon(props: ButtonProps) {
  const { children, model = 'single', customClass, ...rest } = props;

  const models: Models = {
    single: 'border-0 bg-primary',
  };

  interface Models {
    [key: string]: string | object;
  }

  return (
    <button
      data-testid="button"
      type="button"
      className={`default-button default-icon ${models[model]} ${customClass}`}
      {...rest}
    >
      <div className="w-fit m-auto flex gap-2 items-baseline">{children}</div>
    </button>
  );
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', customClass, ...rest } = props;

  interface Classes {
    [key: string]: string | object;
  }

  const classes: Classes = {
    primary: 'default-primary',
    secondary: 'default-secondary',
    tertiary: 'default-tertiary',
  };

  const isIcon = variant === 'icon';

  return isIcon ? (
    <ButtonIcon {...props} />
  ) : (
    <button
      type="button"
      className={`default-button text-[10px] px-2 py-1 lg:px-4 lg:py-2 lg:text-[20px] ${classes[variant]} ${customClass}`}
      {...rest}
    >
      {children}
    </button>
  );
}
