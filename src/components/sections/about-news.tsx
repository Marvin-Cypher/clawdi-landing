import { Quote } from 'lucide-react';

const highlights = [
  {
    id: 1,
    label: 'The Vision',
    title:
      'OpenClaw is the most powerful open-source AI assistant framework with 180K+ GitHub stars. Clawdi removes the only barrier left: setup complexity. 15 minutes to a fully working AI assistant.',
  },
  {
    id: 2,
    label: 'The Difference',
    title:
      'With hardware-level privacy and a managed OpenClaw instance for $20/mo, Clawdi makes personal AI assistants accessible to everyone — not just developers with spare servers.',
  },
  {
    id: 3,
    label: 'The Experience',
    title:
      'An AI assistant you message on WhatsApp that actually reads your email, manages your calendar, and respects your privacy. Clawdi turns the promise of AI into daily reality.',
  },
];

export default function AboutNews() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container">
        <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
          Why Clawdi exists
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.id} className="space-y-3">
              <div className="flex items-center gap-2">
                <Quote className="text-accent-coral size-5" />
                <span className="text-accent-coral text-sm font-semibold uppercase tracking-wider">
                  {item.label}
                </span>
              </div>

              <p className="text-accent-foreground text-lg leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
