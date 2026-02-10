import Image from 'next/image';

import { cn } from '@/lib/utils';

interface ClawDecorProps {
  className?: string;
  size?: number;
  rotate?: number;
  opacity?: number;
}

export function ClawDecor({
  className,
  size = 200,
  rotate = 0,
  opacity = 0.04,
}: ClawDecorProps) {
  return (
    <div
      className={cn('pointer-events-none absolute -z-1 select-none', className)}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
        opacity,
        mixBlendMode: 'multiply',
      }}
    >
      <Image
        src="/images/theme-material.png"
        alt=""
        width={size}
        height={size}
        className="size-full object-contain"
        aria-hidden="true"
      />
    </div>
  );
}
