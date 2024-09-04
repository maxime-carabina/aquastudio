'use client';

import { cloneElement, useState, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface TooltipProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  // content: string | ReactNode;
  contentText: string | ReactNode;
  placement?: keyof typeof placementClasses;
  customClass?: string;
  children?: React.ReactNode;
}

function InfoIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="14" height="14" rx="7" stroke="#FFF8F3" />
      <path
        d="M8.13305 4.7H7.25305V3.85H8.13305V4.7ZM8.07305 11H7.30305V5.83H8.07305V11Z"
        fill="#FFF8F3"
      />
    </svg>
  );
}

const placementClasses = {
  'top-start': 'bottom-full left-0 mb-2',
  top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
  'top-end': 'bottom-full right-0 mb-2',
  'right-start': 'left-full top-0 ml-2',
  right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  'right-end': 'left-full bottom-0 ml-2',
  'bottom-start': 'top-full left-0 mt-2',
  bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
  'bottom-end': 'top-full right-0 mt-2',
  'left-start': 'right-full top-0 mr-2',
  left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  'left-end': 'right-full bottom-0 mr-2',
};

export function Tooltip(props: TooltipProps) {
  const {
    contentText,
    placement = 'bottom',
    className,
    customClass,
    children,
    ...rest
  } = props;

  const [showTooltip, setShowTooltip] = useState(false);
  const icon = <InfoIcon />;
  const clonedIcon = cloneElement(icon, {
    className: 'stroke-current text-neutral',
  });

  return (
    <div
      data-testid="Tooltip"
      // className="inline-flex items-center hover:cursor-pointer relative"
      className={cn(
        `inline-flex items-center hover:cursor-pointer relative`,
        className,
      )}
      {...rest}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {clonedIcon}
      <span className="ml-2 text-neutral">{children}</span>
      <div
        className={`w-fit z-10 absolute bg-tertiary p-3 rounded-md text-f-primary opacity-0 transition-opacity
        duration-300 ${showTooltip ? 'opacity-100' : 'opacity-0'}
          ${customClass} ${placementClasses[placement]}`}
      >
        {contentText}
      </div>
    </div>
  );
}
