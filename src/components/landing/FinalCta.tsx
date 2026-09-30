import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-8 lg:px-20 lg:pb-28">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[28px] bg-primary px-6 py-16 text-center text-white sm:py-20 lg:min-h-[380px] lg:justify-center">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.16)_1.2px,transparent_1.2px)] [background-size:22px_22px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-64 -left-40 size-[560px] rounded-full bg-[#3A2FA8]"
          />
          <div
            aria-hidden
            className="absolute -right-32 -top-60 size-[480px] rounded-full bg-[#5A4FD6]"
          />
          <h2 className="relative max-w-[760px] text-balance text-4xl font-extrabold leading-[1.06] tracking-[-0.035em] lg:text-[52px]">
            Ready to transform your internship program?
          </h2>
          <p className="relative max-w-[520px] text-lg leading-normal text-[#E4E1FB] lg:text-[19px]">
            Create your company account and add your team in under five
            minutes.
          </p>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-14 rounded-xl bg-white px-[26px] text-[17px] font-bold text-[#2E2590] hover:bg-white/90 [&_svg:not([class*='size-'])]:size-[18px]"
            >
              <Link href="/signup">
                Start your free account
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-xl border-white/40 bg-transparent px-[22px] text-[17px] font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/login">Log in</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
