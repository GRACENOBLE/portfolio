"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import {
  FaDev,
  FaGithub,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { SiRoadmapdotsh } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { AnimatedTooltip } from "../animated-tooltip";
import { toast } from "sonner";
import { useState } from "react";
import { MONARC_EMAIL } from "@/data/profile";
import { SITE } from "@/lib/site";
import { CornerMarks, Section, Tab } from "../blueprint";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Name must not be longer than 50 characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message must not be longer than 500 characters.",
    }),
});

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Reset form after successful submission
      form.reset();

      // Show success toast
      toast("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Failed to send message:", error);

      // Show error toast
      toast.error("Failed to send message", {
        description:
          error instanceof Error ? error.message : "Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Icons for each network in SITE.socials, which holds the links
  const icons: Record<string, React.ReactNode> = {
    "Twitter": <FaSquareXTwitter />,
    "Linkedin": <FaLinkedinIn />,
    "Instagram": <RiInstagramFill />,
    "Roadmap.sh": <SiRoadmapdotsh />,
    "Dev Community": <FaDev />,
    "Github": <FaGithub />,
  };
  const people = SITE.socials.map((social, idx) => ({
    id: idx + 1,
    name: social.name,
    designation: social.handle,
    icon: icons[social.name],
    link: social.url,
  }));

  return (
    <Section id="connect" title={<>Let&apos;s connect</>}>
      <div className="relative grid grid-cols-1 lg:grid-cols-[3fr_2fr] border border-line bg-paper">
        <CornerMarks />
        <div className="lg:border-r border-line">
          <Tab>Message</Tab>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-7 px-6 md:px-10 py-10"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Name</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        {...field}
                        className="h-11 placeholder:text-sm"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Email</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                        className="h-11 placeholder:text-sm"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Message</FormLabel>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Textarea
                        className="h-40 placeholder:text-sm"
                        placeholder="Hi Grace ..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex flex-col border-t lg:border-t-0 border-line">
          <Tab>Elsewhere</Tab>
          <div className="flex-1 px-6 md:px-10 py-10 flex flex-col justify-center gap-10">
            <p className="text-ink/65">Or find me on any of these</p>
            <div className="flex flex-row flex-wrap items-center gap-2">
              <AnimatedTooltip items={people} />
            </div>
            <p className="text-ink/65 text-sm">
              Monarc enquiries:{" "}
              <a
                href={`mailto:${MONARC_EMAIL}`}
                className="text-ink underline underline-offset-4"
              >
                {MONARC_EMAIL}
              </a>
            </p>
            <p className="text-ink/55 text-sm border-l-2 border-line-strong pl-4">
              <span className="italic">
                "Software is like entropy: it is difficult to grasp, weighs
                nothing, and always tends to increase."
              </span>{" "}
              (Norman Augustine)
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
