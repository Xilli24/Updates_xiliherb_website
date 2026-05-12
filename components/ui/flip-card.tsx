'use client';

import { cn } from '@/lib/utils';
import {
  Code2, Copy, Rocket, Zap,
  Wheat, FlaskConical, Layers, Leaf, Recycle, Droplets, Globe, Microscope, Sprout, Atom,
} from 'lucide-react';
import { useState } from 'react';

const ICON_MAP = {
  wheat: Wheat,
  flask: FlaskConical,
  layers: Layers,
  leaf: Leaf,
  recycle: Recycle,
  droplets: Droplets,
  globe: Globe,
  microscope: Microscope,
  sprout: Sprout,
  atom: Atom,
  rocket: Rocket,
  zap: Zap,
} as const;

export type FlipCardIconName = keyof typeof ICON_MAP;

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  iconName?: FlipCardIconName;
}

export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = 'Launch your idea in record time',
  description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
  features = [
    'Copy & Paste Ready',
    'Developer-First',
    'MVP Optimized',
    'Zero Setup Required',
  ],
  color = '#5BAC2E',
  iconName = 'rocket',
}: CardFlipProps) {
  const Icon = ICON_MAP[iconName];
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        ['--color-primary' as string]: color,
      }}
      className="group relative h-[320px] w-full max-w-[270px] [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Front */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-2xl',
            'bg-gradient-to-br from-[#0d1b2e] via-[#13243a] to-[#1a3a5c]',
            'border border-white/10',
            'shadow-lg',
            'transition-all duration-700',
            'group-hover:shadow-2xl',
            'group-hover:border-primary/40',
            isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          <div className="from-primary/20 absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center pt-20">
            <div className="relative flex h-[100px] w-[200px] flex-col items-center justify-center gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-3 w-full rounded-sm',
                    'from-primary/20 via-primary/30 to-primary/20 bg-gradient-to-r',
                    'animate-[flipCardSlideIn_2s_ease-in-out_infinite]',
                    'opacity-0',
                  )}
                  style={{
                    width: `${60 + (i * 7) % 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    marginLeft: `${(i * 5) % 20}%`,
                  }}
                />
              ))}

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={cn(
                    'h-12 w-12 rounded-xl',
                    'from-primary via-primary/90 to-primary/80 bg-gradient-to-br',
                    'flex items-center justify-center',
                    'shadow-primary/25 shadow-lg',
                    'animate-pulse',
                    'transition-all duration-500 group-hover:scale-110 group-hover:rotate-12',
                  )}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="text-lg leading-snug font-semibold tracking-tight text-white transition-all duration-500 ease-out group-hover:translate-y-[-4px]">
                  {title}
                </h3>
                <p className="line-clamp-2 text-sm tracking-tight text-slate-400 transition-all delay-[50ms] duration-500 ease-out group-hover:translate-y-[-4px]">
                  {subtitle}
                </p>
              </div>
              <div className="group/icon relative">
                <div
                  className={cn(
                    'absolute inset-[-8px] rounded-lg transition-opacity duration-300',
                    'from-primary/20 via-primary/10 bg-gradient-to-br to-transparent',
                    'opacity-0 group-hover/icon:opacity-100',
                  )}
                />
                <Zap className="text-primary relative z-10 h-5 w-5 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-2xl p-5',
            'bg-gradient-to-br from-white via-slate-50 to-slate-100',
            'border border-slate-200',
            'shadow-lg',
            'flex flex-col',
            'transition-all duration-700',
            'group-hover:shadow-xl',
            'group-hover:border-primary/20',
            !isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          <div className="from-primary/5 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-blue-500/5" />

          <div className="relative z-10 flex-1 space-y-5">
            <div className="space-y-2">
              <div className="mb-2 flex items-center gap-2">
                <div className="from-primary via-primary/90 to-primary/80 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg leading-snug font-semibold tracking-tight text-zinc-900 transition-all duration-500 ease-out group-hover:translate-y-[-2px]">
                  {title}
                </h3>
              </div>
              <p className="line-clamp-3 text-sm tracking-tight text-zinc-600 transition-all duration-500 ease-out group-hover:translate-y-[-2px]">
                {description}
              </p>
            </div>

            <div className="space-y-2.5">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-700 transition-all duration-500"
                    style={{
                      transform: isFlipped ? 'translateX(0)' : 'translateX(-10px)',
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                  >
                    <div className="bg-primary/10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md">
                      <IconComponent className="text-primary h-3 w-3" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
