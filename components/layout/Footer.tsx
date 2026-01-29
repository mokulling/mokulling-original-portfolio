import { Mail, Github, Linkedin, Twitter, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const socialLinks = [
  {
    name: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
  },
  {
    name: "GitHub",
    href: SITE_CONFIG.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: SITE_CONFIG.twitter,
    icon: Twitter,
  },
  {
    name: "Phone",
    href: `tel:${SITE_CONFIG.phone}`,
    icon: Phone,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="sr-only">{link.name}</span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
