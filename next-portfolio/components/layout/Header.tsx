"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
          </Link>
        </div>

        <div className="flex items-center gap-x-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-muted-foreground transition-colors hover:text-primary"
          >
            Resumé
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-accent",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground transition-colors hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
