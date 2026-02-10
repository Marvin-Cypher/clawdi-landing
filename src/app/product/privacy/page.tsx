'use client';

import {
  Cloud,
  DollarSign,
  Lock,
  Monitor,
  Server,
  Shield,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
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
import { ClawDecor } from '@/components/ui/claw-decor';

const COMPARISON = [
  {
    label: 'Mac Mini Setup',
    macmini: '$500+ upfront',
    clawdi: '$0 — we host it',
    icon: DollarSign,
  },
  {
    label: 'Monthly Running Cost',
    macmini: 'Electricity + internet 24/7',
    clawdi: '$20/mo all-in',
    icon: Server,
  },
  {
    label: 'Privacy Level',
    macmini: 'Local device',
    clawdi: 'TEE confidential compute',
    icon: Lock,
  },
  {
    label: 'Setup Time',
    macmini: '4-8 hours (technical)',
    clawdi: '15 minutes (guided)',
    icon: Monitor,
  },
  {
    label: 'Updates & Maintenance',
    macmini: 'You manage everything',
    clawdi: 'Automatic, zero downtime',
    icon: Cloud,
  },
  {
    label: 'Data Access',
    macmini: 'Only you',
    clawdi: 'Only you — TEE encrypted',
    icon: ShieldCheck,
  },
];

const PRIVACY_FEATURES = [
  {
    title: 'Confidential Computing (TEE)',
    description:
      'Your OpenClaw runs inside a Trusted Execution Environment. Even Clawdi cannot access your data — it is encrypted in memory, at rest, and in transit.',
    icon: Shield,
  },
  {
    title: 'Isolated VM Per User',
    description:
      'Every Clawdi instance runs on its own confidential VM with 2 CPU, 16 GB RAM, and 20 GB storage. No shared infrastructure, no data leaks.',
    icon: Server,
  },
  {
    title: 'No Mac Mini Needed',
    description:
      'The most popular private OpenClaw setup costs $500+ for a Mac Mini running 24/7. Clawdi gives you the same privacy in the cloud for $20/mo.',
    icon: Monitor,
  },
  {
    title: 'Powered by Phala Network',
    description:
      'Clawdi uses Phala-powered TEE infrastructure — the same confidential compute trusted by enterprises for sensitive workloads.',
    icon: Lock,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding relative container">
        <ClawDecor
          className="right-0 top-10 hidden lg:block"
          size={260}
          rotate={20}
          opacity={0.03}
        />
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center rounded-full border p-1 text-xs">
            <span className="bg-muted rounded-full px-3 py-1">
              Privacy
            </span>
            <span className="px-3">Cloud privacy = local privacy</span>
          </div>

          <h1 className="text-foreground text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
            Skip the $500 Mac Mini.{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient">Same privacy, no hardware.</span>
          </h1>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto mt-10 flex max-w-3xl justify-center"
        >
          <Image
            src="/images/claw-mac-mini.png"
            alt="Claw grabbing a Mac Mini"
            width={755}
            height={417}
            className="mx-auto block w-full"
            priority
          />
        </motion.div>

        <p className="text-muted-foreground mx-auto mt-10 max-w-2xl text-center leading-snug md:text-lg lg:text-xl">
          Most people buy a dedicated Mac Mini to run OpenClaw privately.
          Clawdi gives you the same level of privacy in the cloud using
          Trusted Execution Environments (TEE) — for a fraction of the cost.
        </p>

        {/* CTA */}
        <div className="mx-auto mt-10 max-w-md space-y-3">
          <div className="flex gap-4.5">
            <Button variant="cta" className="flex-1" asChild>
              <Link href="/download">Human Setup Service (Free)</Link>
            </Button>
            <Button className="flex-1" variant="outline" asChild>
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
          <div className="text-muted-foreground text-center text-sm tracking-wide">
            TEE encrypted · Your data stays yours · $20/mo all-in
          </div>
        </div>
      </section>

      {/* Mac Mini vs Clawdi Comparison */}
      <section className="section-padding container">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xxl mb-4 text-center leading-tight tracking-tight md:text-5xl">
            Mac Mini vs Clawdi
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg leading-snug">
            Why spend $500+ on hardware when you can get the same privacy in the
            cloud?
          </p>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-xl border">
            {/* Header */}
            <div className="bg-accent grid grid-cols-3 gap-4 px-6 py-4">
              <div className="text-muted-foreground text-sm font-medium" />
              <div className="text-center text-sm font-bold">Mac Mini DIY</div>
              <div className="text-gradient text-center text-sm font-bold">
                Clawdi
              </div>
            </div>

            {/* Rows */}
            {COMPARISON.map((row, index) => (
              <motion.div
                key={row.label}
                className="grid grid-cols-3 items-center gap-4 border-t px-6 py-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <row.icon className="text-muted-foreground size-4 shrink-0" />
                  <span className="text-sm font-medium">{row.label}</span>
                </div>
                <div className="text-muted-foreground text-center text-sm">
                  {row.macmini}
                </div>
                <div className="text-accent-foreground text-center text-sm font-medium">
                  {row.clawdi}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="section-padding relative container">
        <ClawDecor
          className="-left-20 top-20 hidden lg:block"
          size={200}
          rotate={-35}
          opacity={0.025}
        />
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xxl mb-4 text-center leading-tight tracking-tight md:text-5xl">
            Enterprise-grade privacy,{' '}
            <span className="text-gradient">for everyone</span>
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg leading-snug">
            Your data never leaves the encrypted enclave. Not even we can see it.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {PRIVACY_FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="h-full gap-4 bg-transparent shadow-none">
                  <CardHeader className="gap-3">
                    <div className="flex size-12 items-center justify-center rounded-lg border bg-gradient-to-br from-[var(--chart-1)]/10 via-transparent to-[var(--chart-2)]/10">
                      <feature.icon className="size-5 text-[var(--chart-1)]" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-snug">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Your AI, your data, <span className="text-gradient">your rules</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg leading-snug">
            Stop spending $500 on hardware. Get the same privacy for $20/mo with
            Clawdi&apos;s confidential compute infrastructure.
          </p>
          <div className="mx-auto mt-8 flex max-w-sm gap-4">
            <Button variant="cta" className="flex-1" asChild>
              <Link href="/download">Human Setup Service (Free)</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
