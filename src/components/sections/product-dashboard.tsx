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
    title: '1-Click App Connections',
    description:
      'Connect Gmail, Slack, Notion, Calendar, and 20+ apps with OAuth — no API keys, no config files.',
    icon: Activity,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'Human Setup Call',
    description:
      'A real human walks you through setup in 15 minutes. If we can\'t get you running, you don\'t pay.',
    icon: Clock,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'Chat on Any Channel',
    description:
      'Message your AI on WhatsApp, Telegram, Slack, Discord, or iMessage — whichever you already use.',
    icon: Settings,
    cta: 'Learn more',
    href: '#',
  },
  {
    title: 'AI Models Included',
    description:
      'GPT-5.3 and Claude Opus 4.6 are included. No separate API keys or subscriptions needed.',
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
          Sign up, connect apps, start chatting
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
