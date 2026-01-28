"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  FileCode,
  Server,
  GitBranch,
  Component,
  Database,
  FileCode2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const skills = [
  { name: "HTML", Icon: Code },
  { name: "CSS", Icon: Palette },
  { name: "JavaScript", Icon: FileCode },
  { name: "Node.js", Icon: Server },
  { name: "Git", Icon: GitBranch },
  { name: "React", Icon: Component },
  { name: "MySQL", Icon: Database },
  { name: "TypeScript", Icon: FileCode2 },
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m <span className="text-primary">Matt Kulling</span>
        </h1>
        <h2 className="mb-6 text-2xl text-muted-foreground sm:text-3xl">
          I&apos;m a <span className="font-semibold text-foreground">web developer</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          I like concepting and creating cool things for the web.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/portfolio">
            <Button size="lg">View My Work</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
        <div className="grid gap-8 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-4"
          >
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-lg border-4 border-border shadow-xl">
              <Image
                src="/images/matt-headshot.jpg"
                alt="Matt Kulling"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-8"
          >
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a full stack web developer interested in the intersection between
                art and tech. I find the most joy in creating and learning about
                technologies that not only work seamlessly, but look good at the same
                time.
              </p>
              <p>
                Tech as a field interests me because it&apos;s an opportunity to continue
                learning, there&apos;s always a new tech stack or technology you can use to
                make your workflow easier, and taking on those new and exciting
                challenges is what keeps me going.
              </p>
              <p>
                Happy to connect with anyone working to make something pretty on the
                front end and useful on the back end. I have extensive experience in
                marketing, working with product and engineering teams to create retention
                campaigns, coding email templates and working on landing pages.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-8 text-center text-3xl font-bold">Technologies I Use</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
              >
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="rounded-lg bg-accent p-8 text-center"
      >
        <h2 className="mb-4 text-2xl font-bold">Let&apos;s Work Together</h2>
        <p className="mb-6 text-muted-foreground">
          I&apos;m always interested in hearing about new projects and opportunities.
        </p>
        <Link href="/contact">
          <Button size="lg">Contact Me</Button>
        </Link>
      </motion.section>
    </div>
  );
}
