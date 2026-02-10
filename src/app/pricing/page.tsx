'use client';

import {
  Activity,
  Brain,
  Check,
  ChevronDown,
  Minus,
  Rocket,
  Server,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ClawDecor } from '@/components/ui/claw-decor';
import { cn } from '@/lib/utils';

// ── Plan data ──────────────────────────────────────────

type PlanType = 'diy' | 'clawdi';

interface Plan {
  name: string;
  type: PlanType;
  icon: React.ElementType;
  price: { monthly: number | string };
  subtitle: string;
  highlight?: string;
  button: { text: string; variant: 'default' | 'outline' | 'cta'; href: string };
  features: {
    setup: { name: string; value: string | boolean }[];
    included: { name: string; value: string | boolean }[];
  };
}

const PLANS: Plan[] = [
  {
    name: 'Self-Host',
    type: 'diy',
    icon: Server,
    price: { monthly: '$500' },
    subtitle: 'Run OpenClaw yourself on a Mac Mini',
    button: { text: 'View on GitHub', variant: 'outline', href: '#' },
    features: {
      setup: [
        { name: 'OpenClaw Gateway', value: true },
        { name: 'App connections (OAuth)', value: 'Manual setup' },
        { name: 'Server deployment', value: 'You manage' },
        { name: 'Setup time', value: '2-8 hours' },
        { name: 'Live setup support', value: false },
        { name: 'Confidential compute (TEE)', value: false },
        { name: 'Automatic updates', value: false },
      ],
      included: [
        { name: 'AI models (GPT-5.3, Claude Opus 4.6)', value: 'Bring your own keys' },
        { name: '2,000 credits / month', value: false },
        { name: 'WhatsApp / Telegram / Slack', value: true },
        { name: 'Multi-agent routing', value: true },
        { name: 'Voice mode', value: true },
        { name: 'Companion apps (macOS/iOS/Android)', value: true },
        { name: 'Support', value: 'Community' },
      ],
    },
  },
  {
    name: 'Clawdi',
    type: 'clawdi',
    icon: Rocket,
    price: { monthly: 20 },
    subtitle: 'Everything managed. AI models included. One bill.',
    highlight: '60-80% cheaper than competitors',
    button: { text: 'Human Setup Service (Free)', variant: 'cta', href: '/download' },
    features: {
      setup: [
        { name: 'OpenClaw Gateway', value: true },
        { name: 'App connections (OAuth)', value: '1-click setup' },
        { name: 'Server deployment', value: 'Fully managed' },
        { name: 'Setup time', value: '15 minutes' },
        { name: 'Live setup support', value: true },
        { name: 'Confidential compute (TEE)', value: true },
        { name: 'Automatic updates', value: true },
      ],
      included: [
        { name: 'AI models (GPT-5.3, Claude Opus 4.6)', value: 'Included' },
        { name: '2,000 credits / month', value: true },
        { name: 'WhatsApp / Telegram / Slack', value: true },
        { name: 'Multi-agent routing', value: true },
        { name: 'Voice mode', value: true },
        { name: 'Companion apps (macOS/iOS/Android)', value: true },
        { name: 'Support', value: 'Priority + setup call' },
      ],
    },
  },
];

const CATEGORY_CONFIG = {
  setup: { name: 'Setup & Infrastructure', icon: Activity },
  included: { name: 'Features & Support', icon: Brain },
};

// ── Competitor comparison ──────────────────────────────

const COMPETITORS = [
  {
    name: 'Self-Hosted (Mac Mini)',
    base: '$500 hardware',
    ai: '$20-50/mo',
    total: '$500 + $20-50/mo',
    setup: '2-8 hours',
    technical: 'High',
  },
  {
    name: 'Aight (iOS)',
    base: '$0',
    ai: '$10-70/mo',
    total: '$10-70/mo',
    setup: '1-4 hours',
    technical: 'High',
  },
  {
    name: 'Clawi.ai Basic',
    base: '$30/mo',
    ai: '$20-50/mo',
    total: '$50-80/mo',
    setup: '30 min',
    technical: 'Medium',
  },
  {
    name: 'Clawi.ai Pro',
    base: '$60/mo',
    ai: '$20-50/mo',
    total: '$80-110/mo',
    setup: '30 min',
    technical: 'Medium',
  },
  {
    name: 'Clawdi',
    base: '$20/mo',
    ai: 'Included',
    total: '$20/mo',
    setup: '15 min',
    technical: 'None',
    highlight: true,
  },
];

// ── Credit add-ons ─────────────────────────────────────

const CREDIT_PACKS = [
  { credits: '1,000', price: '$10', discount: '' },
  { credits: '5,000', price: '$45', discount: 'Save 10%' },
  { credits: '10,000', price: '$80', discount: 'Save 20%' },
];

