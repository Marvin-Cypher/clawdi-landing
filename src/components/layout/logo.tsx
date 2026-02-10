import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LogoProps {
  iconClassName?: string;
  wordmarkClassName?: string;
  className?: string;
  href?: string;
  noLink?: boolean;
}

export default function Logo({
  iconClassName,
  wordmarkClassName,
  className,
  href = '/',
  noLink = false,
}: LogoProps) {
  const Element = noLink ? 'div' : Link;

  return (
    <Element
      href={href}
      className={cn(
        'flex items-center gap-1.75 text-xl font-medium',
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        fill="none"
        className={cn('w-7 object-contain', iconClassName)}
      >
        <circle cx="20" cy="20" r="18" stroke="#388BFF" strokeWidth="3" fill="none" />
        <path
          d="M14 28 C14 18, 18 12, 28 12 M14 28 C14 22, 16 18, 22 16"
          stroke="#388BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="28" cy="12" r="2.5" fill="#FF6B35" />
        <circle cx="22" cy="16" r="2" fill="#388BFF" />
      </svg>
      <span className={cn('', wordmarkClassName)}>Clawdi</span>
    </Element>
  );
}
