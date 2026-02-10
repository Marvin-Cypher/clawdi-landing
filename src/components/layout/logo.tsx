import Image from 'next/image';
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
        'flex items-center gap-2 text-xl font-medium',
        className,
      )}
    >
      <Image
        src="/images/clawdi-logo.png"
        alt="Clawdi"
        width={36}
        height={36}
        className={cn('rounded-md object-contain', iconClassName)}
      />
      <span className={cn('', wordmarkClassName)}>Clawdi</span>
    </Element>
  );
}
