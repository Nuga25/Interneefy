import { cn } from "@/lib/utils";
import { Eyebrow } from "./shared";

const steps = [
  {
    title: "Create your company workspace",
    body: "Sign up as an admin, name your company and add your logo. Your data stays in its own private workspace.",
  },
  {
    title: "Add supervisors and interns",
    body: "Set each intern’s domain, dates and supervisor. Everyone gets their login details by email automatically.",
  },
  {
    title: "Assign and track tasks",
    body: "Supervisors set priorities and due dates. Interns update status as they work, and you see progress live.",
  },
  {
    title: "Evaluate performance",
    body: "Score technical skills, communication and teamwork, add comments, and spot your future hires.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y border-slate-200 bg-white"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-20 sm:px-8 lg:gap-16 lg:px-20 lg:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
          <div className="flex max-w-[640px] flex-col gap-3.5">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground lg:text-5xl">
              From sign-up to final evaluation in four steps.
            </h2>
          </div>
          <p className="max-w-[400px] text-lg leading-relaxed text-slate-600">
            No spreadsheets, no scattered messages. Everyone gets their own
            dashboard from day one.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-x-6 top-6 hidden h-0.5 bg-[repeating-linear-gradient(90deg,#C9C5F2_0px,#C9C5F2_6px,transparent_6px,transparent_12px)] lg:block"
          />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col gap-5">
              <span
                className={cn(
                  "flex size-12 items-center justify-center rounded-[14px] text-lg font-bold",
                  index === 0
                    ? "bg-primary text-white"
                    : "border-2 border-primary bg-white text-primary"
                )}
              >
                {index + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[21px] font-bold tracking-[-0.015em] text-foreground">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
