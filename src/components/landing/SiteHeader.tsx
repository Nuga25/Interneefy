import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#who-its-for", label: "Who it’s for" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-20">
        <Link href="/" aria-label="Interneefy home" className="flex items-center">
          <Image
            src="/logo-wordmark.svg"
            alt="Interneefy"
            width={154}
            height={44}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-9 text-[15px] font-medium md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            asChild
            variant="ghost"
            className="h-11 px-3 text-[15px] font-semibold text-foreground hover:bg-slate-100 hover:text-foreground sm:px-4"
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            asChild
            className="h-11 rounded-[10px] px-4 text-[15px] font-semibold sm:px-5"
          >
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
