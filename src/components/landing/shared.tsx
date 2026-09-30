import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small uppercase label that sits above section headings. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm font-bold uppercase tracking-[0.1em] text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Bullet with a check mark, used in feature lists. */
export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-base text-slate-700">
      <Check
        className="mt-0.5 size-5 shrink-0 text-primary"
        strokeWidth={2.4}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}

/** Dotted background texture used behind product previews. */
export const dotGrid =
  "bg-[radial-gradient(#D5D2F4_1.2px,transparent_1.2px)] [background-size:22px_22px]";

/** Initials avatar used in the product previews. */
export function Initials({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-bold",
        className
      )}
    >
      {initials}
    </span>
  );
}

/** Sample people shown in the product previews. */
export const sampleInterns = [
  {
    name: "Amara Okafor",
    initials: "AO",
    domain: "Design",
    progress: 82,
    status: "Active",
    avatar: "bg-[#FDE3CF] text-[#8A3B0A]",
  },
  {
    name: "Tobi Adeyemi",
    initials: "TA",
    domain: "Engineering",
    progress: 64,
    status: "Active",
    avatar: "bg-blue-100 text-blue-900",
  },
  {
    name: "Zainab Musa",
    initials: "ZM",
    domain: "Marketing",
    progress: 35,
    status: "Active",
    avatar: "bg-[#E0F2E9] text-green-900",
  },
  {
    name: "David Eze",
    initials: "DE",
    domain: "Finance",
    progress: 100,
    status: "Completed",
    avatar: "bg-purple-100 text-purple-900",
  },
] as const;
