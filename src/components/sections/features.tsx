import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const ITEMS = [
  {
    title: 'Clear Your Inbox',
    image: {
      src: '/images/home/features/1.webp',
      width: 198,
      height: 133,
    },
    desc: 'OpenClaw reads, triages, drafts replies, and keeps your inbox at zero.',
  },
  {
    title: 'Manage Your Calendar',
    image: {
      src: '/images/home/features/2.webp',
      width: 148,
      height: 124,
    },
    desc: 'Schedule meetings, resolve conflicts, and prep agendas automatically.',
  },
  {
    title: 'Research & Summarize',
    image: {
      src: '/images/home/features/3.webp',
      width: 154,
      height: 99,
    },
    desc: 'Pull data from the web, documents, and APIs — summarized for you.',
  },
  {
    title: 'Write & Run Code',
    image: {
      src: '/images/home/features/4.webp',
      width: 171,
      height: 120,
    },
    desc: 'Generate scripts, debug code, and automate development workflows.',
  },
  {
    title: 'Connect Your Apps',
    image: {
      src: '/images/home/features/5.webp',
      width: 195,
      height: 74.6,
    },
    desc: 'Gmail, Slack, Notion, and more — all connected with zero config.',
  },
  {
    title: 'Automate Workflows',
    image: {
      src: '/images/home/features/6.webp',
      width: 148,
      height: 124,
    },
    desc: 'Chain tasks together and let OpenClaw handle repetitive work 24/7.',
  },
  {
    title: 'Chat Anywhere',
    image: {
      src: '/images/home/features/7.webp',
      width: 186,
      height: 103,
    },
    desc: 'Talk to your assistant on WhatsApp, Telegram, or Slack.',
  },
  {
    title: 'Always On, Always Private',
    image: {
      src: '/images/home/hero.webp',
      width: 186,
      height: 103,
    },
    desc: 'Runs 24/7 in a secure, isolated environment. Your data stays yours.',
  },
];

const Features = ({ className }: { className?: string }) => {
  return (
    <section className={cn('py-10 md:py-20', className)}>
      <Carousel>
        <div className="container flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              The AI that actually does things
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-snug">
              OpenClaw isn&apos;t a chatbot. It&apos;s an autonomous AI assistant that
              connects to your apps and workflows. Here&apos;s what it can do for you.
            </p>
          </div>
          <div className="hidden gap-3 md:flex">
            <CarouselPrevious className="via-muted/20 border-border to-muted/50 relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br from-transparent" />
            <CarouselNext className="via-muted/20 border-border to-muted/50 relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br from-transparent" />
          </div>
        </div>

        <CarouselContent className="mx-auto mt-10 max-w-[3000px] cursor-grab">
          {ITEMS.map((card, idx) => (
            <CarouselItem key={idx} className="min-w-70 basis-[16%] pl-6">
              <div className="flex h-full flex-col">
                <Card className="dark:via-muted/20 dark:to-muted/50 to-background via-card from-card h-43 bg-gradient-to-br dark:from-transparent">
                  <CardContent className="flex h-full items-center justify-center">
                    <Image
                      src={card.image.src}
                      alt={card.title}
                      width={card.image.width}
                      height={card.image.height}
                      className="object-contain invert dark:invert-0"
                    />
                  </CardContent>
                </Card>

                {/* Text block outside of card */}
                <h3 className="text-accent-foreground mt-3 mb-2 text-lg font-bold">
                  {card.title}
                </h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="container mt-10 flex justify-center gap-3 md:hidden">
          <CarouselPrevious className="dark:via-muted/20 border-border dark:to-muted/50 to-background via-card from-card relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br dark:from-transparent" />
          <CarouselNext className="dark:via-muted/20 border-border dark:to-muted/50 to-background via-card from-card relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br dark:from-transparent" />
        </div>
      </Carousel>
    </section>
  );
};

export default Features;
