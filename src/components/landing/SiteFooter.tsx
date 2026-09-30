import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "support@interneefy.com", href: "mailto:support@interneefy.com" },
      { label: "Log in", href: "/login" },
      { label: "Sign up", href: "/signup" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-slate-300">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-4 pb-10 pt-[72px] sm:px-8 lg:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Interneefy home" className="self-start">
              <Image
                src="/logo-wordmark-white.svg"
                alt="Interneefy"
                width={168}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-[300px] text-[15px] leading-relaxed text-slate-400">
              Transforming internship management, one company at a time.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3.5 text-[15px]">
              <p className="text-sm font-bold text-white">{column.title}</p>
              {column.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Interneefy. All rights reserved.</p>
          <p>Made for HR teams, supervisors and interns.</p>
        </div>
      </div>
    </footer>
  );
}
