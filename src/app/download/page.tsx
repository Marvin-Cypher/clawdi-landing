'use client';

import { Calendar, Rocket } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function DownloadPage() {
  return (
    <section className="section-padding relative flex min-h-[calc(100vh-var(--header-height)-1px)] items-center justify-center">
      <div className="relative container flex max-w-4xl flex-col items-center text-center">
        {/* Icon */}
        <div className="relative flex size-24 items-center justify-center rounded-2xl border bg-gradient-to-br from-[var(--chart-1)]/10 via-transparent to-[var(--chart-2)]/10 md:size-32">
          <Rocket className="size-12 text-[var(--chart-1)] md:size-16" />
        </div>

        <div className="mt-10 space-y-4 text-balance md:mt-16">
          <h1 className="md:text-6xxl text-5xl leading-none tracking-tight text-balance">
            Get your OpenClaw <br className="hidden sm:block" />
            <span className="text-gradient">in 15 minutes</span>
          </h1>

          <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
            Sign up, book a 15-minute setup call, and start delegating tasks to
            your personal AI assistant. We handle the infrastructure, app
            connections, and AI models.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex w-full max-w-lg flex-col gap-4.5 sm:flex-row">
          <Button variant="cta" className="flex-1 gap-2.5" asChild>
            <Link href="#">
              <Rocket className="size-5" />
              Get Started — $20/mo
            </Link>
          </Button>
          <Button className="flex-1 gap-2.5" variant="outline" asChild>
            <Link href="#">
              <Calendar className="size-5" />
              Book Setup Call
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="text-muted-foreground mt-4 text-center text-sm">
          15-min setup · Zero config · AI models included · Private by default
        </div>

        {/* What happens next */}
        <div className="mt-16 grid w-full max-w-2xl grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {[
            {
              step: '1',
              title: 'Sign Up',
              description:
                'Choose your apps — Gmail, Slack, Notion, Calendar, and more.',
            },
            {
              step: '2',
              title: 'Setup Call',
              description:
                'We walk you through one-click OAuth authorizations in 15 minutes.',
            },
            {
              step: '3',
              title: 'Start Using',
              description:
                'Message your assistant on WhatsApp, Telegram, or Slack. Done.',
            },
          ].map((item) => (
            <div key={item.step} className="space-y-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-[var(--chart-1)]/10 text-sm font-bold text-[var(--chart-1)]">
                {item.step}
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Background SVG */}
      <GradientSVG className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 scale-40 md:scale-50 lg:scale-100" />
    </section>
  );
}

function GradientSVG({ ...props }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1341}
      height={778}
      fill="none"
      {...props}
    >
      <path
        fill="#D9D9D9"
        d="M366.349 732.98 199.23 344.017 314.928 122.54l334.236 73.826L758.25 392.5 366.349 732.98Z"
      />
      <path
        fill="url(#a)"
        d="M366.349 732.98 199.23 344.017 314.928 122.54l334.236 73.826L758.25 392.5 366.349 732.98Z"
      />
      <path
        stroke="url(#b)"
        strokeWidth={0.631}
        d="M366.349 732.98 199.23 344.017 314.928 122.54l334.236 73.826L758.25 392.5 366.349 732.98Z"
      />
      <path
        fill="url(#c)"
        d="M875.091 420.465 1078.5 62.505c50.52-10.486-50.58 96.246 0 186.333 80.45 143.304 298.36 312.903 256.86 419.243-67.59 173.19-306.7 49.523-396.533 0-71.864-39.618-72.434-181.585-63.736-247.616Z"
      />
      <path
        fill="url(#d)"
        d="m46 746.518 908.335-619.389 130.375-66.713-46.89 196.709-156.679 413.622c-27.829 50.066-111.544 120.159-223.775 0-98.591-105.558-466.881-3.975-611.367 75.771L.19 777.755c10.116-9.591 25.82-20.205 45.81-31.237Z"
      />
      <g filter="url(#e)">
        <path
          fill="url(#f)"
          d="M882.469 595.797 1047.2 30.367l4.66 326.52-169.391 238.91Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={478.74}
          x2={479.168}
          y1={122.54}
          y2={733.314}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#388BFF" />
          <stop offset={0.516} stopColor="#FF6B35" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={478.74}
          x2={478.74}
          y1={122.54}
          y2={732.98}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#388BFF" />
          <stop offset={1} stopColor="#388BFF" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={871.273}
          x2={1187.81}
          y1={575.657}
          y2={575.776}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#388BFF" />
          <stop offset={0.514} stopColor="#FF6B35" />
          <stop offset={1} stopColor="#FF5C5C" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={676.046}
          x2={676.427}
          y1={60.416}
          y2={757.664}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#388BFF" />
          <stop offset={1} stopColor="#4A6CF7" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={1020.18}
          x2={813.643}
          y1={202.919}
          y2={477.765}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#388BFF" />
          <stop offset={0.505} stopColor="#FF6B35" />
          <stop offset={1} stopColor="#FF5C5C" />
        </linearGradient>
        <filter
          id="e"
          width={228.969}
          height={625.009}
          x={852.679}
          y={0.577}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_420_4568"
            stdDeviation={14.895}
          />
        </filter>
      </defs>
    </svg>
  );
}
