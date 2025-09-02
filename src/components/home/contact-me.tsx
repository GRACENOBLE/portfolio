"use client";

import { z } from "zod";
import Container from "../common/container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import H2 from "../common/heading-two";
import { Textarea } from "../ui/textarea";
import H3 from "../common/heading-three";
import { BiLogoInstagramAlt } from "react-icons/bi";
import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { SiRoadmapdotsh } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiLink } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { AnimatedTooltip } from "../animated-tooltip";
import { toast } from "sonner";
import { useState } from "react";

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

  const people = [
    {
      id: 1,
      name: "Twitter",
      designation: "@graceno75417321",
      icon: <FaSquareXTwitter />,
      link: "https://x.com/graceno75417321",
    },
    {
      id: 2,
      name: "Linkedin",
      designation: "ASIIMWE (GRACE) NOBLE",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/asiimwe-noble-5849a6255/",
    },
    {
      id: 3,
      name: "Instagram",
      designation: "@i_am_grace_noble",
      icon: <RiInstagramFill />,
      link: "https://www.instagram.com/i_am_grace_noble/",
    },
    {
      id: 4,
      name: "Roadmap.sh",
      designation: "grace noble",
      icon: <SiRoadmapdotsh />,
      link: "https://roadmap.sh/u/gracenoble",
    },
    {
      id: 5,
      name: "Dev Community",
      designation: "grace noble",
      icon: <FaDev />,
      link: "https://dev.to/grace_noble",
    },
    {
      id: 6,
      name: "Github",
      designation: "ASIIMWE GRACE NOBLE",
      icon: <FaGithub />,
      link: "https://github.com/GRACENOBLE",
    },
  ];

  return (
    <section id="contact-me" className="pb-20">
      <H2 className="text-center pb-12">Let's talk</H2>
      <Container size="sm">
        <div className="flex flex-col lg:flex-row border rounded-[24px] px-2 py-2 border-white/20 w-fit">
          <div className="lg:w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-muted px-6 md:px-8 py-8 rounded-2xl lg:w-xl mx-auto"
              >
                <H3 className="mb-2 text-center">Send me an email</H3>
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
                          className="bg-white/20 placeholder:text-white/60 placeholder:text-sm border-white/20 text-white"
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
                          className="bg-white/20 placeholder:text-white/60 placeholder:text-sm border-white/20 text-white"
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
                          className="h-40 bg-white/20 placeholder:text-white/60 placeholder:text-sm border-white/20 text-white"
                          placeholder="Tell me about your project or say hello..."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full max-w-40"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          <div className="w-full p-8 flex flex-col justify-center">
            <H3 className="text-center">Or</H3>
            <p className="flex flex-col gap-6 font-medium text-white/60  text-center">
              Find me on any of these
            </p>
            <div className="flex flex-row items-center justify-center mb-10 mt-8 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <p className="text-center text-white/60 max-w-lg mx-auto mt-8">
              <span className="italic">
                "Software is like entropy: it is difficult to grasp, weighs
                nothing, and always tends to increase."
              </span>
              — Norman Augustine
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
