"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SITE_CONFIG } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    name: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
    value: SITE_CONFIG.email,
  },
  {
    name: "GitHub",
    href: SITE_CONFIG.github,
    icon: Github,
    value: "@mokulling",
  },
  {
    name: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    icon: Linkedin,
    value: "Matt Kulling",
  },
  {
    name: "Twitter",
    href: SITE_CONFIG.twitter,
    icon: Twitter,
    value: "@mattkulling",
  },
  {
    name: "Phone",
    href: `tel:${SITE_CONFIG.phone}`,
    icon: Phone,
    value: SITE_CONFIG.phone,
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log("Form data:", data);

    // In production, you would send this to an API endpoint
    // For now, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message sent successfully! (This is a demo - no email was actually sent)");
    reset();
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-bold">Matt Kulling</h2>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          <p className="mb-8 text-lg text-muted-foreground">
            Use one of the links below to get in touch!
          </p>

          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md"
                >
                  <div className="rounded-lg bg-primary p-3">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">{method.name}</div>
                    <div className="text-sm text-muted-foreground">{method.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  {...register("subject")}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
