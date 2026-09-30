import { Initials } from "./shared";

export default function SiwesBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-8 lg:px-20 lg:pb-28">
        <div className="relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[28px] bg-foreground px-6 py-12 text-white sm:px-12 lg:grid-cols-[1fr_400px] lg:gap-16 lg:px-16 lg:py-14">
          <div
            aria-hidden
            className="absolute -right-36 -top-44 size-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(72,60,200,0.6),rgba(72,60,200,0))]"
          />
          <div className="relative flex flex-col gap-[18px]">
            <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#B4AEF5]">
              SIWES &amp; Industrial Training
            </p>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] lg:text-[40px]">
              Running SIWES or IT placements? Interneefy fits right in.
            </h2>
            <p className="max-w-[560px] text-lg leading-relaxed text-slate-300">
              Track each student’s tasks through their placement and give the
              structured evaluations their institution expects.
            </p>
          </div>

          {/* Decorative placement card */}
          <div
            aria-hidden
            className="relative flex flex-col gap-3.5 rounded-[18px] bg-white p-[22px] text-foreground"
          >
            <div className="flex items-center gap-3">
              <Initials
                initials="ZM"
                className="size-10 bg-[#E0F2E9] text-[13px] text-green-900"
              />
              <div>
                <p className="text-[15px] font-bold">Zainab Musa</p>
                <p className="text-[13px] text-slate-500">
                  SIWES student · Marketing
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-[10px] bg-slate-50 px-3 py-2.5">
                <p className="text-[11px] text-slate-500">Start date</p>
                <p className="text-sm font-semibold">Jul 1, 2026</p>
              </div>
              <div className="rounded-[10px] bg-slate-50 px-3 py-2.5">
                <p className="text-[11px] text-slate-500">End date</p>
                <p className="text-sm font-semibold">Dec 18, 2026</p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[13px]">
                <span className="text-slate-600">Supervisor · Kemi Bello</span>
                <span className="font-semibold">35%</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-100">
                <div className="h-1.5 w-[35%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
