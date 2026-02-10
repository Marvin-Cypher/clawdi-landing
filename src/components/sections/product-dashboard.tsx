'use client';

import { Activity, ArrowRight, Bug, Clock, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const FEATURE_CARDS = [
  {
    title: 'Multi-Channel Inbox',
    description:
      'WhatsApp, Telegram, Slack, Discord, Signal, iMessage — all routed through one gateway.',
    icon: Activity,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'Multi-Agent Routing',
    description:
      'Route different conversations to isolated agents, each with its own workspace and history.',
    icon: Settings,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'Voice Wake + Talk',
    description:
      'Always-on voice mode for macOS, iOS, and Android. Talk to your assistant hands-free.',
    icon: Clock,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'Sandbox Mode',
    description:
      'Agent execution runs in per-session Docker containers for enhanced security and isolation.',
    icon: Bug,
    cta: 'Learn more',
    href: '#',
  },
];

export default function ProductDashboard() {
  return (
    <section className="section-padding relative container !pt-0">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
          One gateway, every conversation channel
        </h2>
      </div>

      {/* Main Dashboard Image */}
      <Image
        src="/images/product/plasma.webp"
        alt="Clawdi Dashboard"
        width={1440}
        height={905}
        className="mx-auto mt-10 mask-b-from-50% mask-b-to-95% invert md:mt-16"
      />

      {/* Tagline */}
      <h3 className="text-muted-foreground mt-4 text-center uppercase">
        MULTI-CHANNEL AI ASSISTANT MANAGEMENT
      </h3>

      {/* Feature Cards */}
      <div className="mx-auto mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {FEATURE_CARDS.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Card
              key={index}
              className="group bg-accent/80 gap-4 border-none shadow-none"
            >
              <CardHeader className="gap-2.5">
                <div className="bg-card/50 flex size-10 items-center justify-center rounded-md border">
                  <IconComponent className="size-4.5 opacity-70" />
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="text-muted-foreground flex-1 text-sm">
                  {card.description}
                </CardDescription>
                <div>
                  <Button
                    variant="ghost"
                    asChild
                    className="group mt-6 h-12 gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95"
                  >
                    <Link href={card.href}>
                      Read more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