// ── FAQ ────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'What happens if I run out of credits?',
    a: 'Your OpenClaw instance stays online, but AI model usage pauses until you add more credits. You can purchase additional credits instantly from your dashboard.',
  },
  {
    q: 'Do I need a separate Claude or OpenAI subscription?',
    a: 'No! Frontier AI models (GPT-5.3, Claude Opus 4.6) are included in your Clawdi subscription. We handle all API access.',
  },
  {
    q: "What's included in the 2,000 credits?",
    a: '2,000 credits cover approximately 200-400 AI queries per month, depending on complexity. Most users find this sufficient for daily use.',
  },
  {
    q: 'Can I upgrade or downgrade?',
    a: 'Clawdi has one simple plan at $20/mo. You only pay more if you need additional credits beyond the included 2,000.',
  },
  {
    q: 'Is there a free trial?',
    a: "We offer a 7-day money-back guarantee. If you're not satisfied after your setup call, we'll refund your first month.",
  },
];

// ── Page ───────────────────────────────────────────────

const PricingPage = () => {
  return (
    <section className="section-padding relative container space-y-15 md:space-y-20 lg:space-y-30">
      <ClawDecor className="-right-20 top-30 hidden lg:block" size={250} rotate={35} opacity={0.03} />
      <ClawDecor className="-left-16 bottom-40 hidden md:block" size={180} rotate={-45} opacity={0.025} />

      {/* ── Hero ── */}
      <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
        <h1 className="md:text-6xxl text-5xl leading-none tracking-tight text-balance">
          $20/month.{' '}
          <span className="text-gradient">Everything included.</span>
        </h1>
        <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
          No hidden costs. No separate AI subscriptions. No surprises.
          <br className="hidden sm:block" />
          Frontier AI models, app integrations, and privacy — one transparent price.
        </p>
      </div>

      {/* ── Plan cards + feature comparison ── */}
      {/* Desktop */}
      <div className="hidden overflow-x-auto lg:block">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-3 gap-6">
            <div className="p-0" />
            {PLANS.map((plan, i) => (
              <PricingCard key={i} plan={plan} />
            ))}
          </div>
          <FeatureComparison layout="desktop" />
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="mb-8 grid gap-6">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </div>
        <FeatureComparison layout="mobile" />
      </div>

      {/* ── Credit add-ons ── */}
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl">
            Need more credits?
          </h2>
          <p className="text-muted-foreground text-lg">
            Add more anytime. No commitment, no subscription changes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {CREDIT_PACKS.map((pack) => (
            <Card key={pack.credits} className="bg-transparent shadow-none">
              <CardContent className="flex flex-col items-center gap-2 py-6">
                <Zap className="text-chart-1 size-5" />
                <span className="font-azeret-mono text-2xl font-bold">
                  {pack.credits}
                </span>
                <span className="text-muted-foreground text-sm">credits</span>
                <span className="mt-2 text-xl font-bold">{pack.price}</span>
                {pack.discount && (
                  <span className="rounded-full bg-green-600/10 px-2.5 py-0.5 text-xs font-medium text-green-600">
                    {pack.discount}
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          Credit usage examples: GPT-5.3 query ~10 credits · Claude Opus 4.6
          query ~15 credits · Long research task ~50-100 credits
        </p>
      </div>

      {/* ── Competitor comparison ── */}
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl">
            True cost comparison
          </h2>
          <p className="text-muted-foreground text-lg">
            What you actually pay per month across different solutions.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left font-medium">Solution</th>
                <th className="py-3 text-left font-medium">Base Price</th>
                <th className="py-3 text-left font-medium">AI Models</th>
                <th className="py-3 text-left font-medium">Total Cost</th>
                <th className="py-3 text-left font-medium">Setup</th>
                <th className="py-3 text-left font-medium">Technical?</th>
              </tr>
            </thead>
            <tbody>
              {COMPETITORS.map((c) => (
                <tr
                  key={c.name}
                  className={cn(
                    'border-b',
                    c.highlight && 'bg-chart-1/5 font-medium',
                  )}
                >
                  <td className="py-3">
                    {c.name}
                    {c.highlight && (
                      <span className="text-chart-1 ml-2 text-xs font-bold">
                        Best value
                      </span>
                    )}
                  </td>
                  <td className="py-3">{c.base}</td>
                  <td className="py-3">{c.ai}</td>
                  <td className="py-3 font-bold">{c.total}</td>
                  <td className="py-3">{c.setup}</td>
                  <td className="py-3">{c.technical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="text-3xl leading-tight tracking-tight text-center md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="divide-y">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <p className="text-muted-foreground text-lg">
          Clawdi is the only OpenClaw service that includes everything — AI
          models, app integrations, and privacy — for one transparent price.
        </p>
        <Button variant="cta" className="h-12 px-8" asChild>
          <Link href="/download">Human Setup Service (Free)</Link>
        </Button>
      </div>
    </section>
  );
};

// ── Components ─────────────────────────────────────────

const PricingCard = ({
  plan,
  className,
}: {
  plan: Plan;
  className?: string;
}) => {
  const isClawdi = plan.type === 'clawdi';

  return (
    <Card
      className={cn(
        'relative overflow-hidden shadow-none',
        isClawdi &&
          'before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-tr before:from-[var(--chart-1)]/10 before:via-[var(--chart-2)] before:to-[var(--chart-3)] before:mask-b-from-40% before:mask-b-to-80%',
        isClawdi &&
          'after:bg-card after:absolute after:inset-[1px] after:rounded-[calc(var(--radius)-1px)]',
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="flex h-full items-center justify-between gap-6 lg:flex-col lg:items-start">
          <CardHeader className="flex-1 gap-4">
            <CardTitle className="text-3xl tracking-tight md:text-4xl">
              {plan.name}
            </CardTitle>
            <CardDescription className="text-base leading-snug md:text-lg lg:text-xl">
              {plan.subtitle}
            </CardDescription>
            {plan.highlight && (
              <span className="inline-block w-fit rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium text-green-600">
                {plan.highlight}
              </span>
            )}
          </CardHeader>

          <CardContent className="flex flex-col items-baseline gap-1 font-medium tracking-tight md:flex-row">
            <span className="font-azeret-mono text-4xxl leading-none md:text-5xl lg:text-6xl">
              {typeof plan.price.monthly === 'number'
                ? `$${plan.price.monthly}`
                : plan.price.monthly}
            </span>
            {typeof plan.price.monthly === 'number' && (
              <span className="text-muted-foreground text-lg md:text-xl">
                / month
              </span>
            )}
          </CardContent>
        </div>
        <CardFooter>
          <Button
            variant={isClawdi ? 'cta' : 'outline'}
            className="h-12 w-full"
            asChild
          >
            <Link href={plan.button.href}>{plan.button.text}</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

const FeatureValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === 'boolean') {
    return (
      <div
        className={cn(
          'flex size-5.5 items-center justify-center rounded-full',
          value ? 'bg-secondary' : 'bg-muted',
        )}
      >
        {value ? <Check className="size-3.5" /> : <Minus className="size-3.5" />}
      </div>
    );
  }
  return (
    <span className="text-accent-foreground text-sm">{value}</span>
  );
};

const FeatureComparison = ({ layout = 'mobile' }: { layout?: 'mobile' | 'desktop' }) => {
  if (layout === 'mobile') {
    return (
      <div className="space-y-14">
        {Object.entries(CATEGORY_CONFIG).map(([key, info]) => {
          const k = key as keyof typeof CATEGORY_CONFIG;
          return (
            <div key={key} className="space-y-5.5">
              <div className="flex items-center gap-1.5">
                <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                  <info.icon className="size-4.5" />
                </div>
                <h3>{info.name}</h3>
              </div>
              <div>
                {PLANS[0].features[k].map((f, fi) => (
                  <div key={fi} className="flex flex-col gap-2 border-b py-4">
                    <span className="text-foreground font-medium">{f.name}</span>
                    <div className="grid grid-cols-2 gap-4">
                      {PLANS.map((plan, pi) => (
                        <div key={pi} className="flex flex-col gap-1">
                          <span className="text-muted-foreground text-xs">{plan.name}</span>
                          <FeatureValue value={plan.features[k][fi].value} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-14">
      {Object.entries(CATEGORY_CONFIG).map(([key, info]) => {
        const k = key as keyof typeof CATEGORY_CONFIG;
        return (
          <div key={key}>
            <div className="flex items-center gap-1.5 ps-6 pb-5.5">
              <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                <info.icon className="size-4.5" />
              </div>
              <h3>{info.name}</h3>
            </div>
            {PLANS[0].features[k].map((f, fi) => (
              <div
                key={fi}
                className={cn(
                  'grid border-t py-4 lg:grid-cols-3',
                  fi === 0 && 'border-t-0',
                )}
              >
                <span className="inline-flex items-center ps-6 font-medium">{f.name}</span>
                <div className="col-span-2 grid grid-cols-2">
                  {PLANS.map((plan, pi) => (
                    <div key={pi} className="flex items-center">
                      <FeatureValue value={plan.features[k][fi].value} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-medium">{question}</span>
        <ChevronDown
          className={cn(
            'text-muted-foreground size-5 shrink-0 transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default PricingPage;
