'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Marquee } from '@/components/magicui/marquee';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const REVIEWS = [
  {
    name: 'Sarah K.',
    username: '@sarahk_dev',
    body: "I was spending weekends trying to self-host @OpenClaw. Signed up for @clawdi, had it running in 15 minutes. Literally life-changing.",
    img: 'https://avatar.vercel.sh/sarahk_dev',
  },
  {
    name: 'Marcus Chen',
    username: '@marcusc',
    body: "@clawdi connected my Gmail, Slack, and Calendar in one setup call. My @OpenClaw assistant now triages my inbox every morning.",
    img: 'https://avatar.vercel.sh/marcusc',
  },
  {
    name: 'DevOps Dan',
    username: '@devopsdan',
    body: "The privacy setup on @clawdi is legit. My @OpenClaw runs in an isolated secure environment — they can't see my data even if they wanted to.",
    img: 'https://avatar.vercel.sh/devopsdan',
  },
  {
    name: 'Priya Nair',
    username: '@priyanair',
    body: "I message my @OpenClaw on WhatsApp and it researches, drafts emails, and schedules meetings. @clawdi made that possible without any server setup.",
    img: 'https://avatar.vercel.sh/priyanair',
  },
  {
    name: 'Jake Torres',
    username: '@jaketorres',
    body: "$20/mo for Claude + GPT-4 + a fully managed @OpenClaw instance? @clawdi is the best deal in AI right now.",
    img: 'https://avatar.vercel.sh/jaketorres',
  },
  {
    name: 'Emily Walsh',
    username: '@emwalsh',
    body: "Went from zero to having an AI assistant that reads my Notion, manages my calendar, and messages me on Telegram. @clawdi setup took one call.",
    img: 'https://avatar.vercel.sh/emwalsh',
  },
];

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2);
const secondRow = REVIEWS.slice(REVIEWS.length / 2);
const Testimonials = () => {
  return (
    <section className="container flex flex-col gap-y-10 overflow-x-hidden py-10 md:py-15 lg:flex-row">
      <div className="flex max-w-lg flex-col gap-15 text-balance">
        <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
          People love their OpenClaw
        </h2>
        <div className="space-y-7.5">
          <p className="text-muted-foreground text-lg leading-snug">
            Real users, real results. See what happens when AI setup
            takes 15 minutes instead of 15 hours.
          </p>

          <Button
            variant="ghost"
            asChild
            className="text-accent-foreground group gap-3 !px-0 hover:!bg-transparent hover:opacity-90"
          >
            <Link href="#">
              Get your OpenClaw
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))] flex flex-1 flex-col gap-2.25 overflow-hidden mask-l-from-50% mask-l-to-100%">
        <Marquee
          pauseOnHover
          className="py-0 [--duration:20s] [--gap:calc(var(--spacing)*2.25)]"
        >
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="py-0 [--duration:20s] [--gap:calc(var(--spacing)*2.25)]"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card
      className={cn(
        'hover:bg-accent/60 max-w-xs cursor-pointer gap-4 bg-transparent p-6 md:max-w-sm md:p-8',
        'transition-colors duration-200',
      )}
    >
      <CardHeader className="flex items-center gap-4 p-0">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={`${name} avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <CardTitle className="text-sm font-bold">{name}</CardTitle>
          <CardDescription className="text-muted-foreground text-xs">
            {username}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <blockquote className="text-sm leading-snug">
          {body.split(/(@clawdi|@OpenClaw)/g).map((part, index) =>
            part === '@clawdi' || part === '@OpenClaw' ? (
              <span key={index} className="text-chart-1">
                {part}
              </span>
            ) : (
              part
            ),
          )}
        </blockquote>
      </CardContent>
    </Card>
  );
};
