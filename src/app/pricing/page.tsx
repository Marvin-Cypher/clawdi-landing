'use client';

import {
  Activity,
  Brain,
  Check,
  Minus,
  Rocket,
  Server,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type PlanType = 'diy' | 'clawdi';

interface Plan {
  name: string;
  type: PlanType;
  icon: React.ElementType;
  price: {
    monthly: number | string;
  };
  subtitle: string;
  button: {
    text: string;
    variant: 'default' | 'outline' | 'cta';
    href: string;
  };
  features: {
    setup: {
      name: string;
      value: string | boolean;
    }[];
    included: {
      name: string;
      value: string | boolean;
    }[];
  };
}

const PLANS: Plan[] = [
  {
    name: 'Self-Host',
    type: 'diy',
    icon: Server,
    price: {
      monthly: 'Free',
    },
    subtitle: 'Run OpenClaw yourself on your own infrastructure',
    button: {
      text: 'View on GitHub',
      variant: 'outline',
      href: '#',
    },
    features: {
      setup: [
        { name: 'OpenClaw Gateway', value: true },
        { name: 'App connections (OAuth)', value: 'Manual setup' },
        { name: 'Server deployment', value: 'You manage' },
        { name: 'Setup time', value: '2-8 hours' },
        { name: 'Live setup support', value: false },
        { name: 'Confidential compute', value: false },
        { name: 'Automatic updates', value: false },
      ],
      included: [
        { name: 'AI model access', value: 'Bring your own keys' },
        { name: 'WhatsApp / Telegram / Slack', value: true },
        { name: 'Multi-agent routing', value: true },
        { name: 'Voice mode', value: true },
        { name: 'Companion apps (macOS/iOS/Android)', value: true },
        { name: 'Sandbox mode', value: true },
        { name: 'Community support', value: true },
      ],
    },
  },
  {
    name: 'Clawdi',
    type: 'clawdi',
    icon: Rocket,
    price: {
      monthly: 20,
    },
    subtitle: 'Everything managed. Just use your AI assistant.',
    button: {
      text: 'Human Setup Service',
      variant: 'default',
      href: '/download',
    },
    features: {
      setup: [
        { name: 'OpenClaw Gateway', value: true },
        { name: 'App connections (OAuth)', value: '1-click setup' },
        { name: 'Server deployment', value: 'Fully managed' },
        { name: 'Setup time', value: '15 minutes' },
        { name: 'Live setup support', value: true },
        { name: 'Confidential compute', value: true },
        { name: 'Automatic updates', value: true },
      ],
      included: [
        { name: 'AI model access', value: 'Claude + GPT-4 included' },
        { name: 'WhatsApp / Telegram / Slack', value: true },
        { name: 'Multi-agent routing', value: true },
        { name: 'Voice mode', value: true },
        { name: 'Companion apps (macOS/iOS/Android)', value: true },
        { name: 'Sandbox mode', value: true },
        { name: 'Priority support', value: true },
      ],
    },
  },
];

const CATEGORY_CONFIG = {
  setup: {
    name: 'Setup & Infrastructure',
    icon: Activity,
  },
  included: {
    name: 'Features & Support',
    icon: Brain,
  },
};

const PricingPage = () => {
  return (
    <section className="section-padding relative container space-y-15 md:space-y-20 lg:space-y-30">
      <div className="mx-auto max-w-4xl space-y-4 text-balance sm:text-center">
        <h1 className="md:text-6xxl text-5xl leading-none tracking-tight text-balance">
          Simple pricing. <br className="hidden sm:block" />
          <span className="text-gradient">No surprises.</span>
        </h1>

        <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
          OpenClaw is free and open source. Clawdi gives you a fully managed
          OpenClaw instance with AI models included — for $20/mo.
        </p>
      </div>

      {/* Desktop Pricing Table */}
      <div className="hidden overflow-x-auto lg:block">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-3 gap-6">
            <div className="p-0"></div>
            {PLANS.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
          <FeatureComparison layout="desktop" />
        </div>
      </div>

      {/* Mobile Pricing Cards */}
      <div className="lg:hidden">
        <div className="mb-8 grid gap-6">
          {PLANS.map((planItem) => (
            <PricingCard key={planItem.name} plan={planItem} />
          ))}
        </div>
        <FeatureComparison layout="mobile" />
      </div>
    </section>
  );
};

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
      <div
        className={cn(
          'relative z-10 flex h-full flex-col justify-between gap-6',
        )}
      >
        <div className="flex h-full items-center justify-between gap-6 lg:flex-col lg:items-start">
          <CardHeader className="flex-1 gap-4">
            <CardTitle className="text-3xl tracking-tight md:text-4xl">
              {plan.name}
            </CardTitle>
            <CardDescription className="text-base leading-snug md:text-lg lg:text-xl">
              {plan.subtitle}
            </CardDescription>
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
          `flex size-5.5 items-center justify-center rounded-full`,
          value ? 'bg-secondary' : 'bg-muted',
        )}
      >
        {value ? (
          <Check className={cn('size-3.5')} />
        ) : (
          <Minus className={cn('size-3.5')} />
        )}
      </div>
    );
  }

  return (
    <div>
      <span className="text-accent-foreground text-sm">{value}</span>
    </div>
  );
};

const FeatureComparison = ({
  layout = 'mobile',
}: {
  layout?: 'mobile' | 'desktop';
}) => {
  if (layout === 'mobile') {
    return (
      <div className="space-y-14">
        {Object.entries(CATEGORY_CONFIG).map(([categoryKey, categoryInfo]) => {
          const categoryKeyTyped = categoryKey as keyof typeof CATEGORY_CONFIG;
          return (
            <div key={categoryKey} className="space-y-5.5">
              <div className="flex items-center gap-1.5">
                <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                  <categoryInfo.icon className="size-4.5" />
                </div>
                <h3>{categoryInfo.name}</h3>
              </div>

              <div>
                {PLANS[0].features[categoryKeyTyped].map(
                  (feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex flex-col gap-2 border-b py-4"
                    >
                      <span className="text-foreground font-medium">
                        {feature.name}
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        {PLANS.map((plan, planIndex) => {
                          const planFeature =
                            plan.features[categoryKeyTyped][featureIndex];
                          return (
                            <div
                              key={planIndex}
                              className="flex flex-col gap-1"
                            >
                              <span className="text-muted-foreground text-xs">
                                {plan.name}
                              </span>
                              <FeatureValue value={planFeature.value} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="space-y-14">
      {Object.entries(CATEGORY_CONFIG).map(([categoryKey, categoryInfo]) => {
        const categoryKeyTyped = categoryKey as keyof typeof CATEGORY_CONFIG;

        return (
          <div key={categoryKey}>
            <div className="flex items-center gap-1.5 ps-6 pb-5.5">
              <div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
                <categoryInfo.icon className="size-4.5" />
              </div>
              <h3>{categoryInfo.name}</h3>
            </div>
            {PLANS[0].features[categoryKeyTyped].map(
              (feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={cn(
                    'grid border-t py-4 lg:grid-cols-3',
                    featureIndex === 0 && 'border-t-0',
                  )}
                >
                  <span className="inline-flex items-center ps-6 font-medium">
                    {feature.name}
                  </span>
                  <div className="col-span-2 grid grid-cols-2">
                    {PLANS.map((plan, planIndex) => {
                      const planFeature =
                        plan.features[categoryKeyTyped][featureIndex];
                      return (
                        <div key={planIndex} className="flex items-center">
                          <FeatureValue value={planFeature.value} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ),
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PricingPage;
