import { Hexagon } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-azure-500 to-violet-500 shadow-[0_8px_24px_-6px_rgba(59,130,246,0.7)]">
        <Hexagon className="h-5 w-5 text-white" strokeWidth={2.2} />
      </span>
      <span className="text-lg font-extrabold tracking-tight">
        Dmax<span className="text-azure-400">Lab</span>
      </span>
    </span>
  );
}
