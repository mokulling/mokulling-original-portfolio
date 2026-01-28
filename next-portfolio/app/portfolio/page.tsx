"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          My Portfolio
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          A collection of projects I&apos;ve worked on, showcasing my skills in web
          development, API integration, and full-stack applications.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold">Technologies used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Site
                    </Button>
                  </Link>
                )}
                {project.videoUrl && (
                  <Link href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      Video Demo
                    </Button>
                  </Link>
                )}
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="rounded-lg bg-accent p-8">
          <h2 className="mb-4 text-2xl font-bold">Interested in Working Together?</h2>
          <p className="mb-6 text-muted-foreground">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Link href="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
