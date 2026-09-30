import { BarChart3, ChevronDown, ClipboardCheck, Plus, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CheckItem, Eyebrow, Initials, dotGrid } from "./shared";

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-20 px-4 py-20 sm:px-8 lg:gap-24 lg:px-20 lg:py-28">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <Eyebrow>Features</Eyebrow>
          <h2 className="max-w-[760px] text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground lg:text-5xl">
            Everything you need to run a great internship program.
          </h2>
        </div>

        <FeatureRow
          icon={ClipboardCheck}
          title="Assign work and watch it move from To Do to Approved."
          body="Supervisors create tasks for each intern and follow them through every stage, so nobody has to ask what’s left."
          points={[
            "Priorities, categories and due dates on every task",
            "Interns update status as they work",
            "Filter by intern, status or priority",
          ]}
          preview={<TasksPreview />}
        />

        <FeatureRow
          reverse
          icon={Star}
          title="Structured evaluations your interns can learn from."
          body="Replace vague end-of-program reviews with consistent scores and written feedback — and identify top talent for future hires."
          points={[
            "Score technical skills, communication and teamwork out of 10",
            "Full evaluation history for every intern",
            "Interns see their feedback on their own profile",
          ]}
          preview={<EvaluationPreview />}
        />

        <FeatureRow
          icon={BarChart3}
          title="Your whole program, at a glance."
          body="Say goodbye to scattered spreadsheets. Every intern and supervisor lives in one secure place, with the numbers HR actually needs."
          points={[
            "Enrollment over time and interns by domain",
            "Pair each intern with a supervisor",
            "Track start and end dates for every placement",
          ]}
          preview={<OversightPreview />}
        />
      </div>
    </section>
  );
}

function FeatureRow({
  icon: Icon,
  title,
  body,
  points,
  preview,
  reverse = false,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
  preview: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-10 lg:gap-20",
        reverse ? "lg:grid-cols-[1fr_480px]" : "lg:grid-cols-[480px_1fr]"
      )}
    >
      <div className={cn("flex flex-col gap-[22px]", reverse && "lg:order-2")}>
        <span className="flex size-12 items-center justify-center rounded-xl bg-[#EEEDFB]">
          <Icon className="size-6 text-primary" aria-hidden />
        </span>
        <h3 className="text-balance text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-foreground lg:text-4xl">
          {title}
        </h3>
        <p className="text-lg leading-relaxed text-slate-600">{body}</p>
        <ul className="flex flex-col gap-3">
          {points.map((point) => (
            <CheckItem key={point}>{point}</CheckItem>
          ))}
        </ul>
      </div>
      <div className={cn(reverse && "lg:order-1")} aria-hidden>
        {preview}
      </div>
    </div>
  );
}

/* ---------- Previews (decorative copies of real screens) ---------- */

const tasks = [
  {
    title: "Onboarding flow wireframes",
    meta: "Design · Amara Okafor · Due Oct 3",
    priority: "High",
    status: "Approved",
  },
  {
    title: "Set up the reporting API",
    meta: "Engineering · Tobi Adeyemi · Due Oct 7",
    priority: "Medium",
    status: "In Progress",
  },
  {
    title: "Draft Q4 social calendar",
    meta: "Marketing · Zainab Musa · Due Oct 10",
    priority: "Low",
    status: "To Do",
  },
  {
    title: "Reconcile September expenses",
    meta: "Finance · David Eze · Due Sep 30",
    priority: "Medium",
    status: "Completed",
  },
] as const;

const priorityStyles: Record<string, string> = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-amber-100 text-amber-800",
  Low: "bg-slate-100 text-slate-700",
};

const statusStyles: Record<string, string> = {
  Approved: "bg-[#EEEDFB] text-[#3A2FA8]",
  "In Progress": "bg-blue-100 text-blue-800",
  "To Do": "bg-slate-100 text-slate-700",
  Completed: "bg-green-100 text-green-800",
};

