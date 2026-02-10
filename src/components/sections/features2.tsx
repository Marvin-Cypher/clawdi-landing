'use client';

import type { EmblaCarouselType } from 'embla-carousel';
import {
  Activity,
  Brain,
  GitBranch,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { useInView } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

import { NumberTicker } from '@/components/magicui/number-ticker';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { ClawDecor } from '@/components/ui/claw-decor';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Real OpenClaw star growth data — hockey stick curve
// Source: GitHub API stargazers (Nov 24 2025 → Feb 9 2026)
const STAR_GROWTH_DATA = [
  { week: 'Nov 24', stars: 0 },
  { week: 'Dec 1', stars: 200 },
  { week: 'Dec 8', stars: 280 },
  { week: 'Dec 15', stars: 350 },
  { week: 'Dec 22', stars: 420 },
  { week: 'Dec 29', stars: 800 },
  { week: 'Jan 5', stars: 1500 },
  { week: 'Jan 12', stars: 3400 },
  { week: 'Jan 19', stars: 5000 },
  { week: 'Jan 26', stars: 80000 },
  { week: 'Feb 2', stars: 150000 },
  { week: 'Feb 9', stars: 180199 },
];

const CONTRIBUTOR_GROWTH_DATA = [
  { month: 'Nov', contributors: 12 },
  { month: 'Dec', contributors: 45 },
  { month: 'Jan', contributors: 98 },
  { month: 'Feb', contributors: 150 },
];

const Features2 = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isChartInView = useInView(cardRef, { once: true, amount: 0.5 });
  return (
    <section className="section-padding relative">
      <ClawDecor className="-right-16 top-20" size={220} rotate={40} opacity={0.03} />
      <div className="container space-y-8">
        {/* Header */}
        <h2 className="text-4xxl mb-10 max-w-3xl leading-none tracking-tight text-balance md:text-5xl lg:mx-auto lg:mb-15 lg:text-center lg:text-6xl">
          The most popular AI tool.{' '}
          <span className="text-gradient">Own it in 3 minutes.</span>
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {/* Chart Card - spans 2 columns */}
          <Card
            ref={cardRef}
            className="to-background via-card from-card relative col-span-1 overflow-hidden bg-gradient-to-t p-6 lg:col-span-2 lg:p-8"
          >
            <CardContent className="relative h-full gap-6 p-0">
              {/* Content overlay */}
              <div className="relative z-10 flex max-w-xs flex-col gap-3">
                <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                  <Star className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-accent-foreground text-lg font-bold lg:text-xl">
                  OpenClaw Stars Growth
                </h3>
                <p className="text-muted-foreground leading-snug lg:text-lg">
                  From zero to 180K+ stars in under 3 months. The
                  fastest-growing open-source AI assistant.
                </p>
              </div>

              {/* Chart */}
              <div className="pointer-events-auto h-48 w-full lg:absolute lg:right-0 lg:bottom-0 lg:h-80">
                {isChartInView && (
                  <ChartContainer
                    config={{
                      stars: {
                        label: 'GitHub Stars',
                        color: 'var(--chart-1)',
                      },
                    }}
                    className="h-full w-full [&_.recharts-yAxis_.recharts-cartesian-axis-tick-value]:hidden [&_.recharts-yAxis_.recharts-cartesian-axis-tick-value]:lg:block"
                  >
                    <AreaChart
                      data={STAR_GROWTH_DATA}
                      margin={{ right: 24, left: 0 }}
                      className="-ml-14 lg:-ml-6"
                    >
                      <defs>
                        <linearGradient
                          id="starGrowthGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="var(--chart-1)"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="100%"
                            stopColor="var(--chart-1)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="none"
                        stroke="var(--border)"
                        opacity={0.3}
                        horizontal={true}
                        vertical={false}
                        horizontalCoordinatesGenerator={(props) => [
                          props.yAxis.scale(50000),
                          props.yAxis.scale(100000),
                          props.yAxis.scale(150000),
                        ]}
                      />
                      <XAxis
                        dataKey="week"
                        tickLine={false}
                        axisLine={true}
                        tickMargin={8}
                        tick={{ fill: 'var(--border)', opacity: 0.7 }}
                        tickFormatter={(value, index) => {
                          if (index === 0 || index === 5 || index === 11) {
                            return value;
                          }
                          return '';
                        }}
                        interval={0}
                        padding={{ left: 0, right: 0 }}
                        stroke="var(--border)"
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={true}
                        tickMargin={8}
                        tick={{ fill: 'var(--border)', opacity: 0.5 }}
                        ticks={[50000, 100000, 150000]}
                        tickFormatter={(value) => `${value / 1000}K`}
                        stroke="var(--border)"
                        domain={[0, 200000]}
                      />
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const stars = payload[0]?.value as number;
                            return (
                              <div className="bg-background flex flex-col items-center gap-2 rounded-lg border p-3 text-xs shadow-md">
                                <div className="flex items-center gap-3">
                                  <span className="text-muted-foreground">
                                    Stars
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-accent-foreground font-medium">
                                      {stars?.toLocaleString()}
                                    </span>
                                    <span className="inline-block rounded-sm bg-green-600/15 px-2 py-1 font-medium text-green-500">
                                      +{Math.round(stars / 180000 * 100)}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        dataKey="stars"
                        type="monotone"
                        stroke="var(--chart-1)"
                        fill="url(#starGrowthGradient)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                          r: 6,
                          fill: 'var(--chart-1)',
                          stroke: 'var(--chart-1)',
                          strokeWidth: 2,
                        }}
                      />
                    </AreaChart>
                  </ChartContainer>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="to-background via-card from-card relative col-span-1 overflow-hidden bg-gradient-to-br p-6 lg:p-8">
            <CardContent className="flex flex-col gap-6 p-0 lg:gap-8">
              <div className="relative z-10 flex flex-col gap-3">
                <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                  <TrendingUp className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-accent-foreground text-lg font-bold lg:text-xl">
                  OpenClaw by the Numbers
                </h3>
                <p className="text-muted-foreground leading-snug lg:text-lg">
                  The open-source community powering your AI assistant.
                </p>
              </div>

              <div>
                {/* Contributors Section */}
                <div className="flex items-center justify-between gap-5 lg:items-stretch">
                  <div className="w-1/2">
                    <span className="text-xs font-bold lg:text-sm">
                      Contributors
                    </span>
                    <div className="mt-2 flex items-center gap-3">
                      <NumberTicker
                        startValue={80}
                        value={150}
                        className="text-4xxl font-medium lg:text-5xl"
                      />
                      <span className="rounded-full bg-green-600/10 px-1.5 py-0.5 text-xs font-medium text-green-400">
                        +87%
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs lg:mt-2">
                      Since launch
                    </p>
                  </div>

                  {/* Small Chart */}
                  <div className="relative flex-1">
                    {isChartInView && (
                      <ChartContainer
                        config={{
                          contributors: {
                            label: 'Contributors',
                            color: 'var(--chart-2)',
                          },
                        }}
                        className="h-full w-full"
                      >
                        <AreaChart
                          data={CONTRIBUTOR_GROWTH_DATA}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="contributorGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="var(--chart-2)"
                                stopOpacity={0.4}
                              />
                              <stop
                                offset="100%"
                                stopColor="var(--chart-2)"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            dataKey="contributors"
                            stroke="var(--chart-2)"
                            fill="url(#contributorGradient)"
                            strokeWidth={2}
                            dot={false}
                            type="monotone"
                          />
                        </AreaChart>
                      </ChartContainer>
                    )}
                  </div>
                </div>

                <Separator className="mt-5 mb-8 lg:mt-6" />

                {/* Bottom Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: 'GitHub Stars',
                      value: '180K',
                      change: '~3 mos',
                      changeClass: 'bg-green-800/10 text-green-800',
                    },
                    {
                      label: 'Channels',
                      value: '19+',
                      change: 'built-in',
                      changeClass: 'bg-green-800/10 text-green-800',
                    },
                    {
                      label: 'AI Providers',
                      value: '16+',
                      change: 'included',
                      changeClass: 'bg-green-800/10 text-green-800',
                    },
                  ].map((stat, idx) => (
                    <div
                      className="flex flex-col justify-between md:gap-1"
                      key={idx}
                    >
                      <div className="text-muted-foreground leading-tighter text-xs md:text-sm">
                        {stat.label}
                      </div>
                      <div className="flex items-center justify-start gap-2">
                        <span className="text-xl font-medium md:text-2xl">
                          {stat.value}
                        </span>
                        <span
                          className={cn(
                            'rounded-full text-xs font-medium',
                            stat.changeClass,
                          )}
                        >
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards Carousel */}
        <FeatureCarousel />

        <div className="flex justify-center">
          <Button
            variant="cta"
            className="max-w-72 flex-1"
          >
            Own Your Claw AI
          </Button>
        </div>
      </div>
    </section>
  );
};

const featureCards = [
  {
    icon: Activity,
    title: 'Zero-Config Integration',
    description:
      'We prepare OAuth connections for your apps. You authorize with one click during setup.',
  },
  {
    icon: Zap,
    title: 'Frontier AI Included',
    description:
      'Claude, GPT-4, and more — included in your plan. No separate subscriptions needed.',
  },
  {
    icon: Brain,
    title: 'Hardware-Level Privacy',
    description:
      'Your data runs in confidential compute. Not even we can see your conversations.',
  },
  {
    icon: GitBranch,
    title: 'Live Setup Support',
    description:
      'Book a 15-minute call. Our team walks you through everything. Guaranteed working.',
  },
];

const FeatureCarousel = () => {
  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);
  }, [api, onSelect]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        loop: false,
      }}
    >
      <CarouselContent className="cursor-grab snap-x snap-mandatory">
        {featureCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <CarouselItem key={idx} className="min-w-xs basis-1/4 snap-start">
              <Card
                className={cn(
                  'bg-card border-0',
                  current === idx &&
                    'to-card via-card from-background bg-gradient-to-r',
                )}
              >
                <CardContent className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <IconComponent className={cn('h-4 w-4')} />
                    <h4 className={cn('text-lg leading-tight')}>
                      {card.title}
                    </h4>
                  </div>
                  <p
                    className={cn(
                      'text-muted-foreground hidden text-sm leading-snug md:block',
                    )}
                  >
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default Features2;
