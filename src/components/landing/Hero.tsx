import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  LayoutDashboard,
  Settings,
  Sparkle,
  UserCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Initials, dotGrid, sampleInterns } from "./shared";

const highlights = [
  "Free to get started",
  "Set up in minutes",
  "SIWES & IT ready",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative backdrop */}
      <div
        aria-hidden
        className="absolute -right-52 top-5 hidden size-[940px] rounded-full bg-[#EEEDFB] lg:block"
      />
      <div
        aria-hidden
        className={cn(
          "absolute right-0 top-0 hidden h-[900px] w-[780px] opacity-80 lg:block",
          dotGrid
        )}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-4 pb-20 pt-12 sm:px-8 lg:grid-cols-[540px_1fr] lg:px-20 lg:pb-[88px] lg:pt-16">
        {/* Copy */}
        <div className="flex flex-col gap-7 lg:pt-7">
          <div className="inline-flex h-[34px] items-center gap-2 self-start rounded-full border border-[#DDDAF5] bg-white pl-2 pr-3.5 text-sm font-semibold text-[#3A2FA8]">
            <Sparkle className="size-[18px] text-primary" aria-hidden />
            The internship OS
          </div>

          <h1 className="text-balance text-[44px] font-extrabold leading-[1.04] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[68px] lg:leading-[1.02]">
            Manage, mentor and grow every intern.{" "}
            <span className="text-primary">In one place.</span>
          </h1>

          <p className="max-w-[500px] text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl">
            Interneefy gives HR teams and supervisors one workspace for the
            whole internship — adding interns, assigning tasks, tracking
            progress and running performance evaluations.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <Button
              asChild
              className="h-14 rounded-xl px-[26px] text-[17px] font-semibold shadow-[0_12px_28px_-12px_rgba(72,60,200,0.75)] [&_svg:not([class*='size-'])]:size-[18px]"
            >
              <Link href="/signup">
                Get started for free
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-xl border-slate-200 bg-white px-[22px] text-[17px] font-semibold text-foreground hover:bg-slate-50 hover:text-foreground"
            >
              <a href="#features">Explore features</a>
            </Button>
          </div>

          <ul className="mt-2 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[15px] font-medium text-slate-700"
              >
                <Check
                  className="size-[18px] text-green-700"
                  strokeWidth={2.4}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Product preview */}
        <DashboardPreview />
      </div>
    </section>
  );
}

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Interns", icon: Users },
  { label: "Supervisors", icon: UserCheck },
  { label: "Settings", icon: Settings },
];

const stats = [
  { label: "Currently enrolled", value: "24" },
  { label: "Team mentors", value: "6" },
  { label: "All-time enrollment", value: "58" },
];

const scores = [
  { label: "Technical Skills", value: 8 },
  { label: "Communication", value: 9 },
  { label: "Teamwork", value: 7 },
];

/** Illustrative copy of the admin dashboard. Decorative, so hidden from screen readers. */
function DashboardPreview() {
  return (
    <div aria-hidden className="relative sm:pb-24 lg:pb-0 lg:pt-3">
      <div className="relative flex w-full max-w-[700px] overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_40px_80px_-32px_rgba(30,24,110,0.35)] lg:ml-5">
        {/* Sidebar */}
        <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-slate-100 bg-slate-50 px-3.5 py-5 sm:flex">
          <Image
            src="/logo-wordmark.svg"
            alt=""
            width={112}
            height={32}
            className="mb-4 ml-1 h-8 w-auto"
          />
          {sidebarItems.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={cn(
                "flex h-9 items-center gap-2.5 rounded-lg px-2.5 text-[13px]",
                active
                  ? "bg-[#EEEDFB] font-semibold text-[#3A2FA8]"
                  : "font-medium text-slate-600"
              )}
            >
              <Icon className="size-4" />
              {label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col gap-[18px] p-4 sm:p-6">
          <div>
            <p className="text-[22px] font-bold tracking-[-0.02em] text-foreground">
              Dashboard
            </p>
            <p className="text-[13px] text-slate-500">
              Here’s your internship program overview.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1.5 rounded-xl border border-slate-200 p-3 sm:p-3.5"
              >
                <p className="text-[11px] font-medium text-slate-500 sm:text-xs">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-[26px]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 text-[13px]">
            <div className="grid grid-cols-[1.5fr_1fr_0.8fr] bg-slate-50 px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-500 sm:grid-cols-[1.5fr_1fr_1fr_0.8fr]">
              <span>Intern</span>
              <span className="hidden sm:block">Domain</span>
              <span>Progress</span>
              <span>Status</span>
            </div>
            {sampleInterns.map((intern) => (
              <div
                key={intern.name}
                className="grid grid-cols-[1.5fr_1fr_0.8fr] items-center gap-2 border-t border-slate-100 px-3.5 py-2.5 sm:grid-cols-[1.5fr_1fr_1fr_0.8fr]"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <Initials
                    initials={intern.initials}
                    className={cn("size-[30px] text-[11px]", intern.avatar)}
                  />
                  <span className="truncate font-semibold text-foreground">
                    {intern.name}
                  </span>
                </div>
                <span className="hidden text-slate-600 sm:block">
                  {intern.domain}
                </span>
                <div className="flex items-center gap-2">
                  <div className="hidden h-1.5 w-16 rounded-full bg-slate-100 md:block">
                    <div
                      className="h-1.5 rounded-full bg-primary"
                      style={{ width: `${intern.progress}%` }}
                    />
                  </div>
                  <span className="font-semibold text-foreground">
                    {intern.progress}%
                  </span>
                </div>
                <span>
                  <span
                    className={cn(
                      "inline-flex h-[22px] items-center rounded-full px-2 text-[11px] font-semibold",
                      intern.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-slate-100 text-slate-700"
                    )}
                  >
                    {intern.status}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating evaluation card */}
      <div className="absolute bottom-0 left-2 hidden w-[260px] flex-col gap-3 rounded-2xl bg-foreground p-[18px] text-white shadow-[0_28px_56px_-22px_rgba(15,23,41,0.6)] sm:flex sm:w-[280px] lg:-left-6 lg:bottom-auto lg:top-[420px]">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-semibold text-[#C7C3F5]">
            Evaluation · Tobi A.
          </p>
          <span className="rounded-md bg-primary px-2 py-0.5 text-xs font-bold">
            8.0 / 10
          </span>
        </div>
        <div className="flex flex-col gap-2 text-[13px]">
          {scores.map((score) => (
            <div key={score.label} className="flex items-center gap-2.5">
              <span className="w-[104px] text-slate-300">{score.label}</span>
              <div className="h-1.5 flex-1 rounded-full bg-[#273151]">
                <div
                  className="h-1.5 rounded-full bg-[#9D95F2]"
                  style={{ width: `${score.value * 10}%` }}
                />
              </div>
              <span className="w-4 text-right font-semibold">{score.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating task toast */}
      <div className="absolute right-2 top-[62%] hidden w-[290px] items-center gap-3 rounded-[14px] border border-slate-200 bg-white px-4 py-3.5 shadow-[0_24px_48px_-24px_rgba(30,24,110,0.35)] md:flex lg:left-[430px] lg:right-auto lg:top-[480px]">
        <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-green-100">
          <Check className="size-[18px] text-green-700" strokeWidth={2.6} />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">Task approved</p>
          <p className="text-xs text-slate-500">
            Onboarding flow wireframes · Amara O.
          </p>
        </div>
      </div>
    </div>
  );
}