function TasksPreview() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#EEEDFB] p-4 sm:p-12">
      <div aria-hidden className={cn("absolute inset-0", dotGrid)} />
      <div className="relative flex flex-col gap-4 rounded-[18px] bg-white p-4 shadow-[0_30px_60px_-30px_rgba(30,24,110,0.4)] sm:p-[22px]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xl font-bold tracking-[-0.02em] text-foreground">
            Assigned Tasks
          </p>
          <span className="flex h-[34px] items-center gap-1.5 rounded-lg bg-primary px-3 text-[13px] font-semibold text-white">
            <Plus className="size-3.5" strokeWidth={2.6} />
            <span className="hidden sm:inline">Create New Task</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["All Interns", "All Status", "All Priorities"].map((filter) => (
            <span
              key={filter}
              className="flex h-[30px] items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 text-xs font-medium text-slate-700"
            >
              {filter}
              <ChevronDown className="size-3" strokeWidth={2.4} />
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-3.5"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  {task.title}
                </p>
                <p className="truncate text-xs text-slate-500">{task.meta}</p>
              </div>
              <span
                className={cn(
                  "hidden h-[22px] items-center rounded-md px-2 text-[11px] font-semibold sm:inline-flex",
                  priorityStyles[task.priority]
                )}
              >
                {task.priority}
              </span>
              <span
                className={cn(
                  "inline-flex h-[26px] w-[92px] shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  statusStyles[task.status]
                )}
              >
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const evaluationScores = [
  { label: "Technical Skills", value: 8 },
  { label: "Communication", value: 9 },
  { label: "Teamwork", value: 7 },
];

function EvaluationPreview() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-foreground p-4 sm:p-12 sm:pb-32 lg:min-h-[540px] lg:pb-12">
      <div
        aria-hidden
        className="absolute -bottom-52 -left-32 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(72,60,200,0.55),rgba(72,60,200,0))]"
      />
      <div className="relative flex max-w-[440px] flex-col gap-[18px] rounded-[18px] bg-white p-5 sm:p-6">
        <p className="text-lg font-bold tracking-[-0.015em] text-foreground">
          Submit Intern Evaluation
        </p>
        <div className="flex h-10 items-center justify-between rounded-lg border border-slate-200 px-3 text-sm text-foreground">
          <span className="flex items-center gap-2">
            <Initials
              initials="TA"
              className="size-[22px] bg-blue-100 text-[9px] text-blue-900"
            />
            Tobi Adeyemi
          </span>
          <ChevronDown className="size-3.5 text-slate-500" strokeWidth={2.4} />
        </div>
        {evaluationScores.map((score) => (
          <div key={score.label} className="flex flex-col gap-2">
            <div className="flex justify-between text-[13px] font-semibold text-foreground">
              <span>{score.label}</span>
              <span className="text-primary">{score.value} / 10</span>
            </div>
            <div className="relative h-1.5 rounded-full bg-slate-100">
              <div
                className="h-1.5 rounded-full bg-primary"
                style={{ width: `${score.value * 10}%` }}
              />
              <span
                className="absolute -top-1.5 -ml-[9px] size-[18px] rounded-full border-2 border-primary bg-white"
                style={{ left: `${score.value * 10}%` }}
              />
            </div>
          </div>
        ))}
        <div className="rounded-lg border border-slate-200 px-3 py-2.5 text-[13px] leading-normal text-slate-700">
          Delivered the reporting API ahead of schedule. Next step: lead a code
          review.
        </div>
        <span className="flex h-10 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white">
          Submit evaluation
        </span>
      </div>
      <div className="relative mt-4 flex w-full sm:absolute sm:bottom-6 sm:right-6 sm:mt-0 sm:w-[220px] flex-col gap-1.5 rounded-[18px] bg-primary p-5 text-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)] lg:bottom-auto lg:right-11 lg:top-[300px]">
        <p className="text-[13px] font-semibold text-[#DAD6FA]">Overall Score</p>
        <p className="text-5xl font-extrabold leading-none tracking-[-0.04em]">
          8.0
        </p>
        <p className="text-[13px] text-[#DAD6FA]">out of 10 · Excellent</p>
      </div>
    </div>
  );
}

const enrollment = [
  { month: "Apr", height: 48 },
  { month: "May", height: 72 },
  { month: "Jun", height: 60 },
  { month: "Jul", height: 110 },
  { month: "Aug", height: 96 },
  { month: "Sep", height: 150 },
];

const domains = [
  { name: "Engineering", count: 9, color: "bg-primary" },
  { name: "Design", count: 6, color: "bg-[#6D62D9]" },
  { name: "Marketing", count: 5, color: "bg-[#948BE6]" },
  { name: "Finance", count: 4, color: "bg-[#B9B3F0]" },
];

function OversightPreview() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#EEEDFB] p-4 sm:p-12 lg:min-h-[540px]">
      <div aria-hidden className={cn("absolute inset-0", dotGrid)} />
      <div className="relative flex flex-col gap-4 sm:block">
        <div className="flex h-[300px] w-full max-w-[420px] flex-col gap-4 rounded-[18px] bg-white p-[22px] shadow-[0_30px_60px_-30px_rgba(30,24,110,0.4)]">
          <div>
            <p className="text-base font-bold text-foreground">
              Intern Enrollment Over Time
            </p>
            <p className="text-xs text-slate-500">New interns per month</p>
          </div>
          <div className="flex flex-1 items-end gap-3.5 border-b border-slate-200 pb-1">
            {enrollment.map((bar, index) => (
              <div
                key={bar.month}
                className={cn(
                  "flex-1 rounded-t-md rounded-b-sm",
                  index === enrollment.length - 1 ? "bg-primary" : "bg-[#C9C5F2]"
                )}
                style={{ height: bar.height }}
              />
            ))}
          </div>
          <div className="flex gap-3.5 text-[11px] text-slate-500">
            {enrollment.map((bar) => (
              <span key={bar.month} className="flex-1 text-center">
                {bar.month}
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-[300px] flex-col gap-3.5 rounded-[18px] bg-white p-[22px] shadow-[0_30px_60px_-24px_rgba(30,24,110,0.45)] sm:absolute sm:right-0 sm:top-44">
          <p className="text-base font-bold text-foreground">Interns by Domains</p>
          {domains.map((domain) => (
            <div key={domain.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[13px] text-foreground">
                <span>{domain.name}</span>
                <span className="font-semibold">{domain.count}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className={cn("h-2 rounded-full", domain.color)}
                  style={{ width: `${domain.count * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
