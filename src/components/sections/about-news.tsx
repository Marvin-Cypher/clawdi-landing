import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const newsItems = [
  {
    id: 1,
    logo: {
      src: '/images/logos/forbes.svg',
      alt: 'Forbes',
      width: 162,
      height: 42,
      className: 'invert dark:invert-0',
    },
    title:
      'OpenClaw is quickly becoming the go-to open-source AI assistant framework. Clawdi removes the only barrier left: setup complexity. 15 minutes to a fully working AI assistant.',
    readMoreLink: '#',
  },
  {
    id: 2,
    logo: {
      src: '/images/logos/tc.svg',
      alt: 'TechCrunch',
      width: 84,
      height: 42,
    },
    title:
      'With TEE-based privacy and a managed OpenClaw instance for $20/mo, Clawdi is making personal AI assistants accessible to non-technical users for the first time.',
    readMoreLink: '#',
  },
  {
    id: 3,
    logo: {
      src: '/images/logos/the-guardian.svg',
      alt: 'The Guardian',
      width: 127.8,
      height: 48,
      className: 'invert dark:invert-0',
    },
    title:
      "The AI assistant you message on WhatsApp that actually reads your email, manages your calendar, and respects your privacy. Clawdi turns the promise of AI into daily reality.",
    readMoreLink: '#',
  },
];

export default function AboutNews() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container">
        <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
          What people are saying
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.id} className="space-y-3">
              <Image
                src={item.logo.src}
                alt={item.logo.alt}
                width={item.logo.width}
                height={item.logo.height}
                className={cn`object-contain ${item.logo.className}`}
              />

              <p className="text-accent-foreground text-lg leading-snug">
                {item.title}
              </p>

              <Button
                variant="ghost"
                asChild
                className="group gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95"
              >
                <Link href={item.readMoreLink}>
                  Read more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
