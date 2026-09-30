import { Building2, GraduationCap, UserCheck } from "lucide-react";
import { Eyebrow } from "./shared";

const roles = [
  {
    title: "HR & admins",
    icon: Building2,
    body: "Set up the company, add your team and oversee the whole program from one dashboard.",
    workspace: ["Dashboard", "Interns", "Supervisors", "Settings"],
  },
  {
    title: "Supervisors",
    icon: UserCheck,
    body: "Assign tasks, follow each intern’s progress and submit evaluations without chasing updates.",
    workspace: ["Dashboard", "My Interns", "Assigned Tasks", "Evaluations"],
  },
  {
    title: "Interns",
    icon: GraduationCap,
    body: "Know exactly what’s due, update progress as you go and read your supervisor’s feedback.",
    workspace: ["My tasks", "My Profile & Feedback"],
  },
];

export default function Roles() {
  return (
    <section id="who-its-for" className="scroll-mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-20 sm:px-8 lg:gap-16 lg:px-20 lg:py-28">
        <div className="flex flex-col items-center gap-3.5 text-center">
          <Eyebrow>Who it’s for</Eyebrow>
          <h2 className="max-w-[760px] text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground lg:text-5xl">
            A dashboard for everyone in the program.
          </h2>
          <p className="max-w-[560px] text-lg leading-relaxed text-slate-600">
            Each person signs in and sees exactly what they need — nothing
            more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map(({ title, icon: Icon, body, workspace }) => (
            <div
              key={title}
              className="flex flex-col gap-5 rounded-[20px] border border-slate-200 bg-slate-50 p-8"
            >
              <span className="flex size-[52px] items-center justify-center rounded-[14px] bg-primary">
                <Icon className="size-[26px] text-white" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold tracking-[-0.02em] text-foreground">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">{body}</p>
              </div>
              <div className="mt-auto flex flex-col gap-2.5 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                  Their workspace
                </p>
                <ul className="flex flex-wrap gap-2">
                  {workspace.map((item) => (
                    <li
                      key={item}
                      className="flex h-[30px] items-center rounded-lg border border-slate-200 bg-white px-3 text-[13px] font-medium text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
