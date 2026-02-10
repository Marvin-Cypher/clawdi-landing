import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="section-padding container">
      <div className="flex w-fit items-center rounded-full border p-1 text-xs">
        <span className="bg-muted rounded-full px-3 py-1">Our Mission</span>
        <span className="px-3">OpenClaw for Everyone</span>
      </div>

      <h1 className="my-5 text-5xl leading-none tracking-tight lg:text-7xl">
        AI assistants shouldn&apos;t require
        <br className="hidden sm:block" />
        a DevOps team.
      </h1>

      <p className="text-muted-foreground leading-snug md:text-lg lg:text-xl">
        OpenClaw is an incredible open-source AI assistant platform — a self-hosted,
        multi-channel gateway that connects to WhatsApp, Telegram, Slack, Discord,
        and 20+ messaging channels. It routes conversations to AI agents that can
        read your email, manage your calendar, research the web, and automate your
        workflows.
        <br />
        <br />
        The problem? Setting it up takes hours of server configuration, OAuth flows,
        and API key management. Clawdi fixes that. We give you a fully managed OpenClaw
        instance with frontier AI models included, hardware-level privacy, and a
        15-minute white-glove setup call. All for $20/mo.
      </p>

      <Image
        src="/images/about/hero.webp"
        alt="Clawdi"
        width={1920}
        height={1280}
        priority
        className="mt-16 aspect-video object-cover object-top"
      />
    </section>
  );
}
